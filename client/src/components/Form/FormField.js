import React from 'react';

const FormField = field => {
  const { meta: { asyncValidating, touched, error } } = field;
  return (
    <div className={asyncValidating ? 'async-validating' : ''}>
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
