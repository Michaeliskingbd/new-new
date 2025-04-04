import React from "react";

const Button = ({ body, onPress }) => {
  return (
    <div
      onClick={onPress}
      className="bg-green-400 px-6 py-2 rounded-md text-white"
    >
      {body}
    </div>
  );
};

export default Button;
