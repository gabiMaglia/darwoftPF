import { useState } from "react";

const useModal = () => {
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => {
    setModalType(type);
  };
  const closeModal = () => {
    setModalType(null);
  };
  return [modalType, setModalType, openModal, closeModal];
};
export default useModal;
