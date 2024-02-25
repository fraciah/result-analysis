export const getTermScores = (student, term) => {
    const termScores = student[term];
    const subjects = Object.keys(termScores);
    const scores = subjects.map((subject) => termScores[subject]);

    return {
        labels: subjects,
        datasets: [
            {
                data: scores,
                backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0', '#9966FF'],
            }
        ]
    }
}