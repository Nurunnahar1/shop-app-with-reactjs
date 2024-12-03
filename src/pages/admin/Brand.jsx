import ToggleSwitch from "../../components/ToggleSwitch";
import { BiShowAlt } from "react-icons/bi";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import ModalPopup from "../../components/modal/ModalPopup";
import { useContext, useState } from "react";
import axios from "axios";
import { createSlug, dataFix } from "../../utils/helper";
import { cloudinaryImageUpload } from "../../utils/cloudinary";
import ReduxContext from "../../context/ReduxContext";

const Brand = () => {
  const [modal, setModal] = useState(false);
  const [view, setView] = useState(false);
  const [brand, setBrand] = useState("");
  const [file, setFile] = useState(null);

  //set data for store dispatch
  const { store, dispatch } = useContext(ReduxContext);

  const handleCreateBrand = async (e) => {
    e.preventDefault();

    const fileData = await cloudinaryImageUpload({
      file,
      cloudName: "dndizynno",
      preset: "upload_image",
    });

    const response = await axios.post(
      "http://localhost:5050/brands",
      dataFix({
        name: brand,
        slug: createSlug(brand),
        logo: fileData.secure_url,
      })
    );
    dispatch({
      type: "BRAND_DATA_CREATE",
      payload: response.data,
    });
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
            {store.brands.map((item, index) => {
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
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Brand;
