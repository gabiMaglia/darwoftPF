import { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useSelector } from "react-redux";
import SubmitBtns from "../SubmitBtns";
import styles from "../forms.module.css";
import { isAnEmptyObject } from "../../../utils/objects";

const categorySchema = Yup.object({
  catName: Yup.string().required("Debes ingresar un nombre para la categoría"),
  group: Yup.string().required("Debes ingresar el grupo al que pertenece"),
});

const CategoryForm = ({ onSubmit, initialData = {} }) => {
  const [group, setGroup] = useState("");
  const categoriesGroups = useSelector((state) => state.categories.groups);
  const handleResetForm = (formik) => {
    formik.resetForm();
  };
  const isUpdate = !isAnEmptyObject(initialData);
 
  return (
    <>
      <Formik
        initialValues={{
          catName: (isUpdate && initialData.catName) || "",
          group: (isUpdate && initialData.group._id) || "",
      
        }}
        validationSchema={categorySchema}
        onSubmit={(values, actions) => {
          const updatedValues = {
            ...values,
            group: group,
        
          };
          onSubmit(values);
          actions.resetForm();
          actions.setSubmitting(false);
        }}
      >
        {({ errors, touched, setFieldValue, resetForm }) => (
          <Form className={styles.form}>
            <span className={styles.inputBoxes}>
              <label htmlFor="catName">Nombre</label>
              <Field name="catName" type="text" />
              {errors.catName && touched.catName && (
                <p className={styles.errors}>{errors.catName}</p>
              )}
            </span>
            {/* IMAGEFIELD */}

            <span className={styles.inputBoxes}>
              <label htmlFor="group">Grupo al que pertenece la categoría</label>
              <Field
                as="select"
                name="group"
                onChange={(e) => {
                  setGroup(e.target.value);
                  setFieldValue("group", e.target.value);  
                }}
              >
                <option value="">
                  Seleccione el grupo al que pertenece
                </option>
                {categoriesGroups.map((group) => (
                  <option key={group.name} value={group._id}>
                    {group.name}
                  </option>
                ))}
              </Field>
              {errors.group && touched.group && (
                <p className={styles.errors}>{errors.group}</p>
              )}
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
