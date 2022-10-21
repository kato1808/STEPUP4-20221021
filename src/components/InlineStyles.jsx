export const InlineStyles = () => {
  const containerStyles = {
    border: "solid 2px #392eff",
    borderRadius: "10px",
    padding: "20px",
    margin: "20px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titleStyles = {
    margin: "0",
    color: "#3d84a8"
  };
  const buttonStyles = {
    backgroundColor: "#abedd8",
    border: "none",
    padding: "10px",
    borderRadius: "10px"
  };
  return (
    <div style={containerStyles}>
      <p style={titleStyles}>- InlineStyles =</p>
      <button style={buttonStyles}>UP</button>
    </div>
  );
};
