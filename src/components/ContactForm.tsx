import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Button from '../components/Button';
import InputField from './InputField';
import TextAreaField from './TextAreaField';

export interface ContactFormData {
  email: string;
  subject: string;
  message: string;
}

export interface ContactProps {
  onSubmit: (formData: ContactFormData) => void;
}

const ContactForm: React.FC<ContactProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
      setFormData({ email: '', subject: '', message: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-label='Contact Form'>
      <InputField
        id='email'
        label='Your email'
        type='email'
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        placeholder='name@example.com'
      />
      {errors.email && (
        <p role='alert' className='text-red-500'>
          {errors.email}
        </p>
      )}

      <InputField
        id='subject'
        label='Subject'
        type='text'
        value={formData.subject}
        onChange={handleChange}
        error={errors.subject}
        placeholder='How can I help you?'
      />
      {errors.subject && (
        <p role='alert' className='text-red-500'>
          {errors.subject}
        </p>
      )}

      <TextAreaField
        id='message'
        label='Your message'
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        placeholder='Leave a comment...'
        rows={6}
      />
      {errors.message && (
        <p role='alert' className='text-red-500'>
          {errors.message}
        </p>
      )}

      <Button type='submit'>
        <Send />
        Send message
      </Button>
    </form>
  );
};

export default ContactForm;
