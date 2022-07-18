
import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable,  DropResult } from "react-beautiful-dnd";
import { v4 as uuidv4 } from 'uuid';

import {KanbanColumn, TableWrapper, DroppableDiv, DraggableDiv} from "./KanbanTableStyles";





type SetColumnsType = React.Dispatch<React.SetStateAction<{
  [x: number]: {
      name: string;
      items: {
          id: any;
          content: string;
      }[];
  };
}>>


const itemsFromBackend = [
  { id: uuidv4(), content: "Krzysztof Kononowitz" },
  { id: uuidv4(), content: "Grzegorz Szeszko" },
  { id: uuidv4(), content: "Jakub Sosnowski" },
  { id: uuidv4(), content: "John Dalton" },
  { id: uuidv4(), content: "Filip Mackiewicz" }
];





const columnsFromBackend = {
  [uuidv4()]: {
    name: "New",
    items: itemsFromBackend
  },
  [uuidv4()]: {
    name: "Evaluation",
    items: []
  },
  [uuidv4()]: {
    name: "Phone Interview",
    items: []
  },
  [uuidv4()]: {
    name: "Interview",
    items: []
  },
  [uuidv4()]: {
    name: "Offer",
    items: []
  },
  [uuidv4()]: {
    name: "Hired",
    items: []
  }
};

const onDragEnd = (result:  DropResult, columns: any, setColumns: SetColumnsType) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId] ;
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
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
        items: copiedItems
      }
    });
  }
};




function KanbanTable() {
  const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <TableWrapper>
      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <KanbanColumn
              style={{
                borderRight: index ===5 ? "" : "1px solid gray",
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
                              {(provided, snapshot) => {
                                return (
                                  <DraggableDiv
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      
                                      backgroundColor: snapshot.isDragging
                                        ? "#263B4A"
                                        : "#456C86",
                                      color: "white",
                                      ...provided.draggableProps.style
                                    }}
                                  >
                                    {item.content}
                                  </DraggableDiv>
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
      </DragDropContext>
    </TableWrapper>
  );
}

export default KanbanTable;


