import Years from "./Years";
const PdfsPerYear = () => {
  return (
    <div className="mt-5">
      <h3 className=" text-center" style={{ marginTop: "40px" }}>
        Choose the year from which you want to view it's past papers
      </h3>
      <ul
        id="coursess"
        className="list-group p-2"
        style={{ margin: "0 250px 10px 250px" }}
      >
        {/* <Years years="2022" /> */}
        <Years years={2022} />
        <Years years="2020" />
        <Years years="2019" />
        <Years years="2018" />
        <Years years="2017" />
        <Years years="2016" />
        <Years years="2015" />
        <Years years="2014" />
        <Years years="2013" />
        <Years years="2012" />
      </ul>
    </div>
  );
};

export default PdfsPerYear;
