import "./contactsSocial.css";
export const ContactsSocial = ({ children }) => {
  return (
    <div
      style={{
        width: 28,
        height: 28,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        backgroundColor: "#fff",
      }}
    >
      {children}
    </div>
  );
};
