import React, { useEffect,  } from 'react';
import moment from 'moment';
import { Grid, Typography, Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

// import OverviewCurrentResult from './OverviewCurrentResult';
// import OverviewBarGraph from './OverviewBarGraph';
// import OverviewEnergyGraph from 'components/Overview/OverviewEnergyGraph';
import CircularLoader from 'components/CircularLoader';
import mainStyles from 'styles/mainStyles';
import { changeMainView, changeHeaderTitle, toogleFilterIcon } from 'redux/appState';

const Overview = props => {
	const dispatch = useDispatch();
	const user = useSelector(s => s.user.user);
	const buildings = props.buildings;
	const classes = mainStyles();

	useEffect(() => {
		dispatch(changeMainView('dashboard'));
		dispatch(changeHeaderTitle('Dashboard'));
		dispatch(toogleFilterIcon(false));
	}, [dispatch]);

	const getWelcomeTime = () => {
		let string = "";
		const hour = moment().hour();

		if (hour >= 0 && hour < 6) {
			string = "God nat";
		} else if (hour >= 6 && hour < 9) {
			string = "God morgen";
		} else if (hour >= 9 && hour < 12) {
			string = "God formiddag";
		} else if (hour >= 12 && hour < 14) {
			string = "God middag";
		} else if (hour >= 14 && hour < 18) {
			string = "God eftermiddag";
		} else if (hour >= 18 && hour <= 23) {
			string = "God aften";
		}

		return string;
	}

	return (
		<>
			{user && buildings ?
				<Grid container spacing={5}>
					<Grid item xs={12} lg={7}>
						<Box className={classes.overviewWelcome}>
							<Typography variant="h3" style={{ color: '#000', marginBottom: 20, textTransform: 'uppercase' }}>{getWelcomeTime()} {`${user.firstName}`}</Typography>
							<Typography variant="body2" style={{ fontSize: '1.2rem' }}>Brug kortet for at finde lokationen og aflæse tilstanden på dine Camro SAFEBOX. Du kan også gå direkte til en SAFEBOX enhed via listen herunder.</Typography>
						</Box>
					</Grid>
					{/* <Grid item xs={12} lg={5}>
						<OverviewCurrentResult group={selectedGroup} />
					</Grid>
					<Grid item xs={12} lg={7} xl={7} style={{ display: 'flex' }}>
						<OverviewBarGraph buildings={buildings} group={selectedGroup} />
					</Grid>
					<Grid item xs={12} lg={5} xl={5} style={{ display: 'flex' }}>
						<OverviewEnergyGraph buildings={buildings} group={selectedGroup} />
					</Grid> */}
				</Grid>
				: <CircularLoader fill style={{ marginTop: 500 }} />}
		</>
	)
}

export default Overview;
