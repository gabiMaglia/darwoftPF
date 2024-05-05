import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import OutlinedButton from "../ui/OutlinedButton/OutlinedButton";
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
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={logInSchema}
        onSubmit={(values) => onSubmit(values)}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <span className={styles.inputBoxes}>
            <label htmlFor="">Email</label>  
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
         
            </span>
            <span className={styles.inputBoxes}>
            <label htmlFor="">Password</label>  
            <Field name="password" type="password" />
            {errors.password && touched.password ? <div>{errors.password}</div> : null}
         
            </span>
            <div className={styles.submitButtons}>
              <OutlinedButton type='submit' >Submit</OutlinedButton>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );

  // useFormik funciona como un useEffect
  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     password: "",
  //   },
  //   validationSchema: Yup.object({
  //     email: Yup.string()
  //       .email("Email invalido")
  //       .required("Debes ingresar un email"),
  //     password: Yup.string()
  //       .min(6)
  //       .matches(
  //         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
  //         "La contrasena debe tener al menos una letra mayuscula, una minuscula y un numero"
  //       )
  //       .required("Debes ingresar un password"),
  //   }),
  //   validateOnChange: true,
  //   validateOnBlur: true,
  //   onSubmit: (values) => {
  //     onSubmit(values)
  //   }
  // });

  // return (
  //   <form className={styles.form}>
  //     <span className={styles.inputBoxes}>
  //       <label htmlFor="email">Email</label>
  //       <input
  //         type="email"
  //         name="email"
  //         onChange={formik.handleChange}
  //         onBlur={formik.handleBlur}
  //         value={formik.values.email}
  //         className={
  //           formik.touched.email && formik.errors.email ? styles.errorInput : ""
  //         }
  //       />
  //       {formik.touched.email && formik.errors.email && (
  //         <div className={styles.error}>{formik.errors.email}</div>
  //       )}
  //     </span>

  //     <span className={styles.inputBoxes}>
  //       <label htmlFor="">Password</label>
  //       <input
  //         type="password"
  //         name="password"
  //         onChange={formik.handleChange}
  //         onBlur={formik.handleBlur}
  //         value={formik.values.password}
  //         className={
  //           formik.touched.password && formik.errors.password
  //             ? styles.errorInput
  //             : ""
  //         }
  //       />
  //       {formik.touched.password && formik.errors.password && (
  //         <div className={styles.error}>{formik.errors.password}</div>
  //       )}
  //     </span>

  //   </form>
  // );
};

export default LoginForm;
