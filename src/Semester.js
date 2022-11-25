import { Link, useParams } from "react-router-dom";

const Semester = () => {
  /*
   These are kinda like the variables we set int the React routes in the App.js file
   and so we can access the values via their varibale names (as set in the routes)
  */
  const { course, year, semester, yearzy, cunit } = useParams();

  const endsem = `/courses/${course}/${year}/${semester}/${yearzy}/${cunit}/exam`;
  const test = `/courses/${course}/${year}/${semester}/${yearzy}/${cunit}/test`;

  return (
    <div style={{ marginTop: "50px" }}>
      <h3 className="text-center">Choose your preferred option</h3>

      <div
        classname=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignitems: "center",
        }}
      >
        <div>
          <Link to={endsem}>
            <button className="btn btn-primary m-4">End of semester</button>
          </Link>
        </div>
        <div>
          <Link to={test}>
            <button
              className="btn btn-primary m-4"
              style={{ padding: "5px 30px" }}
            >
              Test (s)
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Semester;
