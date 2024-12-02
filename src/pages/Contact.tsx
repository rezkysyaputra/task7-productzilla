import React from 'react';
import ContactForm, { ContactFormData } from '../components/ContactForm';

const Contact: React.FC = () => {
  const handleContactSubmit = (formData: ContactFormData) => {
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
  };

  return (
    <section className='dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8'>
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
        <ContactForm onSubmit={handleContactSubmit} />
      </div>
    </section>
  );
};

export default Contact;
