import { students } from "../Data/Students";   

const females =  students.students.filter((student) => student.gender == "Female").length;
const males =  students.students.filter((student) => student.gender == "Male").length;

//visualize gender distribution
export const genderData = {
  labels: ['Males','Females'],
  datasets: [
    {
      data: [males, females],
      backgroundColor: ['#36A2EB', '#FF6384'],
    }
  ]
}