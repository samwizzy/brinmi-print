import React, { Fragment, useState } from 'react';
import clsx from 'clsx';
import { Link, withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from './../../../store/actions';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Autocomplete } from '@material-ui/lab';
import {
  AppBar,
  Badge,
  Divider,
  Toolbar,
  IconButton,
  InputBase,
  Paper,
  TextField,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: theme.palette.primary.dark,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  menuButton: {
    '&.hide': { display: 'none' },
    [theme.breakpoints.up('sm')]: {},
  },
  button: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  avatar: { background: theme.palette.secondary.main },
  emailButton: {
    '& .MuiButton-startIcon': {
      textTransform: 'UPPERCASE',
    },
    '& .MuiButton-label': {
      textTransform: 'none',
    },
  },
  listIcon: { minWidth: 40 },
  navigation: {
    '& a': {
      color: theme.palette.grey[500],
      textDecoration: 'none',
      cursor: 'pointer',
      '&:hover': {
        color: theme.palette.secondary.light,
        textDecoration: 'none',
      },
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.up('md')]: {
      minHeight: '24px',
    },
    [theme.breakpoints.down('md')]: {
      minHeight: '24px',
    },
  },
  paper: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  autoComplete: {
    '& fieldset': {
      border: 0,
    },
    '& .MuiInputLabel-shrink': {
      display: 'none',
    },
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 32,
    margin: 4,
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

export default withRouter(function Header(props) {
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const [form, setForm] = useState({ query: '', category: '' });
  const user = useSelector(({ auth }) => auth.user.data);
  const categories = useSelector(({ library }) => library.category.categories);
  const books = useSelector(({ library }) => library.books.books);
  const cart = useSelector(({ cart }) => cart.cart.data);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSelectChange = (name) => (event, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSearch = () => {
    const q = form.query.toLowerCase();
    if (q.length > 1) {
      const filteredBooks = books.data.filter((book) => {
        const text = book.book.title.toLowerCase();
        const regex = `^${q}`;
        return text.match(regex);
      });
      dispatch(Actions.getFilteredBooks(filteredBooks));
    }
  };

  console.log(form, 'form');
  console.log(books, 'books secondary');

  return (
    <div>
      <AppBar position='static' color='secondary' elevation={0}>
        <Toolbar>
          <div className='w-full md:max-w-7xl md:mx-auto px-4 py-2 md:py-0 lg:px-8 flex items-center justify-between text-sm'>
            <div
              className={clsx(
                classes.navigation,
                'sm:flex sm:flex-1 items-center md:space-x-6 sm:space-x-2 space-y-2 md:space-y-0'
              )}
            >
              <Paper className={classes.paper}>
                <IconButton className={classes.iconButton} aria-label='menu'>
                  <MenuIcon />
                </IconButton>
                <Autocomplete
                  id='category'
                  className={classes.autoComplete}
                  options={categories}
                  onChange={handleSelectChange('category')}
                  getOptionLabel={(option) => option.title}
                  style={{ width: 300 }}
                  popupIcon={<ExpandMoreIcon />}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label='Categories'
                      variant='outlined'
                      size='small'
                      SelectProps={{
                        endAdornment: (
                          <IconButton>
                            <SearchIcon />
                          </IconButton>
                        ),
                      }}
                    />
                  )}
                />
                <Divider className={classes.divider} orientation='vertical' />
                <InputBase
                  className={classes.input}
                  name='query'
                  onChange={handleChange}
                  placeholder='Search books, clubs...'
                  inputProps={{ 'aria-label': 'search books, clubs' }}
                />
                <IconButton
                  type='submit'
                  className={classes.iconButton}
                  onClick={handleSearch}
                  aria-label='search'
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </div>

            <div className='flex items-center space-x-2'>
              {user.role ? (
                <Fragment>
                  <IconButton
                    aria-label='cart'
                    component={Link}
                    to='/account/cart'
                  >
                    <StyledBadge badgeContent={cart.length} color='secondary'>
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </IconButton>
                </Fragment>
              ) : (
                <Fragment>
                  <IconButton
                    aria-label='cart'
                    component={Link}
                    to='/account/cart'
                  >
                    <StyledBadge badgeContent={0} color='secondary'>
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </IconButton>
                </Fragment>
              )}
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
});
