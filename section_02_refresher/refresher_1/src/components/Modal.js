const Modal = ({cancelModal, confirmModal}) => {
  const cancelModalHandler = () => {
      cancelModal();
  };
  const confirmModalHandler = () => {
      confirmModal();
  };
  return (
    <div className="modal">
      <p>Are you sure</p>
      <button className="btn btn--alt" onClick={cancelModalHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmModalHandler}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;
