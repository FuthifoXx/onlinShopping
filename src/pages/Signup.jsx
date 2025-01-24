function Signup() {
  return (
    <>
      <div className="signup-box">
        <h1 className="text">Sign up</h1>
        <h4>Its free, only takes a minute</h4>
        <form>
          <label>First Name</label>
          <input type="text" placeholder="" />
          <label>Last Name</label>
          <input type="text" placeholder="" />
          <label>email</label>
          <input type="email" placeholder="" />
          <label>Password</label>
          <input type="password" placeholder="" />
          <label>Confirm Password</label>
          <input type="password" placeholder="" />
          <input type="button" value="Submit" />
        </form>
        <p>
          By clicking the Sign up button, you agree to our <br />
          <a href="#">Terms and conditions</a>and{' '}
          <a href="#">Policy and Privacy</a>
        </p>
      </div>
      <p className="para-2">
        Already have an account? <a href="./signin">sing in</a>
      </p>
    </>
  );
}

export default Signup;
