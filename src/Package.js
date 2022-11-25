import Packages from "./components/Packages";
const Package = () => {
  let normal =
    "Hey there, with this package, you have access to all at least two past papers from a range of the current year and 10 years back";
  let vip =
    "Hey there, with this package, you have access past papers from the past 10 years to-date.";
  let vvip =
    "Hey there, in this package, you not only have access to the past papers from the past ten years, but also the respective marking guides";
  return (
    <div style={{ padding: "20px" }}>
      <h2 className="text-center" style={{ marginTop: "50px" }}>
        This is our packages page
      </h2>
      <div className="d-flex justify-content-around align-items-center bg-dark p-5 rounded">
        <Packages package="Normal" text={normal} />
        <Packages package="VIP" text={vip} />
        <Packages package="VVIP" text={vvip} />
      </div>
    </div>
  );
};

export default Package;
