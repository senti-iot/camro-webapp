import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const BarButton = withStyles(() => ({
	root: {
		fontSize: 16,
		textTransform: 'none',
		color: '#fff',
		height: 60,
		backgroundColor: 'transparent',
		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
}))(Button);

export default BarButton;
