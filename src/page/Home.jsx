import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Pie, Bar } from 'react-chartjs-2';
import { genderData, term1AvgData, term2AvgData } from "../utils/Data/Visuals";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Home = () => {
  
  return (
    <div>
      <p>Home</p>
      <div className="col-6">
        <Pie data={genderData} />
      </div>
      <div>
        <Bar data={term1AvgData}></Bar>
      </div>
    </div>
  )
}

export default Home
