import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import SubmitBtns from "./SubmitBtns";

import styles from "./forms.module.css";

const logInSchema = Yup.object({
  email: Yup.string()
    .email("Email invalido")
    .required("Debes ingresar un email"),
  password: Yup.string()
    .min(6)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "La contrasena debe tener al menos una letra mayuscula, una minuscula y un numero"
    )
    .required("Debes ingresar un password"),
});

const LoginForm = ({ onSubmit }) => {
  const handleResetForm = (formik) => {
    formik.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={logInSchema}
        onSubmit={(values, actions) => {
          onSubmit(values);
          actions.resetForm();
          actions.setSubmitting(false);
        }}
      >
        {({ errors, touched, resetForm }) => (
          <Form className={styles.form}>
            <span className={styles.inputBoxes}>
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" />
              {errors.email && touched.email ? (
                <p className={styles.errors}>{errors.email}</p>
              ) : null}
            </span>
            <span className={styles.inputBoxes}>
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" />
              {errors.password && touched.password ? (
                <p className={styles.errors}>{errors.password}</p>
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

export default LoginForm;
