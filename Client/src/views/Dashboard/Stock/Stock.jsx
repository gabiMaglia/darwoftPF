import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useModal from "../../../hooks/useModal";

import Table from "../../../componenets/Tables/Table";
import Modal from "../../../componenets/ui/Modal/Modal";
import ConfirmationForm from "../../../componenets/forms/ConfirmationForm";
import { deleteProductsAsync, postProductAsync } from "../../../redux/slices/productSlice";

import styles from "./stock.module.css";
import ProductForm from "../../../componenets/forms/productForms/ProductForm";

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
    header: "Marca",
    accessorKey: "brand.brandName",
  },
  {
    header: "Categoria",
    accessorKey: "category.catName",
  },
];

const Stock = () => {
  const products = useSelector((state) => state.products);
  const { groups } = products;

  const [currentItemId, setCurrentItemId] = useState(null);
  const dispatch = useDispatch();

  const [modalType, openModal, closeModal] = useModal();

  const handleActionClick = (action, tableName, itemId) => {
    setCurrentItemId(itemId);
    console.log(tableName);
    console.log(action);
    openModal("deleteProduct");

    const actionMap = {
      stock: {
        delete: () => openModal("deleteProduct"),
        add: () => openModal("addProduct"),
        // 'update': () => dispatch(updateCategory(itemId, data))
      },
    };
    const tableAction = actionMap[tableName][action];

    if (tableAction) {
      tableAction();
    } else {
      return;
    }
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

        />
      </article>
      {/* DELETE */}
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
      {/* POST */}
      <Modal
        title={"Realmente desea eliminar este producto?"}
        isOpen={modalType === "addProduct"}
        onClose={closeModal}
      >
        <ProductForm
          okTitle="Si"
          onSubmit={(value) => {
            dispatch(postProductAsync(value));
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
