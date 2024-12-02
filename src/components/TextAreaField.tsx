import React from 'react';

interface TextAreaFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  placeholder?: string;
  rows?: number;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  id,
  label,
  value,
  onChange,
  error,
  placeholder,
  rows = 6,
}) => {
  return (
    <div className='mb-4'>
      <label
        htmlFor={id}
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
      >
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        required
        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? 'border-red-600' : 'border-gray-300'
        }`}
      ></textarea>
      {error && (
        <p role='alert' className='mt-2 text-sm text-red-600 dark:text-red-400'>
          {error}
        </p>
      )}
    </div>
  );
};

export default TextAreaField;
