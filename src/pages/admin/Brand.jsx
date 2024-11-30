import ToggleSwitch from "../../components/ToggleSwitch";
import { BiShowAlt } from "react-icons/bi";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import ModalPopup from "../../components/modal/ModalPopup";
import { useState } from "react";
import axios from "axios";
import { createSlug, dataFix } from "../../utils/helper";
// import { cloudinaryImageUpload } from "../../utils/cloudinary";

const Brand = () => {
  const [modal, setModal] = useState(false);
  const [view, setView] = useState(false);
  const [brand, setBrand] = useState("");
  // const [file, setFile] = useState(null);

  const handleCreateBrand = async (e) => {
    e.preventDefault();

    // const fileData = await cloudinaryImageUpload({
    //   file,
    //   cloudName: "dndizynno",
    //   preset: "upload_image",
    // });

    const response = await axios.post(
      "http://localhost:5050/brands",
      dataFix({
        name: brand,
        slug: createSlug(brand),
        logo: null,
        // logo: fileData.secure_url,
      })
    );
    setModal(false);
  };

  return (
    <>
      {modal && (
        <ModalPopup title="Create New Band" hide={setModal}>
          <form onSubmit={handleCreateBrand}>
            <label>
              Name
              <input
                type="text"
                className="form-control"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </label>
            <label>
              Logo
              <input
                type="file"
                className="form-control" 
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <label>
              <button className="btn btn-color btn-block">Create</button>
            </label>
          </form>
        </ModalPopup>
      )}
      {view && (
        <ModalPopup title="Details" hide={setView}>
          show
        </ModalPopup>
      )}

      <div className="data">
        <div className="data-header">
          <h2>All Brands</h2>
          <button className="btn btn-primary" onClick={() => setModal(true)}>
            Create New Brand
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
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Brand;
