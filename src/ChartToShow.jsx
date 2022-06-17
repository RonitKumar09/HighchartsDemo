import BubbleChartDetail from "./chartDetails/BubbleChartDetail";
import PieBarSplineDetail from "./chartDetails/PieBarSplineDetail";
import chartConfigs from "./chartConfigs";
import Chart from "./Chart";
import HeatMapDetail from "./chartDetails/HeatMapDetail";
import SpiderChartDetail from "./chartDetails/SpiderChartDetail";
import ItemChartDetail from "./chartDetails/ItemChartDetail";
import TreeMapDetail from "./chartDetails/TreeMapDetail";
import VariWideDetail from "./chartDetails/VariWideDetail";
import NegetiveBarChartDetails from "./chartDetails/NegetiveBarChartDetails";
import PercentBarStack from "./chartDetails/PercentBarStack";

function ChartToShow({ chartName }) {
  {
    const {
      bubbleChartConfig,
      pieBarSplineConfig,
      heatMapConfig,
      spiderChartConfig,
      itemChartConfig,
      treeChartConfig,
      variWideChartConfig,
      negetiveBarChartConfig,
      percentBarStackConfig,
    } = chartConfigs;
    switch (chartName) {
      case "Bubble Chart":
        return (
          <>
            <Chart options={bubbleChartConfig} />
            <BubbleChartDetail />
          </>
        );
      case "Combination Pie, Bar, Spline":
        return (
          <>
            <Chart options={pieBarSplineConfig} />
            <PieBarSplineDetail />
          </>
        );
      case "HeatMap":
        return (
          <>
            <Chart options={heatMapConfig} />
            <HeatMapDetail />
          </>
        );
      case "SpiderChart":
        return (
          <>
            <Chart options={spiderChartConfig} />
            <SpiderChartDetail />
          </>
        );
      case "ItemChart":
        return (
          <>
            <Chart options={itemChartConfig} />
            <ItemChartDetail />
          </>
        );
      case "TreeMap":
        return (
          <>
            <Chart options={treeChartConfig} />
            <TreeMapDetail />
          </>
        );
      case "VariWide":
        return (
          <>
            <Chart options={variWideChartConfig} />
            <VariWideDetail />
          </>
        );
      case "Bar with negative stack":
        return (
          <>
            <Chart options={negetiveBarChartConfig} />
            <NegetiveBarChartDetails />
          </>
        );
      case "Bar with percentage stack":
        return (
          <>
            <Chart options={percentBarStackConfig} />
            <PercentBarStack />
          </>
        );
    }
  }
}

export default ChartToShow;
