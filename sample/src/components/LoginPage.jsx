import React, { useState } from 'react';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const validateForm = () => {
    let errorMes = {};

    if (!formData.email) {
      errorMes.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      errorMes.email = "Invalid email format";
    }

    if (!formData.password) {
      errorMes.password = "Password is required";
    } else if (formData.password.length < 8) {
      errorMes.password = "Password must be at least 8 characters long";
    }

    return errorMes;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validateForm();
    if (Object.keys(error).length > 0) {
      setErrors(error);
      return;
    }

    console.log("Login successful", formData);
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;