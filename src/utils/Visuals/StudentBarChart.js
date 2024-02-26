export const getStudentScoresBySubject = (student, subject) => {
    return [
        student.term1_scores[subject],
        student.term2_scores[subject],
        student.term3_scores[subject],
        student.term4_scores[subject],
    ]
}

export const studentTermScores = (student, selectedSubject) => {
    return {
        labels: ['Term 1', 'Term 2', 'Term 3', 'Term 4'],
        datasets: [
            {
                label: `Performance in ${selectedSubject.charAt(0).toUpperCase() + selectedSubject.slice(1)}`,
                data: getStudentScoresBySubject(student, selectedSubject),
                backgroundColor: '#FF6384',
                borderColor: 'black',
                borderWidth: 1,
            }
        ],
    }
}

export const options={
    scales: {
      y: {
        min: 0,
        max: 100
      }
    },
    maintainAspectRatio: false,
}