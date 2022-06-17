import React from "react";

function PieBarSplineDetail() {
  return (
    <div>
      <h2>
        Shows number of different Fruits eaten by Individuals, their sum(pie)
        and average(spline) Data:-
      </h2>
      <ul>
        <li>
          <p>
            <span style={{ fontWeight: "600" }}> Name of Fruits X-axis </span>
            <br></br>
            categories are fruit names, Shows 3 different Bars for 3 different
            Individuals (Jane, Jhon, Joe)
          </p>
        </li>
        <li>
          <p>
            <span style={{ fontWeight: "600" }}>
              {" "}
              Number of fruits eaten in Y-axis{" "}
            </span>
            <br></br>
            larger the height of column bigger is the Y- value (more is the
            number of fruits eaten)<br></br> for example, in 2nd Category
            "Oranges" the second column shows the number of Oranges eaten by
            Jhon, that is 3
          </p>
        </li>
        <li>
          <p>
            <span style={{ fontWeight: "600" }}>
              Spline to show Average of each food eaten
            </span>
            <br></br>
            Upon Hover tooltip shows the average number of fruit eaten by all
            Individuals<br></br> for example "Pears" <br></br> Jane ate 1 Pear,
            Jhon ate 5 Pears and Joe ate 3 Pears, so total pears eaten are 9 and
            hence average number of pears eaten is 9 divided by 3 = 3
          </p>
        </li>
        <li>
          <span style={{ fontWeight: "600" }}>Pie Chart,</span> can be used to
          show total sum of scores in different categories for a single
          individual<br></br>here it is used to show total number of fruits
          eaten by Jane, Jhon and Joe
        </li>
      </ul>
      <div>
        <h4>
          Can be used to show data in three evaluations, Simple representation,
          catergory average and sum of categories for an individual<br></br>The
          chart is using a set of column series, overlaid by a line and a pie
          series. The line is illustrating the column averages, while the pie is
          illustrating the column totals.<br></br>for example:- To show results
          of common participants in different competitions, average score and
          final total score
        </h4>
      </div>
    </div>
  );
}

export default PieBarSplineDetail;
