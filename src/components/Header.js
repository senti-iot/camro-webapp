import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, ButtonBase, Typography, Badge, Button, Menu, MenuItem, Grid, SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText, Fade } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';
import ListIcon from '@material-ui/icons/List';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import PeopleIcon from '@material-ui/icons/People';
import EmailIcon from '@material-ui/icons/Email';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import CopyrightIcon from '@material-ui/icons/Copyright';
import MapIcon from '@material-ui/icons/Map';
import TuneIcon from '@material-ui/icons/Tune';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import BusinessIcon from '@material-ui/icons/Business';
import SettingsIcon from '@material-ui/icons/Settings';
import { useHistory } from 'react-router'
import Gravatar from 'react-gravatar';
import { useDispatch, useSelector } from 'react-redux';

import mainStyles from 'styles/mainStyles';
import BarButton from './ui/BarButton';
import logo from 'assets/logo.svg';
import { logoutUser } from 'data/coreApi';
import { changeMainView, changeHeaderTitle, toogleFilterBar } from 'redux/appState';
import FilterToolbar from 'components/filterToolbar/FilterToolbar'
import { ReactComponent as BenchmarkIcon } from "assets/icons/benchmark.svg";
import { ReactComponent as PoweredByIcon } from "assets/icons/poweredby.svg";

