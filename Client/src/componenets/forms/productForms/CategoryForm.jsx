import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import SubmitBtns from "../SubmitBtns";

import styles from "../forms.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";

const categorySchema = Yup.object({
  catName: Yup.string().required("Debes ingresar un nombre para la categoria"),
  group: Yup.string().required("Debes ingresar el grupo al que pertenece"),
});

const CategoryForm = ({ onSubmit }) => {
  const [group, setGroup] = useState("");
  const categoriesGroups = useSelector((state) => state.categories.groups);
  const handleResetForm = (formik) => {
    formik.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{
          catName: "",
          image: "",
          group: "",
        }}
        validationSchema={categorySchema}
        onSubmit={(values, actions) => {
          onSubmit(values);
          values = { ...values, group: group };
          actions.resetForm();
          actions.setSubmitting(false);
        }}
      >
        {({ errors, touched, resetForm }) => (
          <Form className={styles.form}>
            <span className={styles.inputBoxes}>
              <label htmlFor="catName">Email</label>
              <Field name="catName" type="text" />
              {errors.catName && touched.catName ? (
                <p className={styles.errors}>{errors.catName}</p>
              ) : null}
            </span>
            <span className={styles.inputBoxes}>
              <label htmlFor="image">image</label>
              <Field name="image" type="image" />
              {errors.brandHomePage && touched.brandHomePage ? (
                <p className={styles.errors}>{errors.brandHomePage}</p>
              ) : null}
            </span>

            <span className={styles.inputBoxes}>
              <label htmlFor="nationality">Nacionalidad</label>
              <Field
                as="select"
                name="group"
                onChange={(e) => {
                  setGroup(e.target.value);
                }}
              >
                <option disabled value="">
                  Seleccione el grupo al que pertenece
                </option>
                {categoriesGroups.map((group) => (
                  <option key={Math.random()} value={group.toString()}>
                    {group}
                  </option>
                ))}
              </Field>
              {errors.group && touched.group ? (
                <p className={styles.errors}>{errors.group}</p>
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

export default CategoryForm;
