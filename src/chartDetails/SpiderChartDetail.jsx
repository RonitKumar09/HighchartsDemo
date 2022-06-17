import React from "react";

function SpiderChartDetail() {
  return (
    <div>
      <h2>
        A Polar chart can be used to visulaize stretches or extends of certain
        confined limits
      </h2>
      <h3>
        {" "}
        Spiderweb charts are commonly used to compare multivariate data sets,
        like this demo using six variables of comparison.
      </h3>
      <ul>
        <li>
          <p>
            <span style={{ fontWeight: "600" }}>
              Areas where budget can be spend in X-axis
            </span>
            <br></br>
            X-axis here is the perimeter of the spiderweb, showing different
            categories in different points, here it shows all the areas where
            budget can be spent
          </p>
        </li>
        <li>
          <p>
            <span style={{ fontWeight: "600" }}>
              {" "}
              Y-axis is nothing but the radial lines coming out of center,
              ending on perimeter with highest value,
              <br></br> The values of alloted budget and spent budget is plotted
              on Y-axis
            </span>
            <br></br>
          </p>
        </li>
      </ul>
      <div>
        <h4>
          Can be used to show performance data in different aspects
          <br></br>for example:- Sport performance can plotted like in what area
          a player has performed how well
        </h4>
      </div>
    </div>
  );
}

export default SpiderChartDetail;
