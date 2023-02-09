import React ,{useState} from 'react'
import AllCountries from '../Components/AllCountries/AllCountries.jsx'
import Form from '../Components/Form/Form.jsx'


function Home() {
  const [inputValue, setInputValue] = useState("")
  const [selectValue, setSelectValue] = useState("");
  


  const handleInputChange=(event)=>{
    setInputValue(event.target.value);
  }
  
  const handleSelectChange=(event)=>{
    setSelectValue(event.target.value);
  }
  


  return (
    <>
        <Form  selectValue={selectValue} handleSelectChange={handleSelectChange} inputValue={inputValue} handleInputChange={handleInputChange}/>
        <AllCountries  selectValue={selectValue} inputValue={inputValue}/>
    </>

  )
}

export default Home