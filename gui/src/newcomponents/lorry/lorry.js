import React from "react";

const cardStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: "1px solid black",
  padding: "10px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const detailStyle = {
  border: "1px solid black",
  padding: "10px",
  flexGrow: 1,
};

const buttonStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginLeft: "10px",
};

const doneButtonStyle = {
  padding: "5px 10px",
  margin: "5px",
  border: "none",
  color: "white",
  cursor: "pointer",
};

const CartComponent = () => {
  const handleDoneClick = (color) => {
    console.log(`Done button with color ${color} was clicked`);
  };

  return (
    <div style={cardStyle}>
      <div style={detailStyle}>Details</div>
      <div style={buttonStyle}>
        <button
          style={{ ...doneButtonStyle, backgroundColor: "green" }}
          onClick={() => handleDoneClick("green")}
        >
          Done
        </button>
        <button>View Details</button>
        <button
          style={{ ...doneButtonStyle, backgroundColor: "red" }}
          onClick={() => handleDoneClick("red")}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default CartComponent;
