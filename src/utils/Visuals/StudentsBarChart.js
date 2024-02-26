import { students } from "../Data/Students";   

//function to calculate average scores for each term
const calculateTermScores = (term) => {
    let totalScores = { math: 0, english: 0, history: 0, chemistry: 0, physics: 0 };
    let numStudents = 0;

    for(let student of students.students){
        if(student[term]){
          totalScores.math += student[term].math;
          totalScores.english += student[term].english;
          totalScores.history += student[term].history;
          totalScores.chemistry += student[term].chemistry;
          totalScores.physics += student[term].physics;
          numStudents ++;
        }
    }

    let avgScores = {
        Math: totalScores.math/numStudents,
        English: totalScores.english/numStudents,
        History: totalScores.history/numStudents,
        Chemistry: totalScores.chemistry/numStudents,
        Physics: totalScores.physics/numStudents,
    }
    return avgScores;
}

//find average scores for each term
let term1AvgScores = calculateTermScores('term1_scores');
let term2AvgScores = calculateTermScores('term2_scores');
let term3AvgScores = calculateTermScores('term3_scores');
let term4AvgScores = calculateTermScores('term4_scores');


//visualize average scores for each term
const visualTermsAvg = (term, avgScores) => {
    return {
        labels: Object.keys(avgScores),
        datasets: [
            {
                label: `Average Scores for Term ${term}`,
                data: Object.values(avgScores),
                backgroundColor: '#FF6384',
                borderColor: 'gray',
                borderWidth: 1,
            }
        ]
    }
}
export const options={
    scales: {
      y: {
        min: 0,
        max: 100
      }
    }
}

//export each average score
export const term1AvgData = visualTermsAvg('1', term1AvgScores);
export const term2AvgData = visualTermsAvg('2', term2AvgScores);
export const term3AvgData = visualTermsAvg('3', term3AvgScores);
export const term4AvgData = visualTermsAvg('4', term4AvgScores);