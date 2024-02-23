import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from 'react-chartjs-2';

import { students } from "../utils/Data/Student"

ChartJS.register(ArcElement, Tooltip, Legend);

const Home = () => {
  const males =  students.students.filter((student) => student.gender == "Male").length;
  const females =  students.students.filter((student) => student.gender == "Female").length;
  // console.log("Males",males)
  // console.log("Females",females)

  const genderData = {
    labels : ['Males','Females'],
    datasets: [
      {
        data: [males, females],
        backgroundColor: ['#36A2EB', '#FF6384'],
      }
    ]
  }
  return (
    <div>
      <p>Home</p>
      <Pie data={genderData} />
    </div>
  )
}

export default Home
