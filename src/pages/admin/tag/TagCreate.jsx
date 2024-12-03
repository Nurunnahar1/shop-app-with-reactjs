import { useState } from "react";
import ModalPopup from "../../../components/modal/ModalPopup";

const TagCreate = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      {modal && (
        <ModalPopup hide={setModal} title="Create New Tag">
          <form>
            <label>
              Name
              <input type="text" className="form-control" />
            </label>

            <label>
              <button className="btn btn-color btn-block">Create</button>
            </label>
          </form>
        </ModalPopup>
      )}
      <div className="data">
        <div className="data-header">
          <h2>All Tags</h2>
          <button className="btn btn-primary" onClick={() => setModal(true)}>
            Create New Tag
          </button>
        </div>
        <hr />
      </div>
    </>
  );
};

export default TagCreate;
