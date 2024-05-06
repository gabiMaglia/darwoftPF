import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import OutlinedButton from "../ui/OutlinedButton/OutlinedButton";
import styles from "./forms.module.css";
import { useState } from "react";

const logInSchema = Yup.object({
  email: Yup.string()
    .email("Email invalido")
    .required("Debes ingresar un email"),
  password: Yup.string()
    // .min(6)
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    //   "La contrasena debe tener al menos una letra mayuscula, una minuscula y un numero"
    // )
    .required("Debes ingresar un password"),
});

const LoginForm = ({ onSubmit }) => {
  const [isLoading, setIsLoading] = useState(false)

  
  const handleLoad = () => {
    setIsLoading(!isLoading)
  }

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={logInSchema}
        
        onSubmit={(values, actions) => {
          handleLoad()
          onSubmit(values)
          handleLoad()
          actions.resetForm()
          actions.setSubmitting(false)
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <span className={styles.inputBoxes}>
              <label htmlFor="">Email</label>
              <Field name="email" type="email" />
              {errors.email && touched.email ? <p className={styles.errors}>{errors.email}</p> : null}
            </span>
            <span className={styles.inputBoxes}>
              <label htmlFor="">Password</label>
              <Field name="password" type="password" />
              {errors.password && touched.password ? (
                <p className={styles.errors}>{errors.password}</p>
              ) : null }
            </span>
            <div className={styles.submitButtons}>
              <OutlinedButton type="submit">Submit</OutlinedButton>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
