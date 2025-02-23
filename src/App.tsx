import { Ban } from "lucide-react";
import Alert from "./components/ui/alrert/Alert";

function App() {
  return (
    <>
      <Alert
        className="alert-box"
        icon={<Ban size={20} />}
        title="something went wrong"
        describtion="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
        temporibus doloremque praesentium laboriosam iste totam officiis beatae
        sint non quas."
      />
    </>
  );
}

export default App;
