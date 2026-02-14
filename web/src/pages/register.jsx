import { useState } from 'react';

export default function Register({ onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    contactNumber: '',
    address: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    // Prepare data to match backend model
    const userData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      age: parseInt(formData.age),
      email: formData.email,
      contactNumber: formData.contactNumber,
      address: formData.address,
      password: formData.password
    };
    
    console.log('Register submitted:', userData);
    // Add your registration logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-400 to-red-600 py-8">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-4xl">
        <h1 className="text-3xl font-normal text-gray-700 text-center mb-6">Sign Up</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-gray-700 text-sm mb-1">
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-gray-700 text-sm mb-1">
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
            </div>

            {/* Age */}
            <div>
              <label htmlFor="age" className="block text-gray-700 text-sm mb-1">
                Age:
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter age"
                min="1"
                max="120"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
            </div>

            {/* Contact Number */}
            <div>
              <label htmlFor="contactNumber" className="block text-gray-700 text-sm mb-1">
                Contact Number:
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Enter contact number"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-gray-700 text-sm mb-1">
                Address:
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter address"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-gray-700 text-sm mb-1">
                Password:
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-gray-700 text-sm mb-1">
                Confirm Password:
              </label>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Checkboxes */}
          <div className="mt-4 space-y-2">
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
                className="mr-2 w-4 h-4 accent-red-600"
              />
              Show Password
            </label>
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                checked={showConfirmPassword}
                onChange={(e) => setShowConfirmPassword(e.target.checked)}
                className="mr-2 w-4 h-4 accent-red-600"
              />
              Show Confirm Password
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded transition duration-200"
          >
            SIGN UP
          </button>
        </form>

        <div className="mt-4 text-center text-sm">
          <p className="text-gray-600">
            Already have an account?{' '}
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                onSwitchToLogin?.();
              }}
              className="text-red-600 hover:text-red-700"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}