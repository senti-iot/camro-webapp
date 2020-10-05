import { fade, makeStyles } from '@material-ui/core/styles';

const mainStyles = makeStyles(theme => ({
	root: {
		height: '100vh',
	},
	appBackground: {
		marginTop: 40,
		marginLeft: 40,
		marginRight: 40,
		marginBottom: 40,
		minHeight: 'calc(100vh - 75px - 60px - 90px - 60px)',
		// overflowX: 'hidden',
	},
	appBarWrapper: {
		display: 'flex',
	},
	appBarPrimary: {
		background: 'linear-gradient(180deg, rgba(229, 229, 229, 0.62) -9.03%, rgba(245, 245, 245, 0.62) 19.62%, rgba(245, 245, 245, 0.62) 22.22%, rgba(255, 255, 255, 0.62) 40.97%, rgba(249, 249, 249, 0.62) 61.28%, rgba(229, 229, 229, 0.62) 90.97%) !important',
		zIndex: theme.zIndex.drawer + 1,
		height: 75,
		paddingTop: 5,
	},
	appBarSecondary: {
		backgroundColor: '#0D5E34 !important',
		width: '100%',
		height: 60,
	},
	menuButton: {
		marginRight: theme.spacing(2),
		color: '#89BB41 !important',
	},
	logoContainer: {
		marginRight: theme.spacing(2),
	},
	logo: {
		maxWidth: '150px',
		marginLeft: 20,
	},
	appbarTitle: {
		fontSize: '20px !important',
		flexGrow: 1,
		color: '#2A5C38',
		fontWeight: '400 !important',
		paddingLeft: 100,
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.85),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.50),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '240px',
		// [theme.breakpoints.up('sm')]: {
		// 	marginLeft: theme.spacing(3),
		// 	width: 'auto',
		// },
	},
	searchIcon: {
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		paddingLeft: '10px',
		color: '#979797',
	},
	searchInputRoot: {
		color: '#797979 !important',
	},
	searchInput: {
		width: '100%',
		paddingLeft: '40px !important',
		color: '#797979 !important',
	},
	notificationsBadge: {
		backgroundColor: '#E54C2A !important',
		color: '#fff !important',
	},
	notificationsIcon: {
		color: '#89BB41 !important',
	},
	username: {
		fontFamily: 'Roboto, sans-serif',
		float: 'left',
		color: '#89BB41',
		fontSize: 16,
		marginTop: 18,
		marginLeft: 20,
		userSelect: 'none'
	},
	userimage: {
		float: 'left',
		borderRadius: '50%',
		height: 45,
		width: 45,
	},
	usermenuIcon: {
		marginRight: 10,
	},
	filterButton: {
		color: '#fff !important',
	},
	filterButtonActive: {
		width: 40,
		height: 40,
		marginTop: '10px !important',
		marginRight: '4px !important',
		color: '#fff !important',
		backgroundColor: '#D1D7DA !important',
	},
	dimmedButton: {
		color: '#afbdc9 !important'
	},
	footer: {
		width: '100%',
		height: 90,
		background: 'linear-gradient(180deg, #F4F4F4 0%, #FFFFFF 44.27%, #F7F7F7 100%)',
		paddingLeft: 60,
		paddingTop: 25,
	},
	drawer: {
		flexShrink: 0,
		width: 250,
	},
	drawerPaper: {
		color: '#fff !important',
		backgroundColor: "#525B60 !important",
		width: 250,
		top: '75px !important',
	},
	drawerContainer: {
		overflow: 'auto',
	},
	drawerListItem: {
		marginBottom: '10px !important',
	},
	drawerListIcon: {
		minWidth: '40px !important',
	},
	drawerIcon: {
		color: '#fff !important',
		fontSize: '30px !important',
	},
	newContent: {
		background: '#ff9800 !important',
	},
	refreshButton: {
		color: '#ffffff !important',
	},
	currentResultWrapper: {
		display: 'flex',
		alignItems: 'center',
	},
	currentResultArrow: {
		marginLeft: 15,
	},
	filterBar: {
		padding: 4,
		paddingLeft: 40,
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		height: 67,
		backgroundColor: '#33434B',
	},
	overviewWelcome: {
		maxWidth: '50%',
		[theme.breakpoints.down('lg')]: {
			maxWidth: '80%',
		},
	},
}));

export default mainStyles;