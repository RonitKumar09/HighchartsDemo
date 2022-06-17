import React from "react";

function HeatMapDetail() {
  return (
    <div>
      <h2>
        Heatmaps are good for showing variance across multiple variables,
        revealing any patterns
      </h2>
      <ul>
        <li>
          <p>
            <span style={{ fontWeight: "600" }}>
              Name of employees in X-axis
            </span>
            <br></br>
            In order to make a matrix with Week Days and their performance (no.
            of sales) numbers
          </p>
        </li>
        <li>
          <p>
            <span style={{ fontWeight: "600" }}> Week Days in Y-axis </span>
            <br></br>
            This will help to matix the individual sales with weekdays
          </p>
        </li>
        <li>
          <p>
            <span style={{ fontWeight: "600" }}>
              Categorical data is colour-coded, while numerical data requires a
              colour scale that blends from one colour to another, in order to
              represent the difference in high and low values
            </span>
            <br></br>
            Darker the color more is its value, that make a color pattern to
            emerge and clarify us about the data variance
          </p>
        </li>
      </ul>
      <div>
        <h4>
          Can be used to show user interaction with a certain app, spread
          accross a time data
          <br></br>for example:- Plotting Code checkins over a month to see when
          user often pushes the code
        </h4>
      </div>
    </div>
  );
}

export default HeatMapDetail;
