import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import SubmitBtns from "./SubmitBtns";
import { nacionalities } from "../../utils/paises";

import styles from "./forms.module.css";

const signUpSchema = Yup.object({
  firstName: Yup.string().min(3).required("Debes ingresar un nombre"),
  lastName: Yup.string().min(3).required("Debes ingresar un apellido"),
  nationality: Yup.string().required("Debes seleccionar una nacionalidad"),
  dni:Yup.string().required(),
  email: Yup.string()
    .email("Email inválido")
    .required("Debes ingresar un email"),
  password: Yup.string()
    .required("Debes ingresar un password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "El password debe coincidir")
    .required("Debes confirmar la contraseña"),
});

const SignUpForm = ({ onSubmit }) => {
  const [nationality, setNationality] = useState("");

  const handleResetForm = (resetForm) => {
    resetForm();
    setNationality("");
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        photo: "",
        birthday: new Date("1990-01-01"),
        nationality: "",
        dni: "",
        password: "",
        confirmPassword: "",
        adress: {},
      }}
      validationSchema={signUpSchema}
      onSubmit={(values) => {
        values = { ...values, nationality: nationality };
        onSubmit(values);
      }}
    >
      {({ errors, touched, resetForm, setFieldValue }) => (
        <Form className={styles.form}>
          <span className={styles.inputBoxes}>
            <label htmlFor="firstName">Nombre</label>
            <Field
              name="firstName"
              className={errors.firstName && touched.firstName ? styles.errorInput : ""}
            />
          </span>

          <span className={styles.inputBoxes}>
            <label htmlFor="lastName">Apellido</label>
            <Field
              name="lastName"
              className={errors.lastName && touched.lastName ? styles.errorInput : ""}
            />
          </span>

          <span className={styles.inputBoxes}>
            <label htmlFor="nationality">Nacionalidad</label>
            <Field
              as="select"
              name="nationality"
              onChange={(e) => {
                setNationality(e.target.value);
                setFieldValue("nationality", e.target.value);
              }}
              value={nationality}
              className={errors.nationality && touched.nationality ? styles.errorInput : ""}
            >
              <option disabled value="">
                Seleccione su nacionalidad
              </option>
              {nacionalities.map((nationality) => (
                <option key={nationality} value={nationality}>
                  {nationality}
                </option>
              ))}
            </Field>
          </span>

          <span className={styles.inputBoxes}>
            <label htmlFor="dni">Documento de Identidad</label>
            <Field
              name="dni"
              className={errors.dni && touched.dni ? styles.errorInput : ""}
            />
          </span>

          <span className={styles.inputBoxes}>
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              type="email"
              className={errors.email && touched.email ? styles.errorInput : ""}
            />
          </span>

          <span className={styles.inputBoxes}>
            <label htmlFor="password">Password</label>
            <Field
              name="password"
              type="password"
              className={errors.password && touched.password ? styles.errorInput : ""}
            />
          </span>

          <span className={styles.inputBoxes}>
            <label htmlFor="confirmPassword">Confirmar Password</label>
            <Field
              name="confirmPassword"
              type="password"
              className={errors.confirmPassword && touched.confirmPassword ? styles.errorInput : ""}
            />
          </span>

          <div className={styles.submitButtons}>
              <SubmitBtns
                okTitle="Registrarse"
                canceTitle="Limpiar Datos"
                handleCancelForm={handleResetForm}
                resetForm={resetForm}
              />
            </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
