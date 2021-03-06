import { camroApi } from './api';

export const getBuildingsFromServer = async () => {
	let data = await camroApi.get('/buildings').then(rs => rs.data);
	return data;
}

export const getBuildingFromServer = async (uuid) => {
	let data = await camroApi.get('/building/' + uuid).then(rs => rs.data);
	return data;
}

export const getBuildingsSum = async (period, group) => {
	// console.log('/data/buildingssum/' + period.from.format('YYYY-MM-DD') + '/' + period.to.format('YYYY-MM-DD'));
	let data = await camroApi.get('/data/buildingssum/' + group + '/' + period.from.format('YYYY-MM-DD') + '/' + period.to.format('YYYY-MM-DD')).then(rs => rs.data);
	return data;
}

export const getBuildingsYearlyCo2ByGroup = async (group) => {
	//console.log('/data/yearlyco2/' + group);
	let data = await camroApi.get('/data/yearlyco2/' + group).then(rs => rs.data);
	return data;
}

export const getBuildingYearlyCo2 = async (uuid) => {
	// console.log('/data/buildingyearlyco2/' + uuid);
	let data = await camroApi.get('/data/buildingyearlyco2/' + uuid).then(rs => rs.data);
	return data;
}

export const getBuindingsBenchmark = async (buildingUuid, period) => {
	// console.log('/data/buildingbenchmark/' + period.from.format('YYYY-MM-DD') + '/' + period.to.format('YYYY-MM-DD'));
	let data = await camroApi.get('/data/buildingbenchmark/' + buildingUuid + '/' + period.from.format('YYYY-MM-DD') + '/' + period.to.format('YYYY-MM-DD')).then(rs => rs.data);
	return data;
}

export const getBuindingsScore = async () => {
	let data = await camroApi.get('/buildings/averageco2score').then(rs => rs.data);
	return data;
}

export const getDeviceDataFromServer = async (device, period, type) => {
	// console.log('/v1/devicedata-clean/' + device + '/' + period.from.format('YYYY-MM-DD HH:mm:ss') + '/' + period.to.format('YYYY-MM-DD HH:mm:ss') + '/' + type + '/-1');
	// var data = await databrokerApi.get('/v1/devicedata-clean/' + device + '/' + period.from.format('YYYY-MM-DD HH:mm:ss') + '/' + period.to.format('YYYY-MM-DD HH:mm:ss') + '/' + type + '/-1').then(rs => rs.data);
	var data = await camroApi.get('/data/deviceemission/' + device + '/' + type + '/' + period.from.format('YYYY-MM-DD') + '/' + period.to.format('YYYY-MM-DD')).then(rs => rs.data);
	return data;
}

export const getDeviceEmissionStatsFromServer = async (device, period, type) => {
	var data = await camroApi.get('/data/deviceemissionstats/' + device + '/' + type + '/' + period.from.format('YYYY-MM-DD') + '/' + period.to.format('YYYY-MM-DD')).then(rs => rs.data);
	return data;
}

export const getBuildingImage = async (uuid, filename) => {
	var data = await camroApi.get('/building/' + uuid + '/image/' + filename).then(rs => rs.data);
	return data;
}

export const getBuildingImageWithSize = async (uuid, filename, size) => {
	var data = await camroApi.get('/building/' + uuid + '/image/' + filename + '/' + size).then(rs => rs.data);
	return data;
}

export const getBuildingUsage = async (uuid) => {
	var data = await camroApi.get('/data/buildingusage/' + uuid).then(rs => rs.data);
	return data;
}

export const getBuildingEmissionToDate = async (uuid) => {
	var data = await camroApi.get('/data/buildingemissiontodate/' + uuid).then(rs => rs.data);
	return data;
}

export const getCurrentResultFromServer = async (group) => {
	var data = await camroApi.get('/data/actualresult/' + group).then(rs => rs.data);
	return data;
}
