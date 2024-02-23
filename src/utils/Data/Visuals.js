import { students } from "./Student"

//for the genderData
const males =  students.students.filter((student) => student.gender == "Male").length;
const females =  students.students.filter((student) => student.gender == "Female").length;


//for the visualizations of subjects averages per term
//term 1
let term1_totalScores = { math: 0, english: 0, history: 0, chemistry: 0, physics: 0 };
let numStudents = 0;
for(let student of students.students){
  if(student.term1_scores){
    term1_totalScores.math += student.term1_scores.math;
    term1_totalScores.english += student.term1_scores.english;
    term1_totalScores.history += student.term1_scores.history;
    term1_totalScores.chemistry += student.term1_scores.chemistry;
    term1_totalScores.physics += student.term1_scores.physics;
    numStudents ++;
  }
}
// console.log(numStudents)
let term1avgScores = {
  Math: term1_totalScores.math/numStudents,
  English: term1_totalScores.english/numStudents,
  History: term1_totalScores.history/numStudents,
  Chemistry: term1_totalScores.chemistry/numStudents,
  Physics: term1_totalScores.physics/numStudents,
}

//term 2
let term2_totalScores = { math: 0, english: 0, history: 0, chemistry: 0, physics: 0 };
for(let student of students.students){
  if(student.term2_scores){
    term2_totalScores.math += student.term2_scores.math;
    term2_totalScores.english += student.term2_scores.english;
    term2_totalScores.history += student.term2_scores.history;
    term2_totalScores.chemistry += student.term2_scores.chemistry;
    term2_totalScores.physics += student.term2_scores.physics;
  }
}
let term2avgScores = {
  Math: term2_totalScores.math/numStudents,
  English: term2_totalScores.english/numStudents,
  History: term2_totalScores.history/numStudents,
  Chemistry: term2_totalScores.chemistry/numStudents,
  Physics: term2_totalScores.physics/numStudents,
}


export const genderData = {
    labels: ['Males','Females'],
    datasets: [
      {
        data: [males, females],
        backgroundColor: ['#36A2EB', '#FF6384'],
      }
    ]
}

export const term1AvgData = {
  labels: Object.keys(term1avgScores),
  datasets: [
    {
      label: 'Average Scores for Term 1',
      data: Object.values(term1avgScores),
      backgroundColor: 'pink',
      borderColor: 'black',
      borderWidth: 1,
    }
  ]
}
export const term2AvgData = {
  labels: Object.keys(term2avgScores),
  datasets: [
    {
      label: 'Average Scores for Term 2',
      data: Object.values(term2avgScores),
      backgroundColor: 'pink',
      borderColor: 'black',
      borderWidth: 1,
    }
  ]
}