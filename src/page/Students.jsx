import { useNavigate } from "react-router-dom";
import { students } from "../utils/Data/Students";

const Students = () => {
  const navigate = useNavigate();

  const handleRowClick = (studentId) => {
    navigate(`/student/${studentId}`);
  };

  return (
    <div className="container">
      <h2 className="fw-bold blue fs-3 text-center my-4">Student Records</h2>
      <p className="text-center mb-4">
        This table provides a comprehensive view of all students&apos; information. Click on a row to view more details about a student.
      </p>
      <div className="table-responsive">
        <table className="table mx-auto table-light table-borderless table-hover">
          <thead className="table-primary text-center">
            <tr>
              <th scope="col"></th>
              <th scope="col" className="fw-semibold">Admission Number</th>
              <th scope="col" className="fw-semibold">First Name</th>
              <th scope="col" className="fw-semibold">Other Names</th>
              <th scope="col" className="fw-semibold">Gender</th>
              <th scope="col" className="fw-semibold">P/ G Contact</th>
              <th scope="col" className="fw-semibold">P/ G Email</th>
              <th scope="col" className="fw-semibold">Address</th>
            </tr>
          </thead>
          <tbody>
            {students?.students?.map((student, index) => {
              return (
                <tr className="text-center" style={{cursor: "pointer"}} key={student.id} onClick={() =>handleRowClick(student.id)}>
                  <th className="fw-semibold">{index + 1}</th>
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
    </div>
  )
}

export default Students;