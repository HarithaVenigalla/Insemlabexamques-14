import React from "react";
import "./App.css";

const students = [
  { id: 1, name: "Haritha Venigalla", age: 21, course: "B.Tech" },
  { id: 2, name: "Anita Sharma", age: 20, course: "B.Sc" },
  { id: 3, name: "Sneha Reddy", age: 22, course: "B.Com" },
  { id: 4, name: "Priya Verma", age: 23, course: "BBA" },
  { id: 5, name: "Isha Kapoor", age: 21, course: "B.Tech" },
  { id: 6, name: "Divya Nair", age: 22, course: "B.Sc" },
  { id: 7, name: "Riya Gupta", age: 20, course: "B.Com" },
  { id: 8, name: "Neha Jain", age: 23, course: "BBA" },
];

const ResponsiveStudent = () => {
  return (
    <div className="student-dashboard">
      <header className="student-header">
        <h1>Student Dashboard</h1>
      </header>
      <main>
        <table className="student-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default ResponsiveStudent;
