import React from 'react';
import { TextField } from '@material-ui/core';

const FormField = field => {
  const { meta: { touched, error } } = field;
  return (
    <div>
      <TextField
        {...field.input}
        label={field.label}
        type={field.type}
        autoComplete='off'
        // error={touched ? true : false}
      />
      <p style={{ fontSize: '12px', color: 'red' }}>{touched ? error : ''}</p>
    </div>
  );
};

export default FormField;
