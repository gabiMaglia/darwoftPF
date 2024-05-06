import { Toaster } from "react-hot-toast";

export const ToasterProvider = () => {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        className: "",
        style: {
          border: "1px solid #713200",
          padding: "16px",
          width: "100%",
          fontSize: "24px",
          duration: 15000,
        },
      }}
    />
  );
};