const Header = (props) => {
	const classes = mainStyles();
	const history = useHistory();
	const dispatch = useDispatch();
	// const t = useLocalization()
	const [anchorProfile, setAnchorProfile] = useState(null);
	const [drawerOpen, setDrawerOpen] = useState(false);
	const openProfile = Boolean(anchorProfile);
	const [hasFilters, setHasFilters] = useState(0);

	const user = useSelector(s => s.user.user);
	const activeView = useSelector(s => s.appState.mainView);
	const headerTitle = useSelector(s => s.appState.headerTitle);
	const filterBarShown = useSelector(s => s.appState.filterBarShown);
	const filterIconShown = useSelector(s => s.appState.filterIconShown);
	const filters = useSelector(s => s.appState.filters);

	useEffect(() => {
		setHasFilters(filters.buildings.length ? true : false);
	}, [filters]);

	const ft = [
		{ key: 'name', name: "Navn", type: 'string' },
		{ key: '', name: "Free Text", type: 'string', hidden: true },
	]

	const redux = {
		resetRedux: () => dispatch({ type: 'RESET_APP' })
	};

	const handleProfileOpen = e => {
		setAnchorProfile(e.currentTarget);
	};

	const handleProfileClose = () => {
		setAnchorProfile(null);

		if (props.onClose) {
			props.onClose();
		}
	};

	const handleLogOut = async () => {
		const result = await logoutUser();
		if (result.status === 200) {
			redux.resetRedux();
			history.push('/login');
		}
	};

	const toggleFilter = () => {
		dispatch(toogleFilterBar());
	};

	const _onChangeView = viewType => {
		if (viewType === 'dashboard') {
			history.push('/map');
		} else if (viewType === 'list') {
			history.push('/list');
		} else if (viewType === 'thumbs') {
			history.push('/thumbs');
		}
	}

	const toggleDrawer = () => {
		setDrawerOpen(drawerOpen ? false : true);
	};

	const goToPage = page => {
		switch (page) {
			default:
			case 'dashboard':
				history.push('/');
				break;
			case 'favorites':
				history.push('/favorites');
				break;
			case 'users':
				history.push('/users');
				break;
			case 'customers':
				history.push('/customers');
				break;
			case 'support':
				history.push('/');
				break;
			case 'policy':
				history.push('/');
				break;
			case 'about':
				history.push('/');
				break;
			case 'profile':
				history.push('/profile');
				break;
			case 'account':
				history.push('/account');
				break;
			case 'settings':
				history.push('/settings');
				break;
		}
	}

	const onOpenDrawer = () => {

	}

	const handleLogoClick = () => {
		dispatch(changeMainView('dashboard'));
		dispatch(changeHeaderTitle('Dashboard'));

		history.push('/');
	}

	return (
		<>
			<div className={classes.appBarWrapper}>
				<AppBar className={classes.appBarPrimary} position='relative' elevation={0}>
					<Toolbar>
						<IconButton
							edge="start"
							className={classes.menuButton}
							
							onClick={toggleDrawer}
						>
							<MenuIcon fontSize="large" />
						</IconButton>

						<div className={classes.logoContainer}>
							<ButtonBase
								focusRipple
								className={classes.image}
								focusVisibleClassName={classes.focusVisible}
								onClick={handleLogoClick}
							>
								<img src={`${logo}`} alt="Camro logo" className={classes.logo} />
							</ButtonBase>
						</div>

						<Typography className={classes.appbarTitle}>
							{headerTitle ? headerTitle : ""}
						</Typography>

						{/* <div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
								placeholder="Søg..."
								classes={{
									root: classes.searchInputRoot,
									input: classes.searchInput,
								}}
							/>
						</div> */}

						<IconButton>
							<Badge badgeContent={0} color="secondary" overlap="circle" classes={{ badge: classes.notificationsBadge }}>
								<NotificationsIcon fontSize="large" className={classes.notificationsIcon} />
							</Badge>
						</IconButton>

						<div>
							<div className={classes.username}>{user ? user.firstName + ' ' + user.lastName : ""}</div>
							<Button
								onClick={handleProfileOpen}
							>
								{user ? user.img ? <img src={user.img} alt='UserProfile' className={classes.userimage} /> : <Gravatar default='mp' email={user.email} className={classes.userimage} /> : "" }
							</Button>

							<Menu
								style={{ marginTop: 55 }}
								id='menu-appbar'
								anchorEl={anchorProfile}
								transformOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								open={openProfile}
								onClose={handleProfileClose}
								disableAutoFocusItem
							>
								<MenuItem onClick={() => goToPage('profile')}>
									<AccountBoxIcon className={classes.usermenuIcon} />Min profil
								</MenuItem>
								<MenuItem onClick={() => goToPage('acount')}>
									<BusinessIcon className={classes.usermenuIcon} />Kontodetaljer
								</MenuItem>
								<MenuItem onClick={() => goToPage('settings')}>
									<SettingsIcon className={classes.usermenuIcon} />Indstillinger
								</MenuItem>
								<MenuItem onClick={() => { handleLogOut() }}>
									<PowerSettingsNew className={classes.usermenuIcon} />Log ud
								</MenuItem>
							</Menu>
						</div>
					</Toolbar>
				</AppBar>

				<SwipeableDrawer
					className={classes.drawer}
					classes={{ paper: classes.drawerPaper }}
					anchor="left"
					open={drawerOpen}
					onOpen={onOpenDrawer}
					onClose={toggleDrawer}
					BackdropProps={{ invisible: true }}
				>
					<div role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer} className={classes.drawerContainer}>
						<List>
							<ListItem button className={classes.drawerListItem} onClick={() => goToPage('dashboard')}>
								<ListItemIcon className={classes.drawerListIcon} style={{ marginLeft: 10 }}><BenchmarkIcon className={classes.drawerIcon} /></ListItemIcon>
								<ListItemText primary="Dashboard" style={{ marginLeft: -10 }} />
							</ListItem>
							<ListItem button className={classes.drawerListItem} onClick={() => goToPage('favorites')}>
								<ListItemIcon className={classes.drawerListIcon}><StarOutlinedIcon className={classes.drawerIcon} /></ListItemIcon>
								<ListItemText primary="Favoritter" />
							</ListItem>
							<ListItem button className={classes.drawerListItem} onClick={() => goToPage('users')}>
								<ListItemIcon className={classes.drawerListIcon}><PeopleIcon className={classes.drawerIcon} /></ListItemIcon>
								<ListItemText primary="Brugere" />
							</ListItem>
							<ListItem button className={classes.drawerListItem} onClick={() => goToPage('customers')}>
								<ListItemIcon className={classes.drawerListIcon}><BusinessIcon className={classes.drawerIcon} /></ListItemIcon>
								<ListItemText primary="Kunder" />
							</ListItem>
							<ListItem button className={classes.drawerListItem} onClick={() => goToPage('contact')}>
								<ListItemIcon className={classes.drawerListIcon}><EmailIcon className={classes.drawerIcon} /></ListItemIcon>
								<ListItemText primary="Kontakt" />
							</ListItem>
							<ListItem button className={classes.drawerListItem} onClick={() => goToPage('support')}>
								<ListItemIcon className={classes.drawerListIcon}><ContactSupportIcon className={classes.drawerIcon} /></ListItemIcon>
								<ListItemText primary="Support" />
							</ListItem>
							<ListItem button className={classes.drawerListItem} onClick={() => goToPage('policy')}>
								<ListItemIcon className={classes.drawerListIcon}><VerifiedUserIcon className={classes.drawerIcon} /></ListItemIcon>
								<ListItemText primary="Datapolitik" />
							</ListItem>
							<ListItem button className={classes.drawerListItem} onClick={() => goToPage('about')}>
								<ListItemIcon className={classes.drawerListIcon}><CopyrightIcon className={classes.drawerIcon} /></ListItemIcon>
								<ListItemText primary="Om Camro" />
							</ListItem>
						</List>
					</div>
					<div style={{ position: 'absolute', right: 30, bottom: 20, height: 100 }}>
						<a href="https://senti.io/" target="_new"><PoweredByIcon /></a>
					</div>
				</SwipeableDrawer>
			</div>

			<div className={classes.appBarSecondary}>
				<Grid container>
					<Grid container item xs={6}>
						<BarButton
							variant="contained"
							color="default"
							className={activeView === 'dashboard' ? classes.button : classes.dimmedButton}
							disableElevation
							startIcon={<MapIcon style={{ width: 30, height: 30 }} />}
							onClick={() => _onChangeView('dashboard')}
						>
							Kort
						</BarButton>
						<BarButton
							variant="contained"
							color="default"
							className={activeView === 'list' ? classes.button : classes.dimmedButton}
							disableElevation
							startIcon={<ListIcon style={{ width: 30, height: 30 }} />}
							onClick={() => _onChangeView('list')}
						>
							Liste
						</BarButton>
						<BarButton
							variant="contained"
							color="default"
							className={activeView === 'thumbs' ? classes.button : classes.dimmedButton}
							disableElevation
							startIcon={<ViewComfyIcon style={{ width: 30, height: 30 }} />}
							onClick={() => _onChangeView('thumbs')}
						>
							Miniaturer
						</BarButton>
					</Grid>
					<Grid container item xs={6} justify="flex-end">
						{filterIconShown ?
							<IconButton
								edge="start"
								className={hasFilters ? classes.filterButtonActive : classes.filterButton}
								onClick={toggleFilter}
							>
								<TuneIcon />
							</IconButton>
							: ""}
					</Grid>
				</Grid>
			</div>

			{filterBarShown ?
				<Fade in={filterBarShown} direction={'left'}>
					<div className={classes.filterBar}>
						<FilterToolbar
							reduxKey={'buildings'}
							filters={ft}
						/>
					</div>
				</Fade>
				: ""}
		</>
	);
}

export default Header;