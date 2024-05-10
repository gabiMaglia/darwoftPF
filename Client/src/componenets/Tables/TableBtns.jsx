import OutlinedButton from "../ui/OutlinedButton/OutlinedButton";
const TableBtns = ({ table }) => {
  return (
    <>
      <OutlinedButton onClick={() => table.setPageIndex(0)}>
        Primer Pagina
      </OutlinedButton>
      <OutlinedButton onClick={() => table.previousPage()}>
        Primer Anteriror
      </OutlinedButton>
      <OutlinedButton onClick={() => table.nextPage()}>
        Primer Siguiente
      </OutlinedButton>
      <OutlinedButton
        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
      >
        Ultima Pagina Pagina
      </OutlinedButton>
    </>
  );
};

export default TableBtns;
