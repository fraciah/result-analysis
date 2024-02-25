export const getSubjectScores = (student, subject) => {
    const terms = ['term1_scores', 'term2_scores', 'term3_scores', 'term4_scores'];
    const scores = terms.map((term) => student[term][subject]);

    return {
        labels: ['Term 1', 'Term 2', 'Term 3', 'Term 4'],
        datasets: [
            {
                label: subject,
                data: scores,
                backgroundColor: '#36A2EB',
            }
        ]
    }
}

export const subjects = ['math', 'english', 'history', 'chemistry', 'physics'];
export const studentLineOptions = {
    scales: {
        y: {
        min: 0, 
        max: 100 
    }
}
};