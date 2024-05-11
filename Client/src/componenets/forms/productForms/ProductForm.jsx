import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import SubmitBtns from "../SubmitBtns";

import styles from "../forms.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";

const productSchema = Yup.object({
  name: Yup.string().required("Debes ingresar un nombre producto"),
  price: Yup.number().required("Debes ingresar un precio"),
  images: Yup.array().required("Debes ingresar imagenes"),
  productDescription: Yup.array().required("Debes ingresar una descripcion"),
  stock: Yup.number().required(),
  category: Yup.string().required("Debes ingresar una categoria"),
  brand: Yup.string().required("Debes ingresar una marca"),
});

const ProductForm = ({onSubmit}) => {
  const categories = useSelector((state) => state.categories.groups);
  const brands = useSelector((state) => state.brand);
  
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");

  const handleResetForm = (formik) => {
    formik.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          price: 0,
          images: [],
          productDescription: "",
          isActive: false,
          isFeatured: false,
          stock: 0,
        }}
        validationSchema={productSchema}
        onSubmit={(values, actions) => {
          onSubmit(values);

          values = { ...values, category: category };
          values = { ...values, brand: brand };

          actions.resetForm();
          actions.setSubmitting(false);
        }}
      >
        {({ errors, touched, resetForm }) => (
          <Form className={styles.form}>
            <span className={styles.inputBoxes}>
              <label htmlFor="name">Nombre</label>
              <Field name="catName" type="text" />
              {errors.name && touched.name ? (
                <p className={styles.errors}>{errors.name}</p>
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
              <label htmlFor="productDescription">Nombre</label>
              <Field name="productDescription" type="text" />
              {errors.productDescription && touched.productDescription ? (
                <p className={styles.errors}>{errors.productDescription}</p>
              ) : null}
            </span>

            {/* ISACTIVE IS FEATURED CHECKBOXES */}
            <span className={styles.inputBoxes}>
              <label htmlFor="isActive">Producto disponible?</label>
              <Field name="image" type="checkbox" />
            </span>

            <span className={styles.inputBoxes}>
              <label htmlFor="isFeatured">Producto destacado?</label>
              <Field name="image" type="checkbox" />
            </span>

            <span className={styles.inputBoxes}>
              <label htmlFor="stock">Stock</label>
              <Field name="stock" type="number" />
              {errors.stock && touched.stock ? (
                <p className={styles.errors}>{errors.stock}</p>
              ) : null}
            </span>
              {/*BRAND AND CATEGORY SELECT*/}
            <span className={styles.inputBoxes}>
              <label htmlFor="category">Categoria</label>
              <Field
                as="select"
                name="category"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option disabled value="">
                  Seleccione la categoria
                </option>
                {categories.map((category) => (
                  <option key={Math.random()} value={category.toString()}>
                    {category}
                  </option>
                ))}
              </Field>
              {errors.category && touched.category ? (
                <p className={styles.errors}>{errors.category}</p>
              ) : null}
            </span>

            <span className={styles.inputBoxes}>
              <label htmlFor="nationality">Nacionalidad</label>
              <Field
                as="select"
                name="group"
                onChange={(e) => {
                  setBrand(e.target.value);
                }}
              >
                <option disabled value="">
                  Seleccione el grupo al que pertenece
                </option>
                {brands.map((brand) => (
                  <option key={Math.random()} value={brand.toString()}>
                    {brand}
                  </option>
                ))}
              </Field>
              {errors.brand && touched.brand ? (
                <p className={styles.errors}>{errors.brand}</p>
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
}

export default ProductForm