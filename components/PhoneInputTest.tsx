import React, { useState } from "react";
import PhoneInput from "react-phone-number-input/input";
import "react-phone-number-input/style.css";

const PhoneInputTest = () => {
  const [value, setValue] = useState();

  return (
    <div>
      <h2>Phone Input Test</h2>
      <PhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}
        defaultCountry="GR"
        international
        withCountryCallingCode
      />
      <p>Current value: {value}</p>
    </div>
  );
};

export default PhoneInputTest;
