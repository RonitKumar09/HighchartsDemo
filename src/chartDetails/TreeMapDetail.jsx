import React from "react";

function TreeMapDetail() {
  return (
    <div>
      <h2>
        TreeMap capture relative sizes of data categories, allowing for quick
        perception of the items that are large contributors to each category
      </h2>
      <ul>
        <li>
          <p>
            <span style={{ fontWeight: "600" }}>
              {" "}
              Color can identify items that are underperforming (or
              overperforming) compared to their siblings from the same category{" "}
            </span>
            <br></br>
          </p>
        </li>
        <li>
          <p>
            <span style={{ fontWeight: "600" }}>
              {" "}
              Treemaps work well when your hierarchical data has 2 main
              dimensions that you want to visualize:
            </span>
            <br></br>A positive quantitative value, which will be expressed as
            the area of the rectangle (Because area cannot be negative, you
            cannot use treemaps for visualizing variables like gain/loss, which
            can have both positive and negative values.)<br></br>A categorical
            or second quantitative value, which will be expressed as the color
            of the individual rectangles.
          </p>
        </li>
      </ul>
      <div>
        <h4></h4>
      </div>
    </div>
  );
}

export default TreeMapDetail;
