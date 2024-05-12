import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import SubmitBtns from "../SubmitBtns";
import styles from "../forms.module.css";
import { useSelector } from "react-redux";
import useCloudinary from "../../../hooks/useCloudinary";

const productSchema = Yup.object({
  name: Yup.string().required("Debes ingresar un nombre de producto"),
  price: Yup.number().required("Debes ingresar un precio"),
  images: Yup.array()
    .of(Yup.string().required("Es necesario subir una imagen"))
    .min(1, "Debes subir al menos una imagen"),
  productDescription: Yup.string().required("Debes ingresar una descripción"),
  stock: Yup.number().required("Debes ingresar la cantidad en stock"),
  category: Yup.string().required("Debes seleccionar una categoría"),
  brand: Yup.string().required("Debes seleccionar una marca"),
});

const ProductForm = ({ onSubmit }) => {
  const categories = useSelector((state) => state.categories.categories);
  console.log(categories)
  const { brands } = useSelector((state) => state.brands);
  const [setFiles, files, uploadImagesToCloudinary] = useCloudinary();

  return (
    <Formik
      initialValues={{
        name: "",
        price: 0,
        images: [],
        productDescription: "",
        isActive: false,
        isFeatured: false,
        stock: 0,
        category: "",
        brand: "",
      }}
      validationSchema={productSchema}
      onSubmit={(values, actions) => {
        values.category
        onSubmit({ ...values, images: files });
        actions.setSubmitting(false);
        actions.resetForm();
      }}
    >
      {({ setFieldValue, resetForm, errors, touched }) => (
        <Form className={styles.form}>
          <div className={styles.inputBoxes}>
            <label htmlFor="name">Nombre del Producto</label>
            <Field name="name" type="text" />
            {errors.name && touched.name && (
              <div className={styles.error}>{errors.name}</div>
            )}
          </div>

          <div className={styles.inputBoxes}>
            <label htmlFor="price">Precio</label>
            <Field name="price" type="number" />
            {errors.price && touched.price && (
              <div className={styles.error}>{errors.price}</div>
            )}
          </div>

          <div className={styles.inputBoxes}>
            <label htmlFor="images">Imágenes</label>
            <input
              id="images"
              name="images"
              type="file"
              accept="image/*"
              multiple
              onChange={(event) => {
                setFieldValue("images", [...event.currentTarget.files]);
                uploadImagesToCloudinary(event);
              }}
            />
            <div className={styles.thumbnailCont}>
              {files.map((file, index) => (
                <img
                  key={index}
                  className={styles.thumbnail}
                  src={file}
                  alt={`Uploaded-${index}`}
                />
              ))}
            </div>
            {errors.images && touched.images && (
              <div className={styles.error}>{errors.images}</div>
            )}
          </div>

          <div className={styles.inputBoxes}>
            <label htmlFor="productDescription">Descripción</label>
            <Field name="productDescription" as="textarea" />
            {errors.productDescription && touched.productDescription && (
              <div className={styles.error}>{errors.productDescription}</div>
            )}
          </div>

          <div className={styles.inputBoxes}>
            <label htmlFor="stock">Stock</label>
            <Field name="stock" type="number" />
            {errors.stock && touched.stock && (
              <div className={styles.error}>{errors.stock}</div>
            )}
          </div>

          <div className={styles.inputBoxes}>
            <label htmlFor="category">Categoría</label>
            <Field as="select" name="category">
              <option value="">Seleccione la categoría</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.catName}
                </option>
              ))}
            </Field>
            {errors.category && touched.category && (
              <div className={styles.error}>{errors.category}</div>
            )}
          </div>

          <div className={styles.inputBoxes}>
            <label htmlFor="brand">Marca</label>
            <Field as="select" name="brand">
              <option value="">Seleccione la marca</option>
              {brands.map((brand) => (
                <option key={brand._id} value={brand._id}>
                  {brand.brandName}
                </option>
              ))}
            </Field>
            {errors.brand && touched.brand && (
              <div className={styles.error}>{errors.brand}</div>
            )}
          </div>

          <div className={styles.submitButtons}>
            <SubmitBtns
              okTitle="Ingresar"
              canceTitle="Limpiar Datos"
              handleCancelForm={() => resetForm()}
              resetForm={resetForm}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ProductForm;
