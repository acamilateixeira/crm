import { Grid, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { MARGIN_BOTTOM } from '../constants/marginBottom';

export function Welcome() {
  // const { usuario } = useAuth();

  const css = makeStyles(() =>
    createStyles({
      container: {
        marginBottom: MARGIN_BOTTOM,
      },
      logo: {
        width: 50,
        height: 50,
        marginRight: 15,
      },
    })
  )();

  return (
    <Grid container justifyContent='center' className={css.container}>
      <Grid item style={{ display: 'flex', alignItems: 'center' }}>
        <img className={css.logo} alt='Sicoob Central Cecremge' src='/static/images/mini.png' />
      </Grid>

      <Grid item>
        <Grid container direction='column'>
          <Typography variant='h6'>{`Olá, Camila Teixeira de Oliveira`}</Typography>

          <Typography variant='caption' color='textSecondary'>
            {format(new Date(), "d 'de' MMMM 'de' yyyy ',' k:mm", {
              locale: ptBR,
            })}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
