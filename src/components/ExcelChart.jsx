// import React, { useEffect, useState } from "react";
// import * as XLSX from "xlsx";
// import { Bar } from "react-chartjs-2";
// import BarChart from "./BarChart";
// import LineChart from "./LineChart";
// import Piechart from "./Piechart";
// import UserData from "./UserData";
// import { Card, Form } from "react-bootstrap";

// const ExcelChart = () => {
//   const [chartData, setChartData] = useState([]);
//   console.log("111", chartData);
//   const handleFileUpload = (e) => {
//     const reader = new FileReader();
//     reader.readAsBinaryString(e.target.files[0]);
//     reader.onload = (e) => {
//       const data = e.target.result;
//       const workbook = XLSX.read(data, { type: "binary" });
//       const sheetName = workbook.SheetNames[0];
//       const sheet = workbook.Sheets[sheetName];
//       const parsedData = XLSX.utils.sheet_to_json(sheet);
//       setChartData(parsedData);
//     };
//   };

//   const [data, setData] = useState({
//     // labels: UserData.map((data) => data.__EMPTY),
//     labels: [],
//     datasets: [
//       {
//         label: "ExcelSheet Data",
//         data: [],
//         backgroundColor: [
//           "lightgreen",
//           "rgba(153,102,23,22)",
//           "rgba(153,10,23,22)",
//           "rgba(153,302,23,22)",
//           "rgba(15,302,23,22)",
//         ],
//         border: "none",
//         borderWidth: 2,
//       },
//     ],
//   });

//   useEffect(() => {
//     const updatedData = {
//       ...data,
//       labels: chartData.map((data) => data.__EMPTY),
//       datasets: [
//         {
//           ...data.datasets[0],
//           data: chartData.map((data) => data.__EMPTY_1),
//         },
//       ],
//     };
//     setData(updatedData);
//   }, [chartData]);

//   return (
//     <>
//       <div>
//         <h2 className="text-center">Excel Data Visualizer</h2>
//         {/* <input type="file" onChange={handleFileUpload} /> */}{" "}
//         <Form.Control
//           type="file"
//           required
//           name="file"
//           style={{ width: "30%" }}
//           className="bg-secondary m-2"
//           onChange={handleFileUpload}
//         />
//       </div>

//       <Card
//         className="shadow mt-4"
//         style={{ width: "50%", margin: "auto", border: "none" }}
//       >
//         <h3 className="text-center">BarChart</h3>
//         <BarChart data={data} />
//       </Card>
//       <Card
//         className="shadow mt-4"
//         style={{ width: "50%", margin: "auto", border: "none" }}
//       >
//         <h3 className="text-center">LineChart</h3>

//         <LineChart data={data} />
//       </Card>
//       <Card
//         className="shadow mt-4"
//         style={{ width: "50%", margin: "auto", border: "none" }}
//       >
//         <h3 className="text-center">PieChart</h3>

//         <Piechart data={data} />
//       </Card>
//     </>
//   );
// };

// export default ExcelChart;

import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { Bar } from "react-chartjs-2";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import Piechart from "./Piechart";
import UserData from "./UserData";
import { Card, Form } from "react-bootstrap";

const ExcelChart = () => {
  const [chartData, setChartData] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState("lightgreen");

  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setChartData(parsedData);
    };
  };

  const handleChangeBackgroundColor = (e) => {
    setBackgroundColor(e.target.value);
  };

  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "ExcelSheet Data",
        data: [],
        backgroundColor: backgroundColor,
        border: "none",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    const updatedData = {
      ...data,
      labels: chartData.map((data) => data.__EMPTY),
      datasets: [
        {
          ...data.datasets[0],
          data: chartData.map((data) => data.__EMPTY_1),
          backgroundColor: backgroundColor,
        },
      ],
    };
    setData(updatedData);
  }, [chartData, backgroundColor]);

  return (
    <>
      <div>
        <h2 className="text-center">Excel Data Visualizer</h2>
        <Form.Control
          type="file"
          required
          name="file"
          style={{ width: "30%" }}
          className="bg-secondary m-2"
          onChange={handleFileUpload}
        />
        <Form.Control
          type="color"
          value={backgroundColor}
          onChange={handleChangeBackgroundColor}
        />
      </div>

      <Card
        className="shadow mt-4"
        style={{ width: "50%", margin: "auto", border: "none" }}
      >
        <h3 className="text-center">BarChart</h3>
        <BarChart data={data} />
      </Card>
      <Card
        className="shadow mt-4"
        style={{ width: "50%", margin: "auto", border: "none" }}
      >
        <h3 className="text-center">LineChart</h3>
        <LineChart data={data} />
      </Card>
      <Card
        className="shadow mt-4"
        style={{ width: "50%", margin: "auto", border: "none" }}
      >
        <h3 className="text-center">PieChart</h3>
        <Piechart data={data} />
      </Card>
    </>
  );
};

export default ExcelChart;
