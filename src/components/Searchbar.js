import React, {useState} from 'react'
import './Searchbar.css'



export const Searchbar = () => { 
    const [input,setInput] = useState("")
    const fetchData = (value) => {
      fetch('https://jsonplaceholder.typicode.com/users') //dummy API
      .then(response => response.json())
      .then(json => { const results = json.filter((user)=> { return value && user && user.name && user.name.toLowerCase().includes(value) }) 
      console.log(results)
        
      } )
    }
    const handleChange = (value) => {
      setInput(value)
      fetchData(value)
    }

  return (
    <div className='bar'>
        <input placeholder='Search Products' value={input} onChange={(e) => handleChange(e.target.value)}/>

    </div>
  )
}
export default Searchbar
