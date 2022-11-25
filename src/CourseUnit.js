import { React, useState, useEffect } from "react";
import CourseUnitList from "./CourseUnitList";

export default function CourseUnit() {
  //state for the courseunits
  const [courseunits, setCourseUnits] = useState(null);

  //fetching the data from the api endpoint
  useEffect(() => {
    // fetch("http://localhost:3000/courseunits")
    fetch("http://localhost:3002/courseunits")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCourseUnits(data);
      });
  }, []);
  return (
    <div className="container courses pt-3" style={{ marginTop: "50px" }}>
      {courseunits && <CourseUnitList courseunits={courseunits} />}
    </div>
  );
}
