import { useDispatch, useSelector } from "react-redux";
import Table from "../../../componenets/Tables/Table";

import styles from "./stock.module.css";
import Modal from "../../../componenets/ui/Modal/Modal";
import useModal from "../../../hooks/useModal";
import ConfirmationForm from "../../../componenets/forms/ConfirmationForm";
import { deleteProductsAsync } from "../../../redux/slices/productSlice";
import { useState } from "react";

const productColumns = [
  {
    header: "Nombre",
    accessorKey: "name",
  },
  {
    header: "Esta activo?",
    accessorKey: "isActive",
  },
  {
    header: "Es destacado?",
    accessorKey: "isFeatured",
  },
  {
    header: "Precio",
    accessorKey: "price",
  },
  {
    header: "Total Vendidos",
    accessorKey: "soldCount",
  },
  {
    header: "Garantia",
    accessorKey: "warranty",
  },
];

const Stock = () => {
  const products = useSelector((state) => state.products);
  const { groups } = products;

  const [currentItemId, setCurrentItemId] = useState(null);
  const dispatch = useDispatch()

  const [modalType, openModal, closeModal] = useModal();

  const handleAddElement = (tableName) => {
    console.log(tableName);
  };

  const handleActionClick = (action, tableName, itemId) => {
    setCurrentItemId(itemId)
    openModal("deleteProduct")
  };

  return (
    <section className={styles.section}>
      <article>
        <h2>Product Groups List</h2>
        <Table
          data={groups}
          columns={productColumns}
          tableName="stock"
          handleActionClick={handleActionClick}
          handleAddElement={handleAddElement}
        />
      </article>
      <Modal
        title={"Realmente desea eliminar este producto?"}
        isOpen={modalType === "deleteProduct"}
        onClose={closeModal}
      >
        <ConfirmationForm
          okTitle="Si"
          onSubmit={() => {
            dispatch(deleteProductsAsync(currentItemId));
            closeModal();
          }}
          canceTitle="no"
          onCancel={closeModal}
        />
      </Modal>
    </section>
  );
};

export default Stock;
