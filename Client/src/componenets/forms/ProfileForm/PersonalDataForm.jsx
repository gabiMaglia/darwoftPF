import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import SubmitBtns from "../SubmitBtns";
import {nacionalities} from "../../../utils/paises";

import styles from "../forms.module.css";
import { formatInitialDate } from "../../../utils/date";

const personalDataSchema = Yup.object({
  firstName: Yup.string().min(3).required("Debes ingresar un nombre"),
  lastName: Yup.string().min(3).required("Debes ingresar un apellido"),
  nationality: Yup.string().required("Debe seleccionar una nacionalidad"),
  birthday: Yup.date().required("La fecha de nacimiento es requerida"),
  dni: Yup.string().required("El documento de identidad es requerido"),
});

const PersonalDataForm = ({ onSubmit, onCancel, initialData }) => {
  
  return (
    <>
      <Formik
        initialValues={{
          firstName: initialData.firstName || "",
          lastName: initialData.lastName || "",
          photo: initialData.photo || "",
          birthday: formatInitialDate(initialData.birthday) || "",
          nationality: initialData.nationality || "",
          dni: initialData.dni || "",
        }}
        validationSchema={personalDataSchema}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit({ id: initialData._id, userData: values });
          setSubmitting(false);
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <div className={styles.inputBoxes}>
              <label htmlFor="firstName">Nombre</label>
              <Field id="firstName" name="firstName" />
              {errors.firstName && touched.firstName && (
                <p className={styles.errors}>{errors.firstName}</p>
              )}
            </div>

            <div className={styles.inputBoxes}>
              <label htmlFor="lastName">Apellido</label>
              <Field id="lastName" name="lastName" />
              {errors.lastName && touched.lastName && (
                <p className={styles.errors}>{errors.lastName}</p>
              )}
            </div>

            <div className={styles.inputBoxes}>
              <label htmlFor="birthday">Fecha de Nacimiento</label>
              <Field type="date" id="birthday" name="birthday" />
            </div>

            <div className={styles.inputBoxes}>
              <label htmlFor="nationality">Nacionalidad</label>
              <Field as="select" name="nationality" id="nationality">
                <option disabled value="">
                  Seleccione su nacionalidad
                </option>
                {nacionalities.map((nationality) => (
                  <option key={nationality+Math.random()} value={nationality}>
                    {nationality}
                  </option>
                ))}
              </Field>
              {errors.nationality && touched.nationality && (
                <p className={styles.errors}>{errors.nationality}</p>
              )}
            </div>

            <div className={styles.inputBoxes}>
              <label htmlFor="dni">Documento de Identidad</label>
              <Field id="dni" name="dni" />
              {errors.dni && touched.dni && (
                <p className={styles.errors}>{errors.dni}</p>
              )}
            </div>

            <div className={styles.submitButtons}>
              <SubmitBtns
                okTitle="Ingresar Datos"
                canceTitle="Salir"
                handleCancelForm={onCancel}
                resetForm={onCancel}
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PersonalDataForm;
