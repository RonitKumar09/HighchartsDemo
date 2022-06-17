import React from "react";

function BubbleChartDetail() {
  return (
    <div>
      <h2>Shows 3 categories of Data:-</h2>
      <ul>
        <li>
          <p>
            1st category:-
            <span style={{ fontWeight: "600" }}> Fat intake in X-axis </span>
            <br></br>
            father the distance of bubble from vertical line (y-axis), larger
            the value
          </p>
        </li>
        <li>
          <p>
            2nd category:-
            <span style={{ fontWeight: "600" }}> Sugar intake in Y-axis </span>
            <br></br>
            father the distance of bubble from horizontal line (x-axis), larger
            the value
          </p>
        </li>
        <li>
          <p>
            3rd category:-
            <span style={{ fontWeight: "600" }}>
              Obesity (adults) in percentange (exclusive of any dependency,
              completely independent data)
            </span>
            <br></br>
            Larger the size of bubble, larger the value
          </p>
        </li>
        <li>
          <span style={{ fontWeight: "600" }}>Dotted lines,</span> can be used
          to denote any boundry condition or threshold<br></br>here it is used
          to show safe limits of sugar intake in y-axis(horizontal line) and
          safe limit of fat intake in x axis(vertical line)
        </li>
      </ul>
      <div>
        <h4>
          Used to show scattered data <br></br>for example:- some irregular
          attendance throughout the month{" "}
        </h4>
      </div>
    </div>
  );
}

export default BubbleChartDetail;
