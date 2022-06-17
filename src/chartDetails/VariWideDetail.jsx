import React from "react";

function VariWideDetail() {
  return (
    <div>
      <h2>Shows 2 dimensions of Data:-</h2>
      <ul>
        <li>
          <p>
            1st Dimension:-
            <span style={{ fontWeight: "600" }}> Labour Cost in Y-axis </span>
            <br></br>
            Labour Cost for individual contries can be seen in Y-axis
          </p>
        </li>
        <li>
          <p>
            2nd Dimension:-
            <span style={{ fontWeight: "600" }}>
              The width of the column shows how it is proportional to the
              country's GDP
            </span>
          </p>
        </li>
      </ul>
      <div>
        <h4>
          Used to show 2 dimensions of data in a single chart <br></br>for
          example:- Record of students height and weight in same graph
        </h4>
      </div>
    </div>
  );
}

export default VariWideDetail;
