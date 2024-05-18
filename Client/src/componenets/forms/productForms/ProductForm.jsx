import { useState, useEffect, useRef } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import SubmitBtns from "../SubmitBtns";
import styles from "../forms.module.css";
import { useSelector } from "react-redux";
import useCloudinary from "../../../hooks/useCloudinary";
import { isAnEmptyObject } from "../../../utils/objects";
import Spinner from "../../ui/LoadingSpinner/Spinner";
import toast from "react-hot-toast";

const productSchema = Yup.object({
  name: Yup.string().required("Debes ingresar un nombre de producto"),
  price: Yup.number().required("Debes ingresar un precio"),
  images: Yup.array()
    .of(Yup.string().required("Es necesario subir una imagen"))
    .min(1, "Debes subir al menos una imagen"),
  productDescription: Yup.string().required("Debes ingresar una descripción"),
  stock: Yup.number().min(1).required("Debes ingresar la cantidad en stock"),
  category: Yup.string().required("Debes seleccionar una categoría"),
  brand: Yup.string().required("Debes seleccionar una marca"),
});

const ProductForm = ({ onSubmit, initialData = {} }) => {
  const categories = useSelector((state) => state.categories.categories);
  const { brands } = useSelector((state) => state.brands);
  const [setFiles, files, uploadImagesToCloudinary] = useCloudinary();
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const isUpdate = !isAnEmptyObject(initialData);

  useEffect(() => {
    if (isUpdate && initialData.images) {
      setFiles(initialData.images);
    }
  }, [isUpdate, initialData.images, setFiles]);

  const handleFileChange = async (event, setFieldValue) => {
    setLoading(true);
    const selectedFiles = [...event.currentTarget.files];
    const allowedExtensions = ["image/jpeg", "image/png", "image/gif"];
    const imageFiles = selectedFiles.filter(file =>
      allowedExtensions.includes(file.type)
    );
    if (imageFiles.length !== selectedFiles.length) {
      setLoading(false);
      toast("Todos los archivos deben ser imágenes con formato JPG, PNG o GIF.");
      setFieldValue("images", []);
      setFiles([]);
      fileInputRef.current.value = null;
      return;
    }

    setFieldValue("images", [...imageFiles]);
    await uploadImagesToCloudinary(event);
    setLoading(false);
  };

  const handleRemoveImage = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <Formik
      initialValues={{
        name: (isUpdate && initialData.name) || "",
        price: (isUpdate && initialData.price) || 0,
        images: (isUpdate && initialData.images) || [],
        productDescription: (isUpdate && initialData.productDescription) || "",
        isActive: (isUpdate && initialData.isActive) || true,
        isFeatured: (isUpdate && initialData.isFeatured) || false,
        stock: (isUpdate && initialData.stock) || 0,
        category: (isUpdate && initialData.category._id) || "",
        brand: (isUpdate && initialData.brand._id) || "",
      }}
      validationSchema={productSchema}
      onSubmit={(values, actions) => {
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
              onChange={(event) => handleFileChange(event, setFieldValue)}
              ref={fileInputRef}
            />
            {loading ? (
              <Spinner />
            ) : (
              files.length > 0 && (
                <div className={styles.thumbnailCont}>
                  { files.map((file, index) => (
                    <div key={index} className={styles.thumbnailWrapper}>
                      <img
                        className={styles.thumbnail}
                        src={
                          typeof file === "string"
                            ? file
                            : URL.createObjectURL(file)
                        }
                        alt={`Uploaded-${index}`}
                      />
                      <button
                        type="button"
                        className={styles.removeButton}
                        onClick={() => handleRemoveImage(index)}
                      >
                        X
                      </button>
                    </div>
                  ))}
                </div>
              )
            )}
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
          <div className={styles.checkboxes}>
            <div className={styles.inputBoxes}>
              <label htmlFor="isFeatured">Producto destacado?</label>
              <Field name="isFeatured" type="checkbox" />
              {errors.isFeatured && touched.isFeatured && (
                <div className={styles.error}>{errors.isFeatured}</div>
              )}
            </div>
          </div>

          <div className={styles.submitButtons}>
            <SubmitBtns
              okTitle="Ingresar datos"
              canceTitle="Salir"
              handleCancelForm={() => resetForm()}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ProductForm;
