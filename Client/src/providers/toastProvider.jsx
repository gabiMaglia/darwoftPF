import { Toaster } from "react-hot-toast";

export const ToasterProvider = () => {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        className: "toast",
        style: {
          border: "1px solid #713200",
          padding: "16px",
          width: "100%",
          fontSize: "24px",
          wordWrap: "break-word", 
          whiteSpace: "normal",
          duration: 15000,
        },
      }}
    />
  );
};
