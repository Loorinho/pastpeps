import React from "react";
import { Link, useParams } from "react-router-dom";

function Years({ years }) {
  const { course, year, semester } = useParams();
  const link = `/courses/${course}/${year}/${semester}/${years}`;

  return (
    <Link to={link}>
      <li className="list-group-item list-group-item-action w-70">{years}</li>
    </Link>
  );
}

export default Years;
