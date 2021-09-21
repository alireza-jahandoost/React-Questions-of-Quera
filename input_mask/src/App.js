import React, { useState } from "react";
import Input from "./Input";
import cities from "./cities.json";

function App() {
  const [hint, setHint] = useState("");

  const handleChange = (e) => {
    const typedCity = e.target.value;

    if (!typedCity) {
      setHint("");
    } else {
      const matched = cities.find((city) => city.startsWith(typedCity));

      if (matched) {
        setHint(matched);
      } else {
        setHint("");
      }
    }
  };
  return (
    <div>
      <Input handleChange={handleChange} hint={hint} />
    </div>
  );
}

export default App;
