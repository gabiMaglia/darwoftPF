import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import SubmitBtns from "../SubmitBtns";

import styles from "../forms.module.css";

const changePasswordSchema = Yup.object({
  password: Yup.string()
    // .min(6)
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    //   "La contrasena debe tener al menos una letra mayuscula, una minuscula y un numero"
    // )
    .required("Debes ingresar un password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "El password debe coincidir")
    .required("Debes confirmar la contrasena"),
});

const ChangePasswordForm = ({ onSubmit }) => {
  const handleResetForm = (formik) => {
    formik.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={{
          password: "",
          confirmPassword: "",
        }}
        validationSchema={changePasswordSchema}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        {({ errors, touched, resetForm }) => (
          <Form className={styles.form}>
            {/* CRED */}
            <span className={styles.inputBoxes}>
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" />
              {errors.password && touched.password ? (
                <p className={styles.errors}>{errors.password}</p>
              ) : null}
            </span>

            <span className={styles.inputBoxes}>
              <label htmlFor="confirmPassword">Confirmar Password</label>
              <Field name="confirmPassword" type="password" />
              {errors.confirmPassword && touched.confirmPassword ? (
                <p className={styles.errors}>{errors.confirmPassword}</p>
              ) : null}
            </span>

            <div className={styles.submitButtons}>
              <SubmitBtns
                okTitle="Ingresar Datos"
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

export default ChangePasswordForm;
