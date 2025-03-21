import React, { useState } from 'react';
import { CheckCircle, User } from 'lucide-react';
import InputField from './InputFields';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [users, setUsers] = useState([]);
  const [passwordMatch, setPasswordMatch] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (successMessage) setSuccessMessage('');
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!passwordMatch) {
      setErrorMessage('Passwords do not match');
      setIsSubmitting(false);
      return;
    }

    await new Promise(resolve => setTimeout(resolve, 1000));
    setSuccessMessage('Profile successfully created! 🎉');

    setUsers((prevUsers) => [...prevUsers, formData]);
    setFormData({ name: '', email: '', phone: '', password: '', confirmPassword: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 transform transition-all duration-500 hover:shadow-xl">
        <div className="flex justify-center mb-6">
          <User size={40} className="text-blue-600" />
        </div>

        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Create Your Profile</h2>

        {successMessage && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center justify-center text-green-600 animate-fade-in">
            <CheckCircle className="mr-2" size={20} />
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center justify-center text-red-600 animate-fade-in">
            <CheckCircle className="mr-2" size={20} />
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <InputField
            label="Phone (Optional)"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <InputField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            passwordValue={formData.password}
            setPasswordMatch={setPasswordMatch}
            passwordMatchError={errorMessage}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 border border-transparent rounded-lg text-white font-medium
              ${isSubmitting 
                ? 'bg-blue-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200'
              }
              transition-all duration-300 transform hover:scale-[1.02]`}
          >
            {isSubmitting ? 'Creating Profile...' : 'Create Profile'}
          </button>
        </form>
      </div>

      {users.length > 0 && (
        <div className="mt-8 max-w-full mx-auto bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">User Profiles</h3>
          <div className="flex space-x-6 overflow-x-auto">
            {users.map((user, index) => (
              <div key={index} className="w-64 p-4 border-2 border-gray-300 rounded-lg shadow-sm flex-shrink-0">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                {user.phone && <p><strong>Phone:</strong> {user.phone}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
