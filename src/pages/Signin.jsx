function Signin() {
  return (
    <>
      <div className="signin-box">
        <h1 className="text">Login</h1>
        <h4>Its free, only takes a minute</h4>
        <form>
          <label>email</label>
          <input type="email" placeholder="" />
          <label>Password</label>
          <input type="password" placeholder="" />
          <input type="button" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default Signin;
