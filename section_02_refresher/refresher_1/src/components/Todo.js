import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";
const Todo = ({ text }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const deleteModalHandler = () => {
    setModalOpen(true);
  };
  const closeModalHandler = () => {
    setModalOpen(false);
  };
  return (
    <>
      <div className="card">
        <h2>{text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteModalHandler}>
            Delete
          </button>
        </div>
      </div>
      {modalOpen === true ? (
        <>
          <Modal cancelModal={closeModalHandler} confirmModal={closeModalHandler}/>
          <Backdrop onClick={closeModalHandler} />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Todo;
