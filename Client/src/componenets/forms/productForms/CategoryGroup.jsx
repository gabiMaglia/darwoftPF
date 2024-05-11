import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import SubmitBtns from "../SubmitBtns";

import styles from "../forms.module.css";

const brandSchema = Yup.object({
  name: Yup.string().required("Debes ingresar un nombre para el grupo"),
});

const CategoryGroup = ({onSubmit}) => {
  const handleResetForm = (formik) => {
    formik.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",

        }}
        validationSchema={brandSchema}
        onSubmit={(values, actions) => {
          onSubmit(values);
          actions.resetForm();
          actions.setSubmitting(false);
        }}
      >
        {({ errors, touched, resetForm }) => (
          <Form className={styles.form}>
            <span className={styles.inputBoxes}>
              <label htmlFor="name">Email</label>
              <Field name="name" type="text" />
              {errors.name && touched.name ? (
                <p className={styles.errors}>{errors.name}</p>
              ) : null}
            </span>

            <div className={styles.submitButtons}>
              <SubmitBtns
                okTitle="Ingresar"
                canceTitle="Limpiar Datos"
                handleCancelForm={handleResetForm}
                resetForm={resetForm}
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default CategoryGroup