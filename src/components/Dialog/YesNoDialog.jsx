import Button from "components/Button";
import { Dialog } from "components/Dialog";

const YesNoDialog = ({ message, onYes, onNo }) => {
  return (
    <Dialog>
      <div className="bg-primary-200 p-12 rounded-xl flex flex-col gap-8">
        <span className="font-semibold text-lg">{message}</span>

        <div className="flex gap-3">
          <Button onClick={onYes}>Yes</Button>
          <Button onClick={onNo}>No</Button>
        </div>
      </div>
    </Dialog>
  );
};

export default YesNoDialog;
