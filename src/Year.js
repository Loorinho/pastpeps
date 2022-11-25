import { Link, useParams } from "react-router-dom";

const Year = ({ year }) => {
  //getting the course's (short name) parameter from the url
  const { course } = useParams();

  const sem1 = `/courses/${course}/yr${year}/sem1`;
  const sem2 = `/courses/${course}/yr${year}/sem2`;

  return (
    <div className="year">
      <div className="dropdown">
        <button
          className="btn btn-outline-primary dropdown-toggle btns"
          href="#"
          type="button"
          id="semester-dropdown"
          data-bs-toggle="dropdown"
        >
          Year {year}
        </button>

        <ul className="dropdown-menu" aria-labelledby="semester-dropdown">
          <li>
            <Link to={sem1} className="dropdown-item">
              Semester One
            </Link>
          </li>
          <li>
            <Link to={sem2} className="dropdown-item">
              Semester Two
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Year;
