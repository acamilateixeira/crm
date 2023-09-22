import { FormControl, FormGroup, FormLabel } from '@mui/material';
import { makeStyles } from '@mui/styles';

interface FormFieldProps {
  label?: string;
  children: React.ReactNode;
}

export function FormField({ children, label }: FormFieldProps) {
  const css = makeStyles({
    label: {
      fontSize: 12,
      marginBottom: 2,
    },
  })();

  return (
    <FormControl fullWidth>
      <FormLabel className={css.label}>{label}</FormLabel>
      <FormGroup>{children}</FormGroup>
    </FormControl>
  );
}
