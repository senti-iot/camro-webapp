import React from 'react';
import { ButtonBase } from '@material-ui/core';
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux';

import mainStyles from 'styles/mainStyles';
import logo from 'assets/logo.svg';
import { changeHeaderTitle, changeMainView } from 'redux/appState';

const Footer = () => {
	const classes = mainStyles();
	const history = useHistory();
	const dispatch = useDispatch();

	const handleLogoClick = () => {
		dispatch(changeMainView('dashboard'));
		dispatch(changeHeaderTitle('Dashboard'));

		history.push('/');
	}

	return (
		<div className={classes.footer}>
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
		</div>
	);
}

export default Footer;
