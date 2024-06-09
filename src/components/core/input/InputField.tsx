/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */

import React, { useState } from 'react';

interface InputFieldProps {
  // interface of input field
  onInputChange: (value: string) => void;
  placeholder?: string;
}

// input field props used by the component
const InputField: React.FC<InputFieldProps> = ({
  onInputChange,
  placeholder,
}) => {
  // create a state to change the dynamc value when user will be click to the input field
  const [inputValue, setInputValue] = useState<string>('');

  // create a function to handle input field
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onInputChange(e.target.value);
  };

  return (
    <section>
      <div className="flex justify-center">
        {/* input field */}
        <input
          className=" px-12 mx-1 py-3 shadow-inner shadow-black w-fit outline-none dark:bg-gray-200 "
          type="text"
          value={inputValue}
          // call the funtion
          onChange={handleChange}
          placeholder={placeholder}
        />
      </div>
    </section>
  );
};

export default InputField;
