import OutlinedButton from "../ui/OutlinedButton/OutlinedButton";

const SubmitBtns = ({okTitle, canceTitle, handleCancelForm, resetForm = {}}) => {
  
  return (
    <>
      <OutlinedButton type="submit">{okTitle}</OutlinedButton>
      <OutlinedButton onClick={() => handleCancelForm({ resetForm })}>
        {canceTitle}
      </OutlinedButton>
    </>
  );
};

export default SubmitBtns;
