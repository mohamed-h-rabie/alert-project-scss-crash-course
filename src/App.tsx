import { Ban } from "lucide-react";
import Alert from "./components/ui/alrert/Alert";

function App() {
  return (
    <div className="app-wrapper">
      <Alert
        type="warning"
        icon={<Ban size={20} />}
        title="something went wrong"
        describtion="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
        temporibus doloremque praesentium laboriosam iste totam officiis beatae
        sint non quas."
      />
      <Alert
        type="error"
        icon={<Ban size={20} />}
        title="something went wrong"
        describtion="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
        temporibus doloremque praesentium laboriosam iste totam officiis beatae
        sint non quas."
      />
      <Alert
        type="success"
        icon={<Ban size={20} />}
        title="something went wrong"
        describtion="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
        temporibus doloremque praesentium laboriosam iste totam officiis beatae
        sint non quas."
      />
      <Alert
        type="note"
        icon={<Ban size={20} />}
        title="something went wrong"
        describtion="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
        temporibus doloremque praesentium laboriosam iste totam officiis beatae
        sint non quas."
      />
      <Alert
        type="info"
        icon={<Ban size={20} />}
        title="something went wrong"
        describtion="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
        temporibus doloremque praesentium laboriosam iste totam officiis beatae
        sint non quas."
      />
    </div>
  );
}

export default App;
