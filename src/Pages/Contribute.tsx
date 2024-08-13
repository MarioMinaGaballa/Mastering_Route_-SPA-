import { useLocation } from "react-router-dom";
import Button from "../UI/Button";

import TextArea from "../UI/TextArea";

const Contribute = () => {
  const {state} =useLocation();
  return (
    <div>
      <h2 className="text-center mb-3">Email : {state.email}</h2>
      {state?.email?  <h2 className="text-center mb-3">Email : {state.email}</h2>:null}
      <h2 className="text-center mb-3">Login to Contribute</h2>
      <form className="space-y-3 max-w-sm mx-auto">
      <TextArea/>
        <Button  className={""}>Submit</Button>
      </form>
    </div>
  );
};

export default Contribute;
