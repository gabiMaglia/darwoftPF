import { useSelector } from "react-redux";
import Table from "../../../componenets/Tables/Table";

import styles from "./brandsCat.module.css";

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

  return (
    <>
      <h2>Category Groups List</h2>
      <Table data={categories.groups} columns={categoryGroupsColumns} />
      <h2>Category List</h2>
      <Table data={categories.categories} columns={categoryColumns} />
      <h2>Brand List</h2>
      <Table data={brands} columns={brandColumns} />
    </>
  );
};

export default BrandsCat;
