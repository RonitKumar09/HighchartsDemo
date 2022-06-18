import React, { useState } from "react";
import ChartList from "./ChartList";
import "./menu.css";
import ChartToShow from "./ChartToShow";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function getImageUrl(name) {
  return new URL(`./image/${name}.png`, import.meta.url).href;
}

function Menu() {
  const [chartName, changeChartName] = useState("default");
  const [graphList, updateGraphList] = useState(
    () => JSON.parse(localStorage.getItem("ChartList")) || ChartList
  );
  const [sort, doSort] = useState(false);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(graphList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateGraphList(items);
    localStorage.setItem("ChartList", JSON.stringify(items));
  }

  return (
    <>
      {chartName !== "default" && (
        <h2
          className="go-back"
          onClick={() => {
            changeChartName("default");
          }}
        >
          Go Back To Selection
        </h2>
      )}
      {chartName === "default" && (
        <h2
          className="go-back"
          onClick={() => {
            doSort((sort) => !sort);
          }}
        >
          {sort ? "Done Sorting" : "Sort Order"}
        </h2>
      )}

      {chartName === "default" ? (
        <div className="wrapper">
          <h1 className="heading">Example Charts</h1>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable
              isDropDisabled={!sort}
              droppableId="dropableContextConsumer"
              DroppableMode="virtual"
            >
              {(provided) => (
                <div
                  className="container"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{ flexDirection: sort ? "column" : "row" }}
                >
                  {graphList?.map((e, index) => (
                    <Draggable
                      key={e.id}
                      draggableId={e.id}
                      index={index}
                      isDragDisabled={!sort}
                    >
                      {(provided) => (
                        <div
                          className="chartOptionCard"
                          onClick={() => {
                            changeChartName(e.name);
                          }}
                          id={e.id}
                          key={e.id}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <h2>{e.name}</h2>
                          <div className="image-container">
                            <img
                              alt={`${e.name}`}
                              src={getImageUrl(e.img)}
                              width="400px"
                            />
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      ) : (
        <div className="chart-container">
          <ChartToShow chartName={chartName} />
        </div>
      )}
    </>
  );
}

export default Menu;
