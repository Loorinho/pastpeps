import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function CourseUnit({ courseunits }) {
  // router parameters
  const { course, year, semester, yearzy } = useParams();

  return (
    <div>
      <ul id="" className="list-group">
        {courseunits.map((cunit) => (
          <Link
            to={`/courses/${course}/${year}/${semester}/${yearzy}/${cunit.shortname}`}
          >
            <li className="lis list-group-item" key={`${cunit.id}`}>
              {cunit.courseunit}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
