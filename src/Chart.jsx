import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HC_more from "highcharts/highcharts-more";
import HighchartsHeatmap from "highcharts/modules/heatmap";
import HighchartsIndicators from "highcharts/modules/item-series";
import HighchartsTreeMap from "highcharts/modules/treemap";
import HC_VariWide from "highcharts/modules/variwide";
HC_more(Highcharts);
HighchartsHeatmap(Highcharts);
HighchartsIndicators(Highcharts);
HighchartsTreeMap(Highcharts);
HC_VariWide(Highcharts);
function Chart({ options }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </>
  );
}

export default Chart;
