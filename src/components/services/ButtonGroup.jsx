import React from "react";

const ButtonGroup = ({ children }) => {
return (
    <div
    style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        flexWrap: "wrap",
    }}
    >
    {children}
    </div>
);
};

export default ButtonGroup;