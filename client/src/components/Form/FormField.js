import React from 'react';
import { TextField } from '@material-ui/core';

const FormField = field => {
  const { meta: { touched, error } } = field;
  return (
    <div>
      <TextField
        {...field.input}
        label={field.label}
        autoComplete='off'
        type={field.type}
        error={touched ? error : ''}
      />
    </div>
  );
};

export default FormField;
