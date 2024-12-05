import axios from "axios";
import { createSlug, dataFix } from "../../../utils/helper";
import ModalPopup from "../../../components/modal/ModalPopup";
import { useContext, useState } from "react";
import ReduxContext from "../../../context/ReduxContext";
import ToggleSwitch from "../../../components/ToggleSwitch";
import { BiShowAlt } from "react-icons/bi";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const Tag = () => {
  const [modal, setModal] = useState(false);
  const [tag, setTag] = useState("");
  const [view, setView] = useState(false);

  //get tag data from context
  const {store, dispatch }= useContext(ReduxContext);

  //tag data create

  const handleCreateTag = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "http://localhost:5050/tags",
      dataFix({
        name: tag,
        slug: createSlug(tag),
      })
    );
    dispatch({
      type: "TAG_DATA_SHOW",
        payload:response.data
    })
    setModal(false);
  };

  return (
    <>
      {modal && (
        <ModalPopup hide={setModal} title="Create New Tag">
          <form onSubmit={handleCreateTag}>
            <label>
              Name
              <input
                type="text"
                className="form-control"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              />
            </label>

            <label>
              <button className="btn btn-color btn-block">Create</button>
            </label>
          </form>
        </ModalPopup>
      )}

      {view && <ModalPopup>show</ModalPopup>}
      <div className="data">
        <div className="data-header">
          <h2>All Tags</h2>
          <button className="btn btn-primary" onClick={() => setModal(true)}>
            Create New Tag
          </button>
        </div>
        <hr />
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Slug</th>
              <th>Created At</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {store.tags.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.slug}</td>
                  <td>{item.createdAt}</td>
                  <td>
                    <ToggleSwitch />
                  </td>
                  <td>
                    <button onClick={() => setView(true)}>
                      <BiShowAlt />
                    </button>
                    <button>
                      <CiEdit />
                    </button>
                    <button>
                      <MdDeleteOutline />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tag;
