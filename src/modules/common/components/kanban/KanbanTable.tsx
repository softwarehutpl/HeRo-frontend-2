import React, { useEffect, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import CustomAvatar from "../avatars/CustomAvatar";
import CandidatesSerivce from "./apiKanban/ApiKanban";

import {
  KanbanColumn,
  TableWrapper,
  DroppableDiv,
  DraggableNameAndAvatar,
  DraggableDivWrapper,
} from "./KanbanTableStyles";

// type SetColumnsType = React.Dispatch<
//   React.SetStateAction<{
//     [x: number]: {
//       name: string;
//       items: {
//         id: string;
//         content: string;
//       }[];
//     };
//   }>
// >;

const itemsFromBackend = [
  { id: uuidv4(), content: "Krzysztof Kononowitz" },
  { id: uuidv4(), content: "Grzegorz Szeszko" },
  { id: uuidv4(), content: "Jakub Sosnowski" },
  { id: uuidv4(), content: "John Dalton" },
  { id: uuidv4(), content: "Filip Mackiewicz" },
];

const columnsFromBackend = {
  [uuidv4()]: {
    name: "New",
    items: itemsFromBackend,
  },
  [uuidv4()]: {
    name: "Evaluation",
    items: [],
  },
  [uuidv4()]: {
    name: "Phone Interview",
    items: [],
  },
  [uuidv4()]: {
    name: "Interview",
    items: [],
  },
  [uuidv4()]: {
    name: "Offer",
    items: [],
  },
  [uuidv4()]: {
    name: "Hired",
    items: [],
  },
};

// type ColumnsType = {
//   [x: string]: {
//     name: string;
//     items: {
//       id: string;
//       content: string;
//     }[];
//   };
// };

type ColumnsType = {
  [x: string]: {
    id: string;
    name: string;
  }[];
};

type SetColumnsType = React.Dispatch<
  React.SetStateAction<{
    [x: string]: {
      id: string;
      name: string;
    }[];
  }>
>;

type SetUpdatedUserType = React.Dispatch<
  React.SetStateAction<{
    id: string;
    name: string;
  }>
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
  setUpdatedUser: SetUpdatedUserType
) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceItems = columns[source.droppableId];
    const destItems = columns[destination.droppableId];
    // const sourceItems = [...sourceColumn];
    // const destItems = [...destColumn];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setUpdatedUser(removed);
    setColumns({
      ...columns,
      // [source.droppableId]: {
      //   ...sourceColumn,
      //   items: sourceItems,
      // },
      [source.droppableId]: sourceItems,
      // [destination.droppableId]: {
      //   ...destColumn,
      //   items: destItems,
      // },
      [destination.droppableId]: destItems,
    });
  } else {
    const copiedItems = columns[source.droppableId];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      // [source.droppableId]: {
      //   ...column,
      //   items: copiedItems,
      // },
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
  // const [columns, setColumns] = useState(columnsFromBackend);
  const [all, setAll] = useState<string[]>([]);
  const [aggregatedData, setAggregatedData] = useState<ColumnsType>({});
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [updatedUser, setUpdatedUser] = useState<object | null>(null);

  useEffect(() => {
    CandidatesSerivce.candidateHttpPost("GetList", CandidatePost).then(
      (response) => {
        setCandidates(response.candidateInfoForListDTOs);
      }
    );

    const candidateStatuses =
      CandidatesSerivce.candidateStatusesGet("GetStatusList");
    candidateStatuses.then((res) => {
      const statuses = res.filter((item: string) => item !== "IN_PROCESSING");

      const candidateStages =
        CandidatesSerivce.candidateStagesGet("GetStageList");
      candidateStages.then((stages) => {
        setAll([...all, ...stages, ...statuses]);
      });
    });
  }, []);

  useEffect(() => {
    if (all.length && candidates.length) {
      const agg: any = {
        NEW: [],
        EVALUATION: [],
        PHONE_INTERVIEW: [],
        INTERVIEW: [],
        TECH_INTERVIEW: [],
        DROPPED_OUT: [],
        OFFER: [],
        HIRED: [],
      };
      console.log(candidates);
      // console.log(all);

      Object.keys(agg).forEach((a: string) => {
        for (let i = 0; i < candidates.length; i++) {
          if (a == candidates[i].status) {
            agg[a] = agg[a] ? [...agg[a], candidates[i]] : [candidates[i]];
          } else if (a == candidates[i].stage) {
            agg[a] = agg[a] ? [...agg[a], candidates[i]] : [candidates[i]];
          }
        }
      });

      // all.forEach((a: string) => {
      //   agg[a] ? null : (agg[a] = []);
      // });

      // candidates.forEach((c: any) => {
      //   // agg[c.status] = agg[c.status] ? [...agg[c.status], c] : [c];

      //   if (c.status !== "IN_PROCESSING") {
      //     if (agg[c.status]) {
      //       agg[c.status] = [...agg[c.status], c];
      //     } else {
      //       agg[c.status] = [c];
      //     }
      //   }
      // });
      console.log(agg);

      setAggregatedData(agg);
    }
  }, [all, candidates]);

  useEffect(() => {
    CandidatesSerivce.candidateHttpPost("GetList", CandidatePost).then(
      (response) => {
        setCandidates(response.candidateInfoForListDTOs);
      }
    );
  }, [updatedUser]);

  return (
    <DragDropContext
      onDragEnd={(result) =>
        onDragEnd(result, aggregatedData, setAggregatedData, setUpdatedUser)
      }
    >
      <TableWrapper>
        {Object.entries(aggregatedData).map(([columnId, candidates], index) => {
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
                        {candidates.map((candidate: any, index: number) => {
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
                                    {"Front-End Dev"}
                                  </DraggableDivWrapper>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </DroppableDiv>
                    );
                  }}
                </Droppable>
              </div>
            </KanbanColumn>
          );
        })}
      </TableWrapper>
    </DragDropContext>
  );
}

export default KanbanTable;
