import React, { useState } from 'react';
import axios from 'axios';
import './Addform.css'; 

const AddForm = () => {

  
  
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    year: '',
    image:'',
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();


   await axios.post("http://localhost:3000/api/book/add",formData)
   .then((res)=>{
    alert(res.data.message);
   });
  
   console.log(formData);

    setFormData({
        title: '',
        author: '',
        year: '',
        file: '',
      });

    
  };


  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  return (
    <div className="form-container">
      <h2>ADD BOOK</h2>
      <form>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Year of Publication:</label>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
        <label>image url:</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            required
          />
        </div>
        <button onClick={handleSubmit} >Submit</button>
      </form>
    </div>
  );
};

export default AddForm;
