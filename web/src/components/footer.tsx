import { Box, Link, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

export function Footer() {
  const css = makeStyles({
    link: {
      textDecoration: 'none',
      '&:hover': {
        color: '#00AE9D',
        textDecoration: 'none',
      },
    },
  })();

  return (
    <Box pt={4}>
      <Typography variant='body2' color='textSecondary' align='center'>
        {'Copyright © '}

        <Link
          color='inherit'
          href='https://www.sicoob.com.br/web/sicoobcentralcecremge'
          className={css.link}
        >
          Sicoob Central Cecremge
        </Link>

        {` ${new Date().getFullYear()}.`}
      </Typography>
    </Box>
  );
}
