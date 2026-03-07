import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert('Login successful!');
        console.log('User data:', data.user);
        // You can store user data in localStorage or context here
        // localStorage.setItem('user', JSON.stringify(data.user));
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-400 to-red-600">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-normal text-gray-700 text-center mb-8">Login</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm mb-2">
              Password:
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              required
            />
          </div>

          <div className="mb-6">
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
                className="mr-2 w-4 h-4 accent-red-600"
              />
              Show Password
            </label>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={email === '' || password === ''}
          >
            SIGN IN
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600">
            Forgot{' '}
            <a href="#" className="text-red-600 hover:text-red-700">
              Username
            </a>
            {' / '}
            <a href="#" className="text-red-600 hover:text-red-700">
              Password?
            </a>
          </p>
          <p className="text-gray-600 mt-2">
            Don't have an account?{' '}
            <Link to="/register" className="text-red-600 hover:text-red-700">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}