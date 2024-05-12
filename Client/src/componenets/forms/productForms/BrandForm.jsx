import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import SubmitBtns from "../SubmitBtns";

import styles from "../forms.module.css";

const brandSchema = Yup.object({
  brandName: Yup.string().required("Debes ingresar un nombre de marca"),
  brandHomePage: Yup.string(),
  brandEmail: Yup.string()
});

const BrandForm = ({onSubmit}) => {
  const handleResetForm = (formik) => {
    formik.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{
          brandName: "",
          brandHomePage: "",
          brandEmail: "",
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
              <label htmlFor="brandName">Nombre de marca</label>
              <Field name="brandName" type="text" />
              {errors.brandName && touched.brandName ? (
                <p className={styles.errors}>{errors.brandName}</p>
              ) : null}
            </span>
            <span className={styles.inputBoxes}>
              <label htmlFor="brandHomePage">Pagina web de la marca</label>
              <Field name="brandHomePage" type="text" />
              {errors.brandHomePage && touched.brandHomePage ? (
                <p className={styles.errors}>{errors.brandHomePage}</p>
              ) : null}
            </span>
            <span className={styles.inputBoxes}>
              <label htmlFor="brandEmail">Email de la marca</label>
              <Field name="brandEmail" type="email" />
              {errors.brandEmail && touched.brandEmail ? (
                <p className={styles.errors}>{errors.brandEmail}</p>
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
};

export default BrandForm;
