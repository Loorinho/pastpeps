import { useParams } from "react-router-dom";
import Year from "./Year";
const Course = () => {
  const { course } = useParams();
  return (
    <div className="container">
      <h3 className="text-center h3" style={{ marginTop: "100px" }}>
        This is the home page for {course}
      </h3>
      <div className="years d-flex justify-content-around my-5 ">
        <Year year="1" />
        <Year year="2" />
        <Year year="3" />
        <Year year="4" />
        <Year year="5" />
      </div>
    </div>
  );
};

export default Course;
