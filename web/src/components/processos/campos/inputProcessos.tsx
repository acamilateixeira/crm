import { FormControl, FormGroup, FormHelperText, Grid, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { NumericFormat } from 'react-number-format';

import { FormField } from '../../formField';
import estilo from './style.css';

export interface InputProcessoProps {
  tamanhoGrid: number;
  label: string;
  placeholder?: string;
  value?: string | number | File | File[] | null;
  onChange?: (value: string | number | File | File[] | null) => void;
  disabled?: boolean;
  type?: 'text' | 'number' | 'date' | 'file';
  format?: string;
  required?: boolean;
  multiple?: boolean; // Adicione a opção "multiple"
  helper?: string;
}

export function InputProcesso({
  tamanhoGrid,
  label,
  placeholder,
  value,
  onChange,
  required = false,
  disabled,
  type = 'text',
  format,
  multiple = false, // Padrão para false se não especificado
  helper,
}: InputProcessoProps) {
  const inputProps: any = {};

  if (type === 'date') {
    return (
      <Grid item xs={tamanhoGrid}>
        <FormField>
          <TextField
            size='small'
            required={required}
            type='date'
            label={label}
            multiline={multiple}
            placeholder={placeholder}
            InputLabelProps={{ shrink: true }}
            value={value as string}
            onChange={e => {
              const inputValue = e.target.value;
              onChange?.(multiple ? inputValue : inputValue[0]);
            }}
            disabled={disabled}
          />
        </FormField>

        {helper && <FormHelperText>{helper}</FormHelperText>}
      </Grid>
    );
  } else if (type === 'number' && format) {
    return (
      <Grid item xs={tamanhoGrid}>
        <FormField>
          <NumericFormat
            size='small'
            required={required}
            fullWidth
            customInput={TextField}
            label={label}
            placeholder={placeholder}
            value={value as string}
            onChange={values => onChange?.(values.target.value || '')}
            disabled={disabled}
            thousandSeparator={format.includes(',') ? ',' : undefined}
            decimalSeparator={format.includes('.') ? '.' : undefined}
          />
        </FormField>

        {helper && <FormHelperText>{helper}</FormHelperText>}
      </Grid>
    );
  } else if (type === 'file') {
    return (
      <Grid item xs={tamanhoGrid}>
        <FormControl fullWidth>
          <FormGroup>
            <label htmlFor='arquivo'>
              <input
                id='arquivo'
                name='arquivo'
                required={required}
                type='file'
                accept='.pdf, image/*, .doc, .docx, .xls, .xlsx, .csv'
                multiple={multiple} // Adicione a propriedade "multiple"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const selectedFiles = e.target.files;
                  if (!selectedFiles || selectedFiles.length === 0) {
                    onChange?.(null);
                    return;
                  }
                  const files = Array.from(selectedFiles);
                  onChange?.(multiple ? files : files[0]);
                }}
                disabled={disabled}
                className={estilo}
              />
            </label>

            {helper && <FormHelperText>{helper}</FormHelperText>}
          </FormGroup>
        </FormControl>
      </Grid>
    );
  } else if (type === 'text') {
    return (
      <Grid item xs={tamanhoGrid}>
        <FormField>
          <TextField
            size='small'
            required={required}
            type='text'
            label={label}
            multiline={multiple} // Adicione a propriedade "multiple" apenas se for verdadeiro
            placeholder={placeholder}
            value={value as string}
            onChange={e => {
              const inputValue = e.target.value;
              onChange?.(multiple ? inputValue : inputValue[0]);
            }}
            disabled={disabled}
          />
        </FormField>

        {helper && <FormHelperText>{helper}</FormHelperText>}
      </Grid>
    );
  }

  return (
    <Grid item xs={tamanhoGrid}>
      <FormField>
        <TextField
          size='small'
          required={required}
          label={label}
          placeholder={placeholder}
          value={value as string}
          onChange={e =>
            onChange?.(type === 'number' ? parseFloat(e.target.value) || '' : e.target.value)
          }
          disabled={disabled}
          {...inputProps}
        />
      </FormField>

      {helper && <FormHelperText>{helper}</FormHelperText>}
    </Grid>
  );
}
