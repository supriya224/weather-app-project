import React from 'react';

function InputField() {
  return (
    <section>
      <div className="flex justify-center my-12  ">
        <input
          className="border px-12 mx-1 py-3 shadow-inner shadow-black w-fit"
          type="text"
          placeholder="search the based on location..."
          //   value={}
        />
        <button
          type="button"
          className="bg-blue-400 px-3 rounded-md shadow-inner shadow-blue-800"
        >
          Search
        </button>
      </div>
    </section>
  );
}

export default InputField;
