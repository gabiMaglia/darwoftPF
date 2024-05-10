import { useSelector } from "react-redux";
import Table from "../../../componenets/Tables/Table";

import styles from "./brandsCat.module.css";
import useModal from "../../../hooks/useModal";
import Modal from "../../../componenets/ui/Modal/Modal";
import ConfirmationForm from "../../../componenets/forms/ConfirmationForm";

const brandColumns = [
  {
    header: "Name",
    accessorKey: "brandName",
  },
  {
    header: "Home Page",
    accessorKey: "brandHomePage",
  },
];
const categoryColumns = [
  {
    header: "Name",
    accessorKey: "catName",
  },
  {
    header: "Image",
    accessorKey: "image",
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
  const categories = useSelector((state) => state.categories);
  const brand = useSelector((state) => state.brands);

  const { brands } = brand;
 
  const handleAddElement = (tableName) => {
    console.log(tableName)
  }

  const handleActionClick = (action, tableName, itemId) => {
    console.log(tableName)
    console.log(action,  itemId); 
  };

  const [modalType, openModal, closeModal] = useModal();

  return (
    <section className={styles.section}>
      <article>
        <h2>Grupos de categoria</h2>
        <Table
          data={categories.groups}
          columns={categoryGroupsColumns}
          tableName="categoryGrup"
          handleActionClick={handleActionClick}
          handleAddElement={handleAddElement}
          />
      </article>
      <article>
        <h2>Categorias</h2>
        <Table
          data={categories.categories}
          columns={categoryColumns}
          tableName="category"
          handleActionClick={handleActionClick}
          handleAddElement={handleAddElement}
          />
      </article>
      <article>
        <h2>Marcas</h2>
        <Table
          data={brands}
          columns={brandColumns}
          tableName="brand"
          handleActionClick={handleActionClick}
          handleAddElement={handleAddElement}
          />
      </article>

      <Modal
        title={"Realmente desea cerrar sesión?"}
        isOpen={modalType === "delete"}
        onClose={closeModal}
      >
        <ConfirmationForm
          okTitle="Si"
          // onSubmit={() => handleLogBrandDelete(token)}
          canceTitle="no"
          onCancel={closeModal}
        />
      </Modal>
    </section>
  );
};

export default BrandsCat;
