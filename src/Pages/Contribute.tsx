import Button from "../UI/Button";

import TextArea from "../UI/TextArea";

const Contribute = () => {
  return (
    <div>
      <h2 className="text-center mb-3">Login to Contribute</h2>
      <form className="space-y-3 max-w-sm mx-auto">
      <TextArea/>
        <Button childern={"Submit"} className={""}>Submit</Button>
      </form>
    </div>
  );
};

export default Contribute;
