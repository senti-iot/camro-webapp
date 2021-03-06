import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#89BB41',
		}, secondary: {
			main: '#2A5C38',
		},
	},
	typography: {
		h2: {
			fontSize: '3.8rem',
			fontWeight: 'bold',
		},
		h3: {
			fontSize: '1.8rem',
		},
		h4: {
			fontSize: '1.6rem',
		},
		h5: {
			fontSize: '1.2rem',
		},
		h6: {
			fontSize: '1rem',
		},
		caption: {
			fontSize: '1rem',
			color: 'rgba(0, 0, 0, 0.54)',
		},
		body2: {
			color: '#000',
			fontSize: '1.1rem',
		},
	},
});

export default theme;
