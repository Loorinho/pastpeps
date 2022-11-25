import { useState, useEffect } from "react";
import CourseList from "./CourseList";
const Courses = () => {
  const [courses, setCourses] = useState(null);

  //fetching the data
  useEffect(() => {
  
    fetch(" http://localhost:3002/courses")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCourses(data);
      });
  }, []);

  return (
    <div className="container courses pt-3" style={{ marginTop: "50px" }}>
      <h4 className="header-title pt-3">Search Course: </h4>
      <input
        className="form-control"
        type="text"
        id="filter"
        placeholder="Type course here....."
      />

      {courses && <CourseList title="Courses Available" courses={courses} />}
    </div>
  );
};
export default Courses;
