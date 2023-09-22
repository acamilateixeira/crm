import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

interface MenuOptionOneLevelProps {
  to: string;
  title: string;
  icon: IconType;
}

export function MenuOptionOneLevel(props: MenuOptionOneLevelProps) {
  const css = makeStyles({
    listItem: {
      paddingTop: 2,
      paddingBottom: 2,
      borderRadius: 16,
    },
    listItemText: {
      fontSize: 14,
    },
  })();

  const Icon = props.icon;

  return (
    <>
      <ListItemButton classes={{ root: css.listItem }} component={Link} to={props.to}>
        <ListItemIcon>
          <Icon size={20} />
        </ListItemIcon>

        <ListItemText primary={props.title} classes={{ primary: css.listItemText }} />
      </ListItemButton>
    </>
  );
}
