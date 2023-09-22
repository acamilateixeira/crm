import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { IconType } from 'react-icons';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import { Link } from 'react-router-dom';

interface Option {
  to: string;
  title: string;
  icon: IconType;
}

interface MenuOptionTwoLevelsProps {
  icon: IconType;
  isOpen: boolean;
  options: Option[];
  title: string;
  toggle: () => void;
}

export function MenuOptionTwoLevels(props: MenuOptionTwoLevelsProps) {
  const css = makeStyles({
    listItem: {
      paddingTop: 2,
      paddingBottom: 2,
      borderRadius: 16,
    },
    listItemText: {
      fontSize: 14,
    },
    subList: {
      marginLeft: 10,
    },
    listSubItemText: {
      fontSize: 12,
    },
  })();

  const Icon = props.icon;

  return (
    <>
      <ListItemButton classes={{ root: css.listItem }} onClick={props.toggle}>
        <ListItemIcon>
          <Icon size={14} />
        </ListItemIcon>

        <ListItemText primary={props.title} classes={{ primary: css.listItemText }} />

        {props.isOpen ? <MdExpandLess /> : <MdExpandMore />}
      </ListItemButton>

      <Collapse in={props.isOpen} timeout='auto' unmountOnExit>
        <List component='div' disablePadding className={css.subList}>
          {props.options.map((option, index) => {
            const Icon = option.icon;

            return (
              <ListItemButton
                key={index}
                to={option.to}
                component={Link}
                classes={{ root: css.listItem }}
              >
                <ListItemIcon>
                  <Icon size={14} />
                </ListItemIcon>

                <ListItemText primary={option.title} classes={{ primary: css.listSubItemText }} />
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </>
  );
}
