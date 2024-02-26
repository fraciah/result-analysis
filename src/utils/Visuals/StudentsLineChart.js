import { students } from "../Data/Students";

const calculateAverageScores = (subject, term) => {
    let totalScores = 0;
    let numStudents = 0;

    for(let student of students.students){
        if(student[term]){
            totalScores += student[term][subject];
            numStudents++;
        }
    }
    return totalScores / numStudents;
}

export const subjects = ["math", "english", "history", "chemistry", "physics"];
export const terms = ["term1_scores", "term2_scores", "term3_scores", "term4_scores"];

export const averages = {};

subjects.forEach(subject => {
    averages[subject] = {};
    terms.forEach(term => {
        averages[subject][term] = calculateAverageScores(subject, term);
    });
});
console.log(averages);

export const getLineChartData = (subject) => {
    return {
      labels: ['Term 1', 'Term 2', 'Term 3', 'Term 4'],
      datasets: [{
        label: subject.charAt(0).toUpperCase() + subject.slice(1),
        data: terms.map(term => averages[subject][term]),
        fill: false,
        borderColor: '#36A2EB',
      }],
    };
};
  
export const lineChartOptions = {
    scales: {
        y: {
        min: 0, 
        max: 100 
    },
    maintainAspectRatio: false,
}
};