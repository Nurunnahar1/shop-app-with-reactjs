import ToggleSwitch from "../../components/ToggleSwitch";
import { BiShowAlt } from "react-icons/bi";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const Brand = () => {
  return (
    <>
      <div className="data">
        <div className="data-header">
          <h2>All Brands</h2>
          <button className="btn btn-primary">Create New Brand</button>
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
          <tbody>
            <tr>
              <td>id</td>
              <td>
                <img
                  src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTUNki_Kr141E0ie43RqlvEA-V22SZsSeDXK2TlofouDmQggqc9e--fUskRSPYJZ9Qrc77cN7vut8hIc55B163aRBKKo6g4YWXO3vjDaEk"
                  alt=""
                />
              </td>
              <td>Apple</td>
              <td>apple</td>
              <td>10-12-2024</td>
              <td>
                <ToggleSwitch />
              </td>
              <td>
                <button>
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
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Brand;
