import React from 'react';

const FormField = field => {
  const { meta: { touched, error } } = field;
  return (
    <div>
      {field.label}
      <input
        {...field.input}
        autoComplete='off'
        type={field.type}
      />
      <p style={{ fontSize: '12px', color: 'red' }}>{touched ? error : ''}</p>
    </div>
  );
};

export default FormField;
