import { useSelector } from "react-redux";
import Table from "../../../componenets/Tables/Table";

import styles from "./stock.module.css";

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

  return (
    <section className={styles.section}>
      <article>
        <h2>Product Groups List</h2>
        <Table data={groups} columns={productColumns} />
      </article>
    </section>
  );
};

export default Stock;
