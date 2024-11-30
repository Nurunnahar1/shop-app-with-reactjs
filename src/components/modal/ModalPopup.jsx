import "./ModalPopup.css";

const ModalPopup = ({ title, hide, children }) => {
  return (
    <div className="modal-popup-wrap">
      <div className="modal-body">
        <div className="modal-head">
          <h4 className="modal-title">{title}</h4>
          <button className="modal-popup-close" onClick={() => hide(false)}>
            <i className="ti-close"></i>
          </button>
        </div>

        <div className="modal-popup-content">{children}</div>
      </div>
    </div>
  );
};

export default ModalPopup;


