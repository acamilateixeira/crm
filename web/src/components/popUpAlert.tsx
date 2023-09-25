import {
  Alert as MuiAlert,
  AlertProps as MuiAlertProps,
  Button,
  Snackbar,
  Theme,
} from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import { createStyles, makeStyles } from '@mui/styles';
import { MdCheck } from 'react-icons/md';

export interface PopUpAlertProps {
  type: 'success' | 'info' | 'warning' | 'error';
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

function Alert(props: MuiAlertProps) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

export function PopUpAlert({ isOpen, message, type, onClose }: PopUpAlertProps) {
  const css = makeStyles((theme: Theme) =>
    createStyles({
      backdrop: {
        zIndex: theme.zIndex.drawer + 200,
        color: '#fff',
        backdropFilter: 'blur(3px)',
        WebkitBackdropFilter: 'blur(3px)',
      },
    })
  )();

  const action = (
    <Button variant='outlined' size='small' onClick={onClose} endIcon={<MdCheck />}>
      OK
    </Button>
  );

  return (
    <Backdrop className={css.backdrop} open={isOpen}>
      <Snackbar open={isOpen} autoHideDuration={20000} onClose={onClose}>
        <Alert onClose={onClose} severity={type} action={action}>
          {message}
        </Alert>
      </Snackbar>
    </Backdrop>
  );
}
