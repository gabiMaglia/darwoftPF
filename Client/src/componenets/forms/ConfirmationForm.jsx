import { Formik, Form } from "formik";
import SubmitBtns from "./SubmitBtns";
import Img from "../ui/Img/Img";

import saDino from "../../assets/sadDino.gif";

import styles from "./forms.module.css";

const ConfirmationForm = ({ okTitle, onSubmit, canceTitle, onCancel }) => {
  return (
    <>
      <Img alt="Sad GoodBye" img={saDino}></Img>
      <Formik
        initialValues={{}}
        onSubmit={() => {
          onSubmit();
        }}
      >
        {() => (
          <Form className={styles.form}>
            <SubmitBtns
              okTitle={okTitle}
              canceTitle={canceTitle}
              handleCancelForm={onCancel}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ConfirmationForm;
