import { Button, Checkbox, Input } from "../../components/UI";

const ExploreForm = () => {
  return (
    <div className="h-[90vh] flex items-center justify-center">
      <div className="max-w-lg w-full">
        <h1>ExploreForm</h1>
        <form action="" className="space-y-3 mt-5">
          <Input type="text" placeholder="Enter your name" />
          <Input type="email" placeholder="Enter your name" />
          <Input type="password" placeholder="Enter your name" />
          <Input type="password" placeholder="Enter your name" />
          <Checkbox title="Agree to terms and conditions"/>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default ExploreForm;
