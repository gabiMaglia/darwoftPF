import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import SubmitBtns from "./SubmitBtns";

import styles from "./forms.module.css";

const resetPassSchema = Yup.object({
  email: Yup.string()
    .email("Email invalido")
    .required("Debes ingresar un email"),
});

const ForgetPasswordForm = ({ onSubmit, onCancel }) => {
  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={resetPassSchema}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.resetForm();
        actions.setSubmitting(false);
      }}
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <span className={styles.inputBoxes}>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            {errors.email && touched.email ? (
              <p className={styles.errors}>{errors.email}</p>
            ) : null}
          </span>
          <SubmitBtns
            okTitle="Enviar"
            canceTitle="Ya la recorde!"
            handleCancelForm={onCancel}
          />
        </Form>
      )}
    </Formik>
  );
};

export default ForgetPasswordForm;
