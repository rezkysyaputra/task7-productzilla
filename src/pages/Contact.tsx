import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', subject: '', message: '' };

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.subject) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setFormData({ email: '', subject: '', message: '' });
    }
  };

  return (
    <section className='bg-gray-100 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-3xl mx-auto'>
        <h2 className='text-3xl font-bold text-center text-gray-900 dark:text-white mb-4'>
          Contact Me
        </h2>
        <p className='mb-8 text-center text-gray-600 dark:text-gray-400'>
          Looking to bring your ideas to life? Curious about my design process
          or past projects? I'm here to help. Drop me a line with your
          questions, feedback, or project inquiries, and I'll get back to you as
          soon as I can.
        </p>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Your email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white'
              placeholder='name@example.com'
              required
              aria-describedby='email-error'
            />
            {errors.email && (
              <p
                id='email-error'
                className='mt-2 text-sm text-red-600 dark:text-red-400'
              >
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor='subject'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Subject
            </label>
            <input
              type='text'
              id='subject'
              name='subject'
              value={formData.subject}
              onChange={handleChange}
              className='w-full px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white'
              placeholder='How can I help you?'
              required
              aria-describedby='subject-error'
            />
            {errors.subject && (
              <p
                id='subject-error'
                className='mt-2 text-sm text-red-600 dark:text-red-400'
              >
                {errors.subject}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor='message'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Your message
            </label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className='w-full px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white'
              placeholder='Leave a comment...'
              required
              aria-describedby='message-error'
            ></textarea>
            {errors.message && (
              <p
                id='message-error'
                className='mt-2 text-sm text-red-600 dark:text-red-400'
              >
                {errors.message}
              </p>
            )}
          </div>
          <button
            type='submit'
            className='w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors'
          >
            <span className='flex items-center justify-center'>
              <Send className='w-5 h-5 mr-2' />
              Send message
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
