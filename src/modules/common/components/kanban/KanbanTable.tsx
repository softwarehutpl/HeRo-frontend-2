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

type SetColumnsType = React.Dispatch<
  React.SetStateAction<{
    [x: number]: {
      name: string;
      items: {
        id: string;
        content: string;
      }[];
    };
  }>
>;

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

console.log(columnsFromBackend);

type ColumnsType = {
  [x: string]: {
    name: string;
    items: {
      id: string;
      content: string;
    }[];
  };
};

const onDragEnd = (
  result: DropResult,
  columns: ColumnsType,
  setColumns: SetColumnsType
) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

const CandidatePost = {
  status: ["IN_PROCESSING"],
  paging: {
    pageSize: 10,
    pageNumber: 1,
  },
};

function KanbanTable() {
  const [columns, setColumns] = useState(columnsFromBackend);

  useEffect(() => {
    const projectData = CandidatesSerivce.candidateHttpPost(
      "GetList",
      CandidatePost
    );
    projectData.then((res) => console.log(res));
  }, []);

  return (
    <DragDropContext
      onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
    >
      <TableWrapper>
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <KanbanColumn
              style={{
                borderRight: index === 5 ? "" : "1px solid gray",
              }}
              key={columnId}
            >
              <h2>{column.name}</h2>
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
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
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
                                      {item.content}
                                      <CustomAvatar name={item.content} />
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
