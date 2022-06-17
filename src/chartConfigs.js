import Highcharts from "highcharts";

const chartConfigs = {
  bubbleChartConfig: {
    chart: {
      type: "bubble",
      plotBorderWidth: 1,
      // zoomType: "xy",

      height: 400,
      width: 600,
      spacing: [5, 5, 5, 5],
    },

    legend: {
      enabled: false,
    },

    title: {
      text: "Sugar and fat intake per country",
    },

    subtitle: {
      text: 'Source: <a href="http://www.euromonitor.com/">Euromonitor</a> and <a href="https://data.oecd.org/">OECD</a>',
    },

    accessibility: {
      point: {
        valueDescriptionFormat:
          "{index}. {point.name}, fat: {point.x}g, sugar: {point.y}g, obesity: {point.z}%.",
      },
    },

    xAxis: {
      gridLineWidth: 1,
      title: {
        text: "Daily fat intake",
      },
      labels: {
        format: "{value} gr",
      },
      plotLines: [
        {
          color: "black",
          dashStyle: "dot",
          width: 2,
          value: 65,
          label: {
            rotation: 0,
            y: 15,
            style: {
              fontStyle: "italic",
            },
            text: "Safe fat intake 65g/day",
          },
          zIndex: 3,
        },
      ],
      accessibility: {
        rangeDescription: "Range: 60 to 100 grams.",
      },
    },

    yAxis: {
      startOnTick: false,
      endOnTick: false,
      title: {
        text: "Daily sugar intake",
      },
      labels: {
        format: "{value} gr",
      },
      maxPadding: 0.2,
      plotLines: [
        {
          color: "black",
          dashStyle: "dot",
          width: 2,
          value: 50,
          label: {
            align: "right",
            style: {
              fontStyle: "italic",
            },
            text: "Safe sugar intake 50g/day",
            x: -10,
          },
          zIndex: 3,
        },
      ],
      accessibility: {
        rangeDescription: "Range: 0 to 160 grams.",
      },
    },

    tooltip: {
      useHTML: true,
      headerFormat: "<table>",
      pointFormat:
        '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
        "<tr><th>Fat intake:</th><td>{point.x}g</td></tr>" +
        "<tr><th>Sugar intake:</th><td>{point.y}g</td></tr>" +
        "<tr><th>Obesity (adults):</th><td>{point.z}%</td></tr>",
      footerFormat: "</table>",
      followPointer: true,
    },

    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: "{point.name}",
        },
      },
    },

    series: [
      {
        data: [
          { x: 95, y: 95, z: 13.8, name: "BE", country: "Belgium" },
          { x: 86.5, y: 102.9, z: 14.7, name: "DE", country: "Germany" },
          { x: 80.8, y: 91.5, z: 15.8, name: "FI", country: "Finland" },
          { x: 80.4, y: 102.5, z: 12, name: "NL", country: "Netherlands" },
          { x: 80.3, y: 86.1, z: 11.8, name: "SE", country: "Sweden" },
          { x: 78.4, y: 70.1, z: 16.6, name: "ES", country: "Spain" },
          { x: 74.2, y: 68.5, z: 14.5, name: "FR", country: "France" },
          { x: 73.5, y: 83.1, z: 10, name: "NO", country: "Norway" },
          { x: 71, y: 93.2, z: 24.7, name: "UK", country: "United Kingdom" },
          { x: 69.2, y: 57.6, z: 10.4, name: "IT", country: "Italy" },
          { x: 68.6, y: 20, z: 16, name: "RU", country: "Russia" },
          { x: 65.5, y: 126.4, z: 35.3, name: "US", country: "United States" },
          { x: 65.4, y: 50.8, z: 28.5, name: "HU", country: "Hungary" },
          { x: 63.4, y: 51.8, z: 15.4, name: "PT", country: "Portugal" },
          { x: 64, y: 82.9, z: 31.3, name: "NZ", country: "New Zealand" },
        ],
      },
    ],
  },
  pieBarSplineConfig: {
    title: {
      text: "Combination chart",
    },
    xAxis: {
      categories: ["Apples", "Oranges", "Pears", "Bananas", "Plums"],
    },
    labels: {
      items: [
        {
          html: "Total fruit consumption",
          style: {
            left: "50px",
            top: "18px",
            color:
              // theme
              (Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color) ||
              "black",
          },
        },
      ],
    },
    series: [
      {
        type: "column",
        name: "Jane",
        data: [3, 2, 1, 3, 4],
      },
      {
        type: "column",
        name: "John",
        data: [2, 3, 5, 7, 6],
      },
      {
        type: "column",
        name: "Joe",
        data: [4, 3, 3, 9, 0],
      },
      {
        type: "spline",
        name: "Average",
        data: [3, 2.67, 3, 6.33, 3.33],
        marker: {
          lineWidth: 2,
          lineColor: Highcharts.getOptions().colors[3],
          fillColor: "white",
        },
      },
      {
        type: "pie",
        name: "Total consumption",
        data: [
          {
            name: "Jane",
            y: 13,
            color: Highcharts.getOptions().colors[0], // Jane's color
          },
          {
            name: "John",
            y: 23,
            color: Highcharts.getOptions().colors[1], // John's color
          },
          {
            name: "Joe",
            y: 19,
            color: Highcharts.getOptions().colors[2], // Joe's color
          },
        ],
        center: [100, 80],
        size: 100,
        showInLegend: false,
        dataLabels: {
          enabled: false,
        },
      },
    ],
  },
  heatMapConfig: {
    chart: {
      type: "heatmap",
      marginTop: 40,
      marginBottom: 80,
      plotBorderWidth: 1,
    },

    title: {
      text: "Sales per employee per weekday",
    },

    xAxis: {
      categories: [
        "Alexander",
        "Marie",
        "Maximilian",
        "Sophia",
        "Lukas",
        "Maria",
        "Leon",
        "Anna",
        "Tim",
        "Laura",
      ],
    },

    yAxis: {
      categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      title: null,
      reversed: true,
    },

    accessibility: {
      point: {
        descriptionFormatter: function (point) {
          var ix = point.index + 1,
            xName = getPointCategoryName(point, "x"),
            yName = getPointCategoryName(point, "y"),
            val = point.value;
          return ix + ". " + xName + " sales " + yName + ", " + val + ".";
        },
      },
    },

    colorAxis: {
      min: 0,
      minColor: "#FFFFFF",
      maxColor: Highcharts.getOptions().colors[0],
    },

    legend: {
      align: "right",
      layout: "vertical",
      margin: 0,
      verticalAlign: "top",
      y: 25,
      symbolHeight: 280,
    },

    tooltip: {
      formatter: function () {
        return (
          "<b>" +
          getPointCategoryName(this.point, "x") +
          "</b> sold <br><b>" +
          this.point.value +
          "</b> items on <br><b>" +
          getPointCategoryName(this.point, "y") +
          "</b>"
        );
      },
    },

    series: [
      {
        name: "Sales per employee",
        borderWidth: 1,
        data: [
          [0, 0, 10],
          [0, 1, 19],
          [0, 2, 8],
          [0, 3, 24],
          [0, 4, 67],
          [1, 0, 92],
          [1, 1, 58],
          [1, 2, 78],
          [1, 3, 117],
          [1, 4, 48],
          [2, 0, 35],
          [2, 1, 15],
          [2, 2, 123],
          [2, 3, 64],
          [2, 4, 52],
          [3, 0, 72],
          [3, 1, 132],
          [3, 2, 114],
          [3, 3, 19],
          [3, 4, 16],
          [4, 0, 38],
          [4, 1, 5],
          [4, 2, 8],
          [4, 3, 117],
          [4, 4, 115],
          [5, 0, 88],
          [5, 1, 32],
          [5, 2, 12],
          [5, 3, 6],
          [5, 4, 120],
          [6, 0, 13],
          [6, 1, 44],
          [6, 2, 88],
          [6, 3, 98],
          [6, 4, 96],
          [7, 0, 31],
          [7, 1, 1],
          [7, 2, 82],
          [7, 3, 32],
          [7, 4, 30],
          [8, 0, 85],
          [8, 1, 97],
          [8, 2, 123],
          [8, 3, 64],
          [8, 4, 84],
          [9, 0, 47],
          [9, 1, 114],
          [9, 2, 31],
          [9, 3, 48],
          [9, 4, 91],
        ],
        dataLabels: {
          enabled: true,
          color: "#000000",
        },
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            yAxis: {
              labels: {
                formatter: function () {
                  return this.value.charAt(0);
                },
              },
            },
          },
        },
      ],
    },
  },
  spiderChartConfig: {
    chart: {
      polar: true,
      type: "line",
    },

    accessibility: {
      description:
        "A spiderweb chart compares the allocated budget against actual spending within an organization. The spider chart has six spokes. Each spoke represents one of the 6 departments within the organization: sales, marketing, development, customer support, information technology and administration. The chart is interactive, and each data point is displayed upon hovering. The chart clearly shows that 4 of the 6 departments have overspent their budget with Marketing responsible for the greatest overspend of $20,000. The allocated budget and actual spending data points for each department are as follows: Sales. Budget equals $43,000; spending equals $50,000. Marketing. Budget equals $19,000; spending equals $39,000. Development. Budget equals $60,000; spending equals $42,000. Customer support. Budget equals $35,000; spending equals $31,000. Information technology. Budget equals $17,000; spending equals $26,000. Administration. Budget equals $10,000; spending equals $14,000.",
    },

    title: {
      text: "Budget vs spending",
      x: -80,
    },

    pane: {
      size: "80%",
    },

    xAxis: {
      categories: [
        "Sales",
        "Marketing",
        "Development",
        "Customer Support",
        "Information Technology",
        "Administration",
      ],
      tickmarkPlacement: "on",
      lineWidth: 0,
    },

    yAxis: {
      gridLineInterpolation: "polygon",
      lineWidth: 0,
      min: 0,
    },

    tooltip: {
      shared: true,
      pointFormat:
        '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>',
    },

    legend: {
      align: "right",
      verticalAlign: "middle",
      layout: "vertical",
    },

    series: [
      {
        name: "Allocated Budget",
        data: [43000, 19000, 60000, 35000, 17000, 10000],
        pointPlacement: "on",
      },
      {
        name: "Actual Spending",
        data: [50000, 39000, 42000, 31000, 26000, 14000],
        pointPlacement: "on",
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              align: "center",
              verticalAlign: "bottom",
              layout: "horizontal",
            },
            pane: {
              size: "70%",
            },
          },
        },
      ],
    },
  },
  itemChartConfig: {
    chart: {
      type: "item",
    },

    title: {
      text: "Highcharts item chart",
    },

    subtitle: {
      text: "Number of Food Items",
    },

    legend: {
      labelFormat: '{name} <span style="opacity: 0.4">{y}</span>',
    },

    series: [
      {
        name: "Foods",
        keys: ["name", "y", "color", "label"],
        data: [
          ["Doughnut", 42, "#000000", "🍩"],
          ["Candy", 53, "#EB001F", "🍬"],
          ["Lollipop", 52, "#64A12D", "🍭"],
          ["Pastries", 83, "#008AC5", "🎂"],
        ],
        dataLabels: {
          enabled: true,
          format: "{point.label}",
        },

        // Circular options
        /* center: ['50%', '88%'],
        size: '170%',
        startAngle: -100,
        endAngle: 100 */
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 600,
          },
          chartOptions: {
            series: [
              {
                dataLabels: {
                  distance: -30,
                },
              },
            ],
          },
        },
      ],
    },
  },
  treeChartConfig: {
    series: [
      {
        type: "treemap",
        layoutAlgorithm: "stripes",
        alternateStartingDirection: true,
        levels: [
          {
            level: 1,
            layoutAlgorithm: "sliceAndDice",
            dataLabels: {
              enabled: true,
              align: "left",
              verticalAlign: "top",
              style: {
                fontSize: "15px",
                fontWeight: "bold",
              },
            },
          },
        ],
        data: [
          {
            id: "A",
            name: "Apples",
            color: "#EC2500",
          },
          {
            id: "B",
            name: "Bananas",
            color: "#ECE100",
          },
          {
            id: "O",
            name: "Oranges",
            color: "#EC9800",
          },
          {
            name: "Anne",
            parent: "A",
            value: 5,
          },
          {
            name: "Rick",
            parent: "A",
            value: 3,
          },
          {
            name: "Peter",
            parent: "A",
            value: 4,
          },
          {
            name: "Anne",
            parent: "B",
            value: 4,
          },
          {
            name: "Rick",
            parent: "B",
            value: 10,
          },
          {
            name: "Peter",
            parent: "B",
            value: 1,
          },
          {
            name: "Anne",
            parent: "O",
            value: 1,
          },
          {
            name: "Rick",
            parent: "O",
            value: 3,
          },
          {
            name: "Peter",
            parent: "O",
            value: 3,
          },
          {
            name: "Susanne",
            parent: "Kiwi",
            value: 2,
            color: "#9EDE00",
          },
        ],
      },
    ],
    title: {
      text: "Fruit consumption",
    },
  },
  variWideChartConfig: {
    chart: {
      type: "variwide",
    },

    title: {
      text: "Labor Costs in Europe, 2016",
    },

    subtitle: {
      text:
        'Source: <a href="http://ec.europa.eu/eurostat/web/' +
        'labour-market/labour-costs/main-tables">eurostat</a>',
    },

    xAxis: {
      type: "category",
    },

    caption: {
      text: "Column widths are proportional to GDP",
    },

    legend: {
      enabled: false,
    },

    series: [
      {
        name: "Labor Costs",
        data: [
          ["Norway", 50.2, 335504],
          ["Denmark", 42, 277339],
          ["Belgium", 39.2, 421611],
          ["Sweden", 38, 462057],
          ["France", 35.6, 2228857],
          ["Netherlands", 34.3, 702641],
          ["Finland", 33.2, 215615],
          ["Germany", 33.0, 3144050],
          ["Austria", 32.7, 349344],
          ["Ireland", 30.4, 275567],
          ["Italy", 27.8, 1672438],
          ["United Kingdom", 26.7, 2366911],
          ["Spain", 21.3, 1113851],
          ["Greece", 14.2, 175887],
          ["Portugal", 13.7, 184933],
          ["Czech Republic", 10.2, 176564],
          ["Poland", 8.6, 424269],
          ["Romania", 5.5, 169578],
        ],
        dataLabels: {
          enabled: true,
          format: "€{point.y:.0f}",
        },
        tooltip: {
          pointFormat:
            "Labor Costs: <b>€ {point.y}/h</b><br>" +
            "GDP: <b>€ {point.z} million</b><br>",
        },
        colorByPoint: true,
      },
    ],
  },
  negetiveBarChartConfig: {
    chart: {
      type: "bar",
    },
    title: {
      text: "Population pyramid for Germany, 2018",
    },
    subtitle: {
      text: 'Source: <a href="http://populationpyramid.net/germany/2018/">Population Pyramids of the World from 1950 to 2100</a>',
    },
    accessibility: {
      point: {
        valueDescriptionFormat: "{index}. Age {xDescription}, {value}%.",
      },
    },
    xAxis: [
      {
        categories: [
          "0-4",
          "5-9",
          "10-14",
          "15-19",
          "20-24",
          "25-29",
          "30-34",
          "35-39",
          "40-44",
          "45-49",
          "50-54",
          "55-59",
          "60-64",
          "65-69",
          "70-74",
          "75-79",
          "80-84",
          "85-89",
          "90-94",
          "95-99",
          "100 + ",
        ],
        reversed: false,
        labels: {
          step: 1,
        },
        accessibility: {
          description: "Age (male)",
        },
      },
      {
        // mirror axis on right side
        opposite: true,
        reversed: false,
        categories: [
          "0-4",
          "5-9",
          "10-14",
          "15-19",
          "20-24",
          "25-29",
          "30-34",
          "35-39",
          "40-44",
          "45-49",
          "50-54",
          "55-59",
          "60-64",
          "65-69",
          "70-74",
          "75-79",
          "80-84",
          "85-89",
          "90-94",
          "95-99",
          "100 + ",
        ],
        linkedTo: 0,
        labels: {
          step: 1,
        },
        accessibility: {
          description: "Age (female)",
        },
      },
    ],
    yAxis: {
      title: {
        text: null,
      },
      labels: {
        formatter: function () {
          return Math.abs(this.value) + "%";
        },
      },
      accessibility: {
        description: "Percentage population",
        rangeDescription: "Range: 0 to 5%",
      },
    },

    plotOptions: {
      series: {
        stacking: "normal",
      },
    },

    tooltip: {
      formatter: function () {
        return (
          "<b>" +
          this.series.name +
          ", age " +
          this.point.category +
          "</b><br/>" +
          "Population: " +
          Highcharts.numberFormat(Math.abs(this.point.y), 1) +
          "%"
        );
      },
    },

    series: [
      {
        name: "Male",
        data: [
          -2.2, -2.1, -2.2, -2.4, -2.7, -3.0, -3.3, -3.2, -2.9, -3.5, -4.4,
          -4.1, -3.4, -2.7, -2.3, -2.2, -1.6, -0.6, -0.3, -0.0, -0.0,
        ],
      },
      {
        name: "Female",
        data: [
          2.1, 2.0, 2.1, 2.3, 2.6, 2.9, 3.2, 3.1, 2.9, 3.4, 4.3, 4.0, 3.5, 2.9,
          2.5, 2.7, 2.2, 1.1, 0.6, 0.2, 0.0,
        ],
      },
    ],
  },
  percentBarStackConfig: {
    chart: {
      type: "column",
    },
    title: {
      text: "Stacked column chart",
    },
    xAxis: {
      categories: ["Apples", "Oranges", "Pears", "Grapes", "Bananas"],
    },
    yAxis: {
      min: 0,
      title: {
        text: "Total fruit consumption",
      },
    },
    tooltip: {
      pointFormat:
        '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
      shared: true,
    },
    plotOptions: {
      column: {
        stacking: "percent",
      },
    },
    series: [
      {
        name: "John",
        data: [5, 3, 4, 7, 2],
      },
      {
        name: "Jane",
        data: [2, 2, 3, 2, 1],
      },
      {
        name: "Joe",
        data: [3, 4, 4, 2, 5],
      },
    ],
  },
};

function getPointCategoryName(point, dimension) {
  var series = point.series,
    isY = dimension === "y",
    axis = series[isY ? "yAxis" : "xAxis"];
  return axis.categories[point[isY ? "y" : "x"]];
}

export default chartConfigs;
