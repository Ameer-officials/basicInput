import React, { useState } from "react";

export const Input = () => {
  const [hello, setHello] = useState("");

  return (
    <div className="input">
      <input
        type="text"
        className="input-text"
        value={hello}
        placeholder="type here.."
        onChange={(e) => setHello(e.target.value) }
      /> 
      <input
        type="text"
        className="div-input"
        value={hello}
        onChange={(e) => setHello(e.target.value)}
      />
    </div>
  );
};
