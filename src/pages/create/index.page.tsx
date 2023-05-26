import { MainTemplate } from "~/components/Templates";
import { useCreate } from "./Create.hooks";

const CreatePage = () => {
  const app = useCreate();

  return <MainTemplate onChange={data => console.log(data)} />;
};

export default CreatePage;
