import { Link } from "react-router-dom";
const CourseList = ({ courses, title }) => {
  return (
    <div className="courses mt-3">
      {/* <h4>{title}</h4> */}
      <ul id="coursess" className="list-group">
        {courses.map((course) => (
          <Link to={`/courses/${course.shortname}/`}>
            <li className="lis list-group-item" key={`${course.id}`}>
              {course.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
