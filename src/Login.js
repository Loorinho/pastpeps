const Login = () => {
  return (
    <div className="container">
      <form action="" class="form-control m-5">
        <label htmlFor="username" className="form-label">
          Username:
        </label>
        <input type="text" className="form-input" name="" id="" />
        <label htmlFor="password">Password</label>
        <input type="password" className="form-input" name="" id="" />
        <button
          className="mt-4 btn btn-outline-dark"
          style={{ padding: "5px 15px" }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
