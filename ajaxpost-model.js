import React, { useState } from 'react';

function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Post the data to the server
    fetch('https://example.com/api/endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      // Do something with the response data
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Update the formData object with the new input value
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </label>
      <label>
        Message:
        <textarea name="message" value={formData.message} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
