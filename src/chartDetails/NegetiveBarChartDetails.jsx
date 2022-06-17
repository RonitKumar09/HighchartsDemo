import React from "react";

function NegetiveBarChartDetails() {
  return (
    <div>
      <h2>Shows 2 categories of Data (Male and Female Populations):-</h2>
      <ul>
        <li>
          <p>
            <span style={{ fontWeight: "600" }}>
              Population percentange in X-axis
            </span>
            <br></br>X axis shows percentange population positive on both sides
            (left male, right female)
          </p>
        </li>
        <li>
          <p>
            <span style={{ fontWeight: "600" }}> Age Category in Y-axis </span>
            <br></br>
            Age category to detemine percentage of specific male or female
            population by looking at the bar length on the category
          </p>
        </li>
      </ul>
      <div>
        <h4>
          Can be used to show two comparitive data side by side<br></br>for
          example:- Performance score of two rival teams ranging in years
        </h4>
      </div>
    </div>
  );
}

export default NegetiveBarChartDetails;
