import { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useSelector } from "react-redux";
import useCloudinary from "../../../hooks/useCloudinary";
import SubmitBtns from "../SubmitBtns";
import styles from "../forms.module.css";

const FILE_SIZE = 2160 * 1024; 
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];
// Esquema de validación con Yup
const categorySchema = Yup.object({
  catName: Yup.string().required("Debes ingresar un nombre para la categoría"),
  group: Yup.string().required("Debes ingresar el grupo al que pertenece"),
  image: Yup.mixed()
    .required("Es necesario subir una imagen")
    .test(
      "fileSize",
      "El archivo es muy grande",
      (value) => value && value.size <= FILE_SIZE
    )
    .test(
      "fileType",
      "Formato no soportado",
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    ),
});

const CategoryForm = ({ onSubmit }) => {
  const [ group, setGroup] = useState("");
  const [setFile, file, uploadImageToCloudinary] = useCloudinary()
  const categoriesGroups = useSelector((state) => state.categories.groups);
  const handleResetForm = (formik) => {
    formik.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{
          catName: "",
          group: "",
          image: null,
        }}
        validationSchema={categorySchema}
        onSubmit={(values, actions) => {
          const updatedValues = {
            ...values,
            group: group,
            image: file,
          };

          onSubmit(updatedValues);
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
              <label htmlFor="image">Imagen</label>
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={(event) => {
                  setFile(event.currentTarget.files[0]);
                  setFieldValue("image", event.currentTarget.files[0]);
                  uploadImageToCloudinary(event);
                }}
              />
              {file && (
                <div className={styles.thumbnailCont}>
                  <img className={styles.thumbnail} src={file} alt="Uploaded" />
                  <button
                    type="button"
                    onClick={() => {
                      setFile(null);
                      setFieldValue("image", null);
                    }}
                  >
                    Eliminar Imagen
                  </button>
                </div>
              )}
              {errors.image && touched.image && (
                <p className={styles.errors}>{errors.image}</p>
              )}
            </span>

            <span className={styles.inputBoxes}>
              <label htmlFor="group">Grupo al que pertenece la categoría</label>
              <Field
                as="select"
                name="group"
                onChange={(e) => {
                  setGroup(e.target.value);
                  setFieldValue("group", e.target.value); // Asegurarse de que Formik maneje el estado del grupo
                }}
              >
                <option disabled value="">
                  Seleccione el grupo al que pertenece
                </option>
                {categoriesGroups.map((group) => (
                  <option key={group.name} value={group.name}>
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
