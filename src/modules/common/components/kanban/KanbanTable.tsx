import React, { useEffect, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import CustomAvatar from "../avatars/CustomAvatar";
import CandidatesSerivce from "./apiKanban/ApiKanban";

import {
  KanbanColumn,
  TableWrapper,
  DroppableDiv,
  DraggableNameAndAvatar,
  DraggableDivWrapper,
} from "./KanbanTableStyles";

type ColumnsType = {
  [x: string]: Candidate[];
};

type SetColumnsType = React.Dispatch<
  React.SetStateAction<{
    [x: string]: Candidate[];
  }>
>;

type SetUpdatedUserType = React.Dispatch<
  React.SetStateAction<Candidate | null>
>;

type Candidate = {
  id: number;
  name: string;
  recruiterAssignee: string;
  recruiterId: number;
  recruitmentName: string;
  source: string;
  stage: string;
  status: string;
  techAssignee: string;
  techId: number;
};

const onDragEnd = (
  result: DropResult,
  columns: ColumnsType,
  setColumns: SetColumnsType,
  setUpdatedUser: SetUpdatedUserType,
  setDestinationColumn: React.Dispatch<React.SetStateAction<string>>
) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceItems = columns[source.droppableId];
    const destItems = columns[destination.droppableId];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setUpdatedUser(removed);
    setDestinationColumn(destination.droppableId);
    setColumns({
      ...columns,
      [source.droppableId]: sourceItems,
      [destination.droppableId]: destItems,
    });
  } else {
    const copiedItems = columns[source.droppableId];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: copiedItems,
    });
  }
};

const CandidatePost = {
  paging: {
    pageSize: 100,
    pageNumber: 1,
  },
};

function KanbanTable() {
  const [aggregatedData, setAggregatedData] = useState<ColumnsType>({});
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [updatedUser, setUpdatedUser] = useState<Candidate | null>(null);
  const [destinationColumn, setDestinationColumn] = useState("");

  useEffect(() => {
    CandidatesSerivce.candidateHttpPost("GetList", CandidatePost).then(
      (response) => {
        setCandidates(response.candidateInfoForListDTOs);
      }
    );
  }, []);

  useEffect(() => {
    if (candidates.length) {
      const agg: ColumnsType = {
        NEW: [],
        EVALUATION: [],
        PHONE_INTERVIEW: [],
        INTERVIEW: [],
        TECH_INTERVIEW: [],
        DROPPED_OUT: [],
        OFFER: [],
        HIRED: [],
      };

      Object.keys(agg).forEach((item) => {
        for (let i = 0; i < candidates.length; i++) {
          if (item == candidates[i].status) {
            agg[item] = agg[item]
              ? [...agg[item], candidates[i]]
              : [candidates[i]];
          } else if (item == candidates[i].stage) {
            agg[item] = agg[item]
              ? [...agg[item], candidates[i]]
              : [candidates[i]];
          }
        }
      });
      setAggregatedData(agg);
    }
  }, [candidates]);

  useEffect(() => {
    const bodyFormData = new FormData();
    if (updatedUser !== null) {
      if (["NEW", "DROPPED_OUT", "HIRED"].includes(destinationColumn)) {
        bodyFormData.append("candidateId", updatedUser.id.toString());
        bodyFormData.append("status", destinationColumn.toString());
        bodyFormData.append("stage", ".");
        CandidatesSerivce.candidateUpdatePost("Edit", bodyFormData).then(() => {
          setUpdatedUser(null);
        });
      } else {
        bodyFormData.append("candidateId", updatedUser.id.toString());
        bodyFormData.append("status", "IN_PROCESSING");
        bodyFormData.append("stage", destinationColumn.toString());

        CandidatesSerivce.candidateUpdatePost("Edit", bodyFormData).then(() => {
          setUpdatedUser(null);
        });
      }
    }
  }, [updatedUser]);

  return (
    <DragDropContext
      onDragEnd={(result) =>
        onDragEnd(
          result,
          aggregatedData,
          setAggregatedData,
          setUpdatedUser,
          setDestinationColumn
        )
      }
    >
      <TableWrapper>
        {Object.entries(aggregatedData || {}).map(
          ([columnId, candidates], index) => {
            return (
              <KanbanColumn
                style={{
                  borderRight: index === 7 ? "" : "1px solid gray",
                }}
                key={columnId}
              >
                <h2>{columnId}</h2>
                <div style={{ margin: 8 }}>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <DroppableDiv
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "lightblue"
                              : "white",
                          }}
                        >
                          {candidates.map(
                            (candidate: Candidate, index: number) => {
                              return (
                                <Draggable
                                  key={candidate.id}
                                  draggableId={candidate.id.toString()}
                                  index={index}
                                >
                                  {(provided) => {
                                    return (
                                      <DraggableDivWrapper
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                          backgroundColor: "#FFE0CA",
                                          color: "#000000",
                                          ...provided.draggableProps.style,
                                        }}
                                      >
                                        <DraggableNameAndAvatar>
                                          {candidate.name}
                                          <CustomAvatar name={candidate.name} />
                                        </DraggableNameAndAvatar>
                                        {candidate.recruitmentName}
                                      </DraggableDivWrapper>
                                    );
                                  }}
                                </Draggable>
                              );
                            }
                          )}
                          {provided.placeholder}
                        </DroppableDiv>
                      );
                    }}
                  </Droppable>
                </div>
              </KanbanColumn>
            );
          }
        )}
      </TableWrapper>
    </DragDropContext>
  );
}

export default KanbanTable;
