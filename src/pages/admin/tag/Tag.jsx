 import axios from 'axios'; 
import { createSlug, dataFix } from '../../../utils/helper';
import ModalPopup from '../../../components/modal/ModalPopup';
import { useState } from 'react';
 
const Tag = () => {
     const [modal, setModal] = useState(false);
     const [tag, setTag] = useState("");

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
              <th>Logo</th>
              <th>Name</th>
              <th>Slug</th>
              <th>Created At</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* <tbody>
             
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={item.logo} alt="" />
                  </td>
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
          </tbody> */}
        </table>
      </div>
    </>
  );
 }
 
 export default Tag