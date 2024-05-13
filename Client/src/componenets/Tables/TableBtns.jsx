import OutlinedButton from "../ui/OutlinedButton/OutlinedButton";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon
} from "@heroicons/react/24/outline";
const TableBtns = ({ table, tableName, handleAddElement }) => {
  return (
    <>
      <OutlinedButton onClick={() => handleAddElement("add", tableName)}>
        Agregar
      </OutlinedButton>
      <span>
        <OutlinedButton onClick={() => table.setPageIndex(0)}>
        <ArrowSmallLeftIcon/>
        </OutlinedButton>
        <OutlinedButton onClick={() => table.previousPage()}>
        <ArrowLongLeftIcon />
        </OutlinedButton>
        <OutlinedButton onClick={() => table.nextPage()}>
        <ArrowLongRightIcon/>
        </OutlinedButton>
        <OutlinedButton
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        >
          <ArrowSmallRightIcon/>
        </OutlinedButton>
      </span>
    </>
  );
};

export default TableBtns;
