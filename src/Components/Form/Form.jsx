import React, {useState}  from "react";
function Form({inputValue, handleInputChange,selectValue ,handleSelectChange}) {  
  
  return ( 
    <div className="flex justify-around items-end mt-20 mb-20">
      <div className="flex-initial w-96 ">
        <input   value={inputValue} onChange={handleInputChange}
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-5 pr-3 shadow-sm focus:outline-none focus:border-sky-300 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="search"
          name="search"
        />
      </div>

      <div>
        <label
          htmlFor="countries"
          className="block mb-2 text-lg font-medium text-gray-900"
        >
          Select an option
        </label>
        <select value={selectValue} onChange={handleSelectChange}
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 dark:bg-gray-200 
            outline-slate-300
            dark:border-gray-300 dark:placeholder-gray-400 dark:text-black
           dark:focus:ring-blue-500 dark:focus:border-blue-300
           "
        >
          {/* <option defaultValue>Choose</option> */}
          <option value="africa">Africa</option>
          <option value="americas">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europa</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}

export default Form;
