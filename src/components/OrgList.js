import React, { useState, useEffect } from 'react';
import { Hidden, Table, TableBody, TableRow, IconButton } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useSelector, useDispatch } from 'react-redux';

import tableStyles from 'styles/tableStyles';
import TC from './table/TC';
import TableHeader from './table/TableHeader';
import TablePager from './table/TablePager';
// import { customFilterItems } from 'variables/filters';
import { getOrgsData, setFavorites } from 'redux/user';
import CircularLoader from 'components/CircularLoader';
import { putUserInternal } from 'data/coreApi';
import { changeMainView, changeHeaderTitle, toogleFilterIcon, closeFilterBar } from 'redux/appState';
import { handleRequestSort } from 'variables/functions';

const UserList = () => {
	const [page, setPage] = useState(0);
	const [order, setOrder] = useState('asc');
	const [orderBy, setOrderBy] = useState('name');

	// const filters = useSelector(s => s.appState.filters.orgs)
	const classes = tableStyles();
	const rowsPerPage = useSelector(s => s.appState.trp ? s.appState.trp : s.settings.trp)
	const loading = useSelector(s => s.user.loading);
	const user = useSelector(s => s.user.user);
	const orgs = useSelector(s => s.user.orgs);
	// const orgsFiltered = customFilterItems(orgs, filters);
	const favorites = useSelector(s => s.user.favorites);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(closeFilterBar());
		dispatch(toogleFilterIcon(false));
		dispatch(changeMainView(''));
		dispatch(changeHeaderTitle('Kunder'));
		dispatch(getOrgsData());
	}, [dispatch]);

	const handleRequestSortFunc = (event, property, way) => {
		let newOrder = way ? way : order === 'desc' ? 'asc' : 'desc';
		if (property !== orderBy) {
			newOrder = 'asc';
		}
		handleRequestSort(property, order, orgs);
		setOrder(newOrder);
		setOrderBy(property);
	}

	const handleChangePage = (event, newpage) => {
		setPage(newpage);
	}

	const handleFavorite = async (event, uuid) => {
		event.stopPropagation();

		if (!user.internal) {
			user.internal = {};
		}

		if (!user.internal.camro) {
			user.internal.camro = {};
		}

		if (!user.internal.camro.favorites) {
			user.internal.camro.favorites = [];
		}

		let newFavorites = [...favorites];

		if (!newFavorites.filter(favorite => favorite.uuid === uuid).length) {
			newFavorites.push({ uuid: uuid, type: 'org' });
		} else {
			newFavorites = newFavorites.filter(favorite => favorite.uuid !== uuid);
		}

		user.internal.camro.favorites = newFavorites;

		let data = await putUserInternal(user.uuid, user.internal);
		if (data) {
			dispatch(setFavorites(newFavorites));
		}
	}

	const columnNames = [
		{ id: 'favorite', label: '' },
		{ id: 'name', label: 'Navn' },
		{ id: 'address', label: 'Adresse' },
		{ id: 'zip', label: 'Postnummer' },
		{ id: 'zity', label: 'By' },
		{ id: 'website', label: 'Hjemmeside' },
	]

	return (
		<>
			{!loading ?
				<>
					<Table className={classes.table} aria-labelledby='tableTitle'>
						<TableHeader
							order={order}
							orderBy={orderBy}
							noCheckbox
							onRequestSort={handleRequestSortFunc}
							rowCount={orgs ? orgs.length : 0}
							columnData={columnNames}
							numSelected={0}
						/>
						<TableBody>
							{orgs ? orgs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(org => {
								return (
									<TableRow
										hover
										// onClick={() => handleRowClick(building.uuid)}
										role='checkbox'
										tabIndex={-1}
										key={org.uuid}
										//style={{ cursor: 'pointer' }}
										className={classes.tableRow}
									>
										<Hidden mdDown>
											<TC width="50" align="center" content={
												<IconButton onClick={(event) => handleFavorite(event, org.uuid)}>
													{favorites && favorites.filter(favorite => favorite.uuid === org.uuid).length ? <StarIcon style={{ color: '#90999E' }} /> : <StarBorderIcon />}
												</IconButton>
											} />
											<TC label={org.name} />
											<TC label={org.address} />
											<TC label={org.zip} />
											<TC label={org.city} />
											<TC label={org.website} />
										</Hidden>
									</TableRow>
								)
							}) : null}
						</TableBody>
					</Table>
					<TablePager
						count={orgs ? orgs.length : 0}
						page={page}
						handleChangePage={handleChangePage}
					/>
				</>
				: <CircularLoader fill />}
		</>
	)
}

export default UserList;
