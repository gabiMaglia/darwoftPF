import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../../componenets/Tables/Table";

import styles from "./brandsCat.module.css";
import useModal from "../../../hooks/useModal";
import Modal from "../../../componenets/ui/Modal/Modal";
import ConfirmationForm from "../../../componenets/forms/ConfirmationForm";
import {
  deleteBrandsAsync,
  postBrandAsync,
  updateBrandAsync,
} from "../../../redux/slices/brandSlice";
import {
  deleteCategorieAsync,
  deleteGroupAsync,
  postCategoryAsync,
  postCategoryGroupAsync,
  updateCategoryAsync,
  updateCategoryGroupAsync,
} from "../../../redux/slices/categorySlice";
import BrandForm from "../../../componenets/forms/productForms/BrandForm";
import CategoryForm from "../../../componenets/forms/productForms/CategoryForm";
import CategoryGroupForm from "../../../componenets/forms/productForms/CategoryGroupForm";

const brandColumns = [
  {
    header: "Name",
    accessorKey: "brandName",
  },
  {
    header: "Home Page",
    accessorKey: "brandHomePage",
  },
  {
    header: "Email",
    accessorKey: "brandEmail",
  },
];
const categoryColumns = [
  {
    header: "Name",
    accessorKey: "catName",
  },
  {
    header: "Group",
    accessorKey: "group.name",
  },
];
const categoryGroupsColumns = [
  {
    header: "Name",
    accessorKey: "name",
  },
];
const BrandsCat = () => {
  const [currentItemId, setCurrentItemId] = useState(null);
  const [currentDataToUpdate, setCurrentDataToUpdate] = useState({});
  const categories = useSelector((state) => state.categories);
  const brand = useSelector((state) => state.brands);
  const dispatch = useDispatch();
  const { brands } = brand;

 

  const handleActionClick = (action, tableName, itemId, data = null) => {
    setCurrentItemId(itemId);
    const actionMap = {
      categoryGroup: {
        delete: () => openModal("deleteCategoryGrup"),
        add: () => openModal("addCategoryGrup", setCurrentDataToUpdate({})),
        update: () => {
          openModal("updateCategoryGrup"), setCurrentDataToUpdate(data);
        },
      },
      category: {
        delete: () => openModal("deleteCategory"),
        add: () => openModal("addCategory"),
        update: () => {
          openModal("updateCategory"), setCurrentDataToUpdate(data);
        },
      },
      brand: {
        delete: () => openModal("deleteBrand"),
        add: () => openModal("addBrand"),
        update: () => {
          openModal("updateBrand"), setCurrentDataToUpdate(data);
        },
      },
    };
    const tableAction = actionMap[tableName][action];

    if (tableAction) {
      tableAction();
    } else {
      return;
    }
  };

  const [modalType, openModal, closeModal] = useModal();

  return (
    // TABLAS
    <section className={styles.section}>
      <article>
        <h2>Grupos de categoria</h2>
        <Table
          data={categories.groups}
          columns={categoryGroupsColumns}
          tableName="categoryGroup"
          handleActionClick={handleActionClick}
        />
      </article>
      <article>
        <h2>Categorias</h2>
        <Table
          data={categories.categories}
          columns={categoryColumns}
          tableName="category"
          handleActionClick={handleActionClick}
        />
      </article>
      <article>
        <h2>Marcas</h2>
        <Table
          data={brands}
          columns={brandColumns}
          tableName="brand"
          handleActionClick={handleActionClick}
        />
      </article>
      {/* MODALES */}

      {/* DELETE */}
      <Modal
        title={"Realmente desea eliminar esta marca?"}
        isOpen={modalType === "deleteBrand"}
        onClose={closeModal}
      >
        <ConfirmationForm
          okTitle="Si"
          onSubmit={() => {
            dispatch(deleteBrandsAsync(currentItemId));
            closeModal();
          }}
          canceTitle="no"
          onCancel={closeModal}
        />
      </Modal>
      <Modal
        title={"Realmente desea eliminar este grupo?"}
        isOpen={modalType === "deleteCategoryGrup"}
        onClose={closeModal}
      >
        <ConfirmationForm
          okTitle="Si"
          onSubmit={() => {
            dispatch(deleteGroupAsync(currentItemId));
            closeModal();
          }}
          canceTitle="no"
          onCancel={closeModal}
        />
      </Modal>
      <Modal
        title={"Realmente desea eliminar esta categoria?"}
        isOpen={modalType === "deleteCategory"}
        onClose={closeModal}
      >
        <ConfirmationForm
          okTitle="Si"
          onSubmit={() => {
            dispatch(deleteCategorieAsync(currentItemId));
            closeModal();
          }}
          canceTitle="no"
          onCancel={closeModal}
        />
      </Modal>
      {/* UPDATE */}
      <Modal
        title={"Actualiza los datos del grupo"}
        isOpen={modalType === "updateCategoryGrup"}
        onClose={closeModal}
      >
        <CategoryGroupForm
          initialData={currentDataToUpdate}
          okTitle="Si"
          onSubmit={(value) => {
           
            dispatch(updateCategoryGroupAsync({id: currentDataToUpdate._id, value}));
            closeModal();
          }}
          canceTitle="no"
          onCancel={closeModal}
        />
      </Modal>

      <Modal
        title={"Actualiza los datos de la categoria"}
        isOpen={modalType === "updateCategory"}
        onClose={closeModal}
      >
        <CategoryForm
          initialData={currentDataToUpdate}
          okTitle="Si"
          onSubmit={(value) => {
            dispatch(updateCategoryAsync({id: currentDataToUpdate._id, value}));
            closeModal();
          }}
          canceTitle="no"
          onCancel={closeModal}
        />
      </Modal>

      <Modal
        title={"Actualiza los datos de la marca"}
        isOpen={modalType === "updateBrand"}
        onClose={closeModal}
      >
        <BrandForm
          initialData={currentDataToUpdate}
          okTitle="Si"
          onSubmit={(value) => {
            dispatch(updateBrandAsync({id: currentDataToUpdate._id, value}));
            closeModal();
          }}
          canceTitle="no"
          onCancel={closeModal}
        />
      </Modal>
      {/* ADD/ */}
      <Modal
        title={"Ingresa los datos del grupo"}
        isOpen={modalType === "addCategoryGrup"}
        onClose={closeModal}
      >
        <CategoryGroupForm
          initialData={currentDataToUpdate}
          okTitle="Si"
          onSubmit={(value) => {
            dispatch(postCategoryGroupAsync(value));
            closeModal();
          }}
          canceTitle="no"
          onCancel={closeModal}
        />
      </Modal>

      <Modal
        title={"Ingresa los datos de la categoria"}
        isOpen={modalType === "addCategory"}
        onClose={closeModal}
      >
        <CategoryForm
          okTitle="Si"
          onSubmit={(value) => {
            dispatch(postCategoryAsync(value));
            closeModal();
          }}
          canceTitle="no"
          onCancel={closeModal}
        />
      </Modal>

      <Modal
        title={"Ingresa los datos de la marca"}
        isOpen={modalType === "addBrand"}
        onClose={closeModal}
      >
        <BrandForm
          okTitle="Si"
          onSubmit={(value) => {
            dispatch(postBrandAsync(value));
            closeModal();
          }}
          canceTitle="no"
          onCancel={closeModal}
        />
      </Modal>
    </section>
  );
};

export default BrandsCat;
