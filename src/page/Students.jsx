import { useNavigate } from "react-router-dom";
import { students } from "../utils/Data/Students";

const Students = () => {
  const navigate = useNavigate();

  const handleRowClick = (studentId) => {
    navigate(`/student/${studentId}`);
  };

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Admission Number</th>
            <th scope="col">First Name</th>
            <th scope="col">Other Names</th>
            <th scope="col">Gender</th>
            <th scope="col">P/ G Contact</th>
            <th scope="col">P/ G Email</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          {students?.students?.map((student, index) => {
            return (
              <tr key={student.id} onClick={() =>handleRowClick(student.id)}>
                <th>{index + 1}</th>
                <td>{student.admnNo}</td>
                <td>{student.fName}</td>
                <td>{student.oNames}</td>
                <td>{student.gender}</td>
                <td>{student.p_contact}</td>
                <td>{student.p_email}</td>
                <td>{student.address}</td>
              </tr>
            )})}
        </tbody>
      </table>
    </div>
  )
}

export default Students;