import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import SubmitBtns from "../SubmitBtns";

import styles from "../forms.module.css";
import {countries} from "../../../utils/paises";

const adressSchema = Yup.object({
  country: Yup.string().required("El país es obligatorio"),
  state: Yup.string().required("El estado es obligatorio"),
  city: Yup.string().required("La ciudad es obligatoria"),
  street: Yup.string().required("La calle es obligatoria"),
  number: Yup.number().required("El número es obligatorio"),
  zipCode: Yup.string().required("El código postal es obligatorio"),
});

const AdressForm = ({ onSubmit, onCancel, initialData }) => {
  return (
    <>
      <Formik
        initialValues={{
          country: initialData.adress.country ,
          state: initialData.adress.state ,
          city: initialData.adress.city || "",
          street: initialData.adress.street || "",
          number: initialData.adress.number || "",
          zipCode: initialData.adress.zipCode || "",
        }}
        validationSchema={adressSchema}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit({ id: initialData._id, userData: {adress: values} });
          setSubmitting(false);
        }}
      >
        {({ errors, touched, resetForm }) => (
          <Form className={styles.form}>
            <span className={styles.inputBoxes}>
              <label htmlFor="country">Pais</label>
              <Field as="select" name="country" id="country">
                <option value="">
                  Seleccione el pais donde vive
                </option>
                {countries.map((country) => (
                  <option key={Math.random()} value={country.toString()}>
                    {country}
                  </option>
                ))}
              </Field>
              {errors.nationality && touched.nationality ? (
                <p className={styles.errors}>{errors.nationality}</p>
              ) : null}
            </span>

            <span className={styles.inputBoxes}>
              <label htmlFor="state">Estadp/Provincia</label>
              <Field name="state" />
              {errors.state && touched.state ? (
                <p className={styles.errors}>{errors.state}</p>
              ) : null}
            </span>
            <span className={styles.inputBoxes}>
              <label htmlFor="city">Ciudad</label>
              <Field name="city" />
              {errors.city && errors.city ? (
                <p className={styles.errors}>{errors.city}</p>
              ) : null}
            </span>

            <span className={styles.inputBoxes}>
              <label htmlFor="street">Calle</label>
              <Field name="street" />
              {errors.state && touched.state ? (
                <p className={styles.errors}>{errors.state}</p>
              ) : null}
            </span>
            <span className={styles.inputBoxes}>
              <label htmlFor="number">Numero</label>
              <Field name="number" />
              {errors.number && errors.number ? (
                <p className={styles.errors}>{errors.number}</p>
              ) : null}
            </span>

            <span className={styles.inputBoxes}>
              <label htmlFor="zipCode">Codigo Postal</label>
              <Field name="zipCode" />
              {errors.zipCode && touched.zipCode ? (
                <p className={styles.errors}>{errors.zipCode}</p>
              ) : null}
            </span>

            <div className={styles.submitButtons}>
              <SubmitBtns
                okTitle="Ingresar Datos"
                canceTitle="Salir"
                handleCancelForm={onCancel}
                resetForm={resetForm}
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AdressForm;
