import { useLocation } from "react-router-dom";
import Button from "../UI/Button";
import Input from "../UI/Input";

const Login = () => {
  const location =useLocation();
  console.log(location);
  
  return (
    <>
      <h2 className="text-center mb-3">Login to Contribute</h2>
      <form className="space-y-3 max-w-sm mx-auto">
        <Input type="Email address" placeholder="Email" />
        <br />
        <Input type="Password" placeholder="Password" />
        <Button  className={""}>Login</Button>
      </form>
    </>
  );
};

export default Login;
