import { useState, useEffect, useRef } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import useCloudinary from "../../../hooks/useCloudinary";
import SubmitBtns from "../SubmitBtns";
import Spinner from "../../ui/LoadingSpinner/Spinner";
import styles from "../forms.module.css";
import toast from "react-hot-toast";

const productSchema = Yup.object({
  images: Yup.array().of(
    Yup.string().required("Es necesario subir una imagen")
  ),
});

const ChangePictureForm = ({
  okTitle,
  onSubmit,
  canceTitle,
  onCancel,
  existingPhoto,
}) => {
  const [setFiles, files, uploadImagesToCloudinary] = useCloudinary();
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (existingPhoto) {
      setFiles([existingPhoto]);
    }
  }, [existingPhoto, setFiles]);

  const handleFileChange = async (event, setFieldValue, setValues) => {
    setLoading(true);
    const selectedFiles = [...event.currentTarget.files];

    const allowedExtensions = ["image/jpeg", "image/png", "image/gif"];
    const imageFiles = selectedFiles.filter(file =>
      allowedExtensions.includes(file.type)
    );

    if (imageFiles.length !== selectedFiles.length) {
      setLoading(false);
      toast("Todos los archivos deben ser imágenes con formato JPG, PNG o GIF.");
      setValues("photo", null);
      fileInputRef.current.value = null; // Clear the input field
      return;
    }

    setFieldValue("photo", imageFiles);
    await uploadImagesToCloudinary(event);
    setLoading(false);
  };

  const handleRemoveImage = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <>
      <Formik
        initialValues={{}}
        validationSchema={productSchema}
        onSubmit={(values, actions) => {
          onSubmit({ ...values, photo: files[0] });
          actions.setSubmitting(false);
          actions.resetForm();
        }}
      >
        {({ setValues, setFieldValue, errors }) => (
          <Form className={styles.form}>
            <div className={styles.inputBoxes}>
              <label htmlFor="photo">Imágenes</label>
              <input
                id="photo"
                name="photo"
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={(event) => handleFileChange(event, setFieldValue, setValues)}
              />
              {loading ? (
                <Spinner />
              ) : (
                <div className={styles.thumbnailCont}>
                  {files.map((file, index) => (
                    <div key={index} className={styles.thumbnailWrapper}>
                      <img
                        className={styles.thumbnail}
                        src={file}
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
              )}
              {errors.images && (
                <div className={styles.error}>{errors.images}</div>
              )}
            </div>
            <SubmitBtns
              okTitle={okTitle}
              canceTitle={canceTitle}
              handleCancelForm={onCancel}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ChangePictureForm;
