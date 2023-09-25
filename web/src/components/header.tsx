import { Breadcrumbs, Chip, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { MARGIN_BOTTOM } from '../constants/marginBottom';

interface HeaderProps {
  breadcrumbs: {
    activePage: string;
    otherPages: {
      name: string;
      link: string;
    }[];
  };
}

export function Header({ breadcrumbs }: HeaderProps) {
  const css = makeStyles(() => ({
    container: {
      marginBottom: MARGIN_BOTTOM * 3,
    },
    link: {
      color: 'inherit',
      textDecoration: 'none',
    },
  }))();

  return (
    <Grid container className={css.container}>
      <Grid item>
        <Breadcrumbs separator={<AiOutlineArrowRight size={14} />}>
          {breadcrumbs.otherPages.map((name, index) => (
            <Chip key={index} label={name.name} component={Link} to={name.link} size='small' />
          ))}
          <Chip label={breadcrumbs.activePage} size='small' />
        </Breadcrumbs>
      </Grid>
    </Grid>
  );
}
