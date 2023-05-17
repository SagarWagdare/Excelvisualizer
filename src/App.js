import { Route, Routes } from 'react-router-dom';
import './App.css';
import ExcelChart from './components/ExcelChart';
import Piechart from './components/Piechart';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';

function App() {
  return (
    <>
      <ExcelChart />

      {/* <Routes>
        <Route path="/piechart" element={<Piechart />} />
        <Route path="/linechart" element={<LineChart />} />
        <Route path="/barchart" element={<BarChart />} />




      </Routes> */}
    </>
  );
}

export default App;
