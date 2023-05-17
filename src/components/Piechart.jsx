import React from "react";
import { Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Piechart = ({ data, handleColorChange }) => {
  return (
    <>
      <Pie data={data} onChange={handleColorChange} />
    </>
  );
};

export default Piechart;
