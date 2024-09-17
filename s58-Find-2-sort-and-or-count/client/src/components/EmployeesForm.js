import React, { useState } from "react";

function EmployeesForm() {
  let [employees, setEmployess] = useState([]);
  let getEmployeesFromServer = async () => {
    let reqOptions = {
      method: "GET",
    };
    let JSONData = await fetch(
      "http://localhost:4567/getEmployees",
      reqOptions
    );
    let JSOData = await JSONData.json();
    console.log(JSOData);
    setEmployess(JSOData);
  };
  return (
    <div>
      <form>
        <div>
          <button
            type="button"
            onClick={() => {
              getEmployeesFromServer();
            }}
          >
            Get Employees
          </button>
        </div>
      </form>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>ID</th>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((ele, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{ele.id}</td>
                <td>
                  <img src={ele.profilePic}></img>
                </td>
                <td>{ele.firstName}</td>
                <td>{ele.lastName}</td>
                <td>{ele.age}</td>
                <td>{ele.email}</td>
                <td>{ele.gender}</td>
                <td>{ele.department}</td>
                <td>{ele.country}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}
export default EmployeesForm;
