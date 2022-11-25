const Signup = () => {
  return (
    <div className="container">
      <form action="" class="form-control m-5">
        <label className="form-label">First Name:</label>
        <input type="text" className="form-input" />
        <label className="form-label">Last Name:</label>

        <input type="text" className="form-input" name="" id="" />
        <label className="form-label">Registration Number:</label>
        <input type="text" className="form-input" name="" id="" />
        <label className="form-label">Username:</label>

        <input type="text" className="form-input" name="" id="" />
        <label htmlFor="password">Password</label>
        <input type="password" className="form-input" />
        <label htmlFor="password">Confirm Password</label>
        <input type="password" className="form-input" />
        <button
          className="mt-4 btn btn-outline-dark"
          style={{ padding: "5px 15px" }}
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
