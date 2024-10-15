import React from "react";

const studentDetails = [
  { 
    stdName: "Jhon", 
    stdSubjects: {
      maths: 'maths',
      physics: 'hindi'
    }
  },
  { 
    stdName: "ali", 
    stdSubjects: {
      physics: 'physics'
    }
  },
  { 
    stdName: "ravi", 
    stdSubjects: {
      maths: 'maths',
      physics: 'physics'
    }
  },
];

function Student() {
  return (
    <div>
      <p>Student data</p>
      {studentDetails.map((item) => {
        if (item.stdSubjects.maths === "maths") {
          return <p>{item.stdName}</p>;
        } else {
          return null;
        }
      })}
      <input type="text"  placeholder="enter text here"/>
    </div>
  );
}

export default Student;

