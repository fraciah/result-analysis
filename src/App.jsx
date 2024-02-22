import { students } from "./utils/Data/Student"

function App() {
  const studentsLen = students.students.length
  const uniqueIds = new Set(students.students.map(student => student.id))
  const uniqueAdm = new Set(students.students.map(student => student.admnNo))
  const uniqueFn = new Set(students.students.map(student => student.fName))
  const uniqueO = new Set(students.students.map(student => student.oNames))
  return (
    <> 
      <p>studentsLen: {studentsLen}</p>
      <p>uniqueIds: {uniqueIds.size}</p>
      <p>uniqueAdms: {uniqueAdm.size}</p>
      <p>uniqueFn: {uniqueFn.size}</p>
      <p>uniqueO: {uniqueO.size}</p>
    </>
  )
}

export default App
