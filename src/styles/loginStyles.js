import { makeStyles } from '@material-ui/styles';

const loginStyles = makeStyles(theme => ({
	root: {
		height: '100vh',
	},
	loginWrapper: {
		textAlign: 'center',
	},
	topwrapper: {
		width: '100%',
		height: '85vh',
	},
	bottomwrapper: {
		width: '100%',
		height: '15vh',
		paddingLeft: '30px',
		paddingRight: '30px',
	},
	loginImage: {
		background: 'linear-gradient(180deg, #0D5E34 0%, #16874D 100%)',
	},
	logo: {
		textAlign: 'center',
		marginTop: '80px',
		maxWidth: '400px'
	},
	header: {
		marginTop: '50px',
		fontFamily: 'Helvetica',
		fontSize: '20px',
		lineHeight: '23px',
		textTransform: 'uppercase',
		color: '#000000',
		paddingLeft: '20px',
		paddingRight: '20px',
	},
	needaccount: {
		marginTop: '50px',
		fontSize: '17px',
		lineHeight: '20px',
		color: '#000000'
	},
	forgotpassword: {
		marginTop: '30px',
		fontSize: '17px',
		lineHeight: '20px',
	},
	textfield: {
		width: '80%',
		marginTop: '20px'
	},
	button: {
		width: '80%',
		height: '50px',
		marginTop: '20px',
		fontSize: '18px',
		color: '#fff',
	},
	copyright: {
		alignItems: 'flex-end',
		color: '#979797',
		fontSize: '13px',
	},
	bottomLinksWrapper: {
		marginTop: '20px',
	},
	bottomLink: {
		color: '#979797',
		fontSize: '13px',
	},
	buttonWrapper: {
		position: 'relative',
	},
	buttonProgress: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginLeft: -12,
	},
}));

export default loginStyles;