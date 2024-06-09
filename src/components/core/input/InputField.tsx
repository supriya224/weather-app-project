/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */

import React, { useState } from 'react';

interface InputFieldProps {
  onInputChange: (value: string) => void;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  onInputChange,
  placeholder,
}) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onInputChange(e.target.value);
  };

  return (
    <section>
      <div className="flex justify-center   ">
        <input
          className=" px-12 mx-1 py-3 shadow-inner shadow-black w-fit outline-none "
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </div>
    </section>
  );
};

export default InputField;
