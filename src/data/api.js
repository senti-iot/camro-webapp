import { create } from 'apisauce';
import cookie from 'react-cookies';
import crypto from 'crypto';

const { REACT_APP_ENCRYPTION_KEY } = process.env
const IV_LENGTH = 16

const encrypt = (text) => {
	let iv = crypto.randomBytes(IV_LENGTH)
	let cipher = crypto.createCipheriv('aes-256-cbc', new Buffer.from(REACT_APP_ENCRYPTION_KEY), iv)
	let encrypted = cipher.update(text)

	encrypted = Buffer.concat([encrypted, cipher.final()])

	return iv.toString('hex') + ':' + encrypted.toString('hex')
}

const backendHost = 'https://services.senti.cloud/core';
const databrokerHost = 'https://services.senti.cloud/databroker';
const camroBackendHost = 'https://camro.senti.cloud';

export const coreApi = create({
	baseURL: backendHost,
	timout: 30000,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
});

export const databrokerApi = create({
	baseURL: databrokerHost,
	timeout: 30000,
	headers: {
		'auth': encrypt(process.env.REACT_APP_ENCRYPTION_KEY),
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	}
});

export const weatherApi = create({
	baseURL: `https://api.senti.cloud/weather/v1/`,
	timeout: 30000,
	headers: {
		'auth': encrypt(process.env.REACT_APP_ENCRYPTION_KEY),
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Cache-Control': 'public, max-age=864000'
	}
});

export const camroApi = create({
	baseURL: camroBackendHost,
	timeout: 30000,
	headers: {
		'auth': encrypt(process.env.REACT_APP_ENCRYPTION_KEY),
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	}
});

export const setToken = () => {
	try {
		let token = cookie.load('SESSION').token;
		coreApi.setHeader('Authorization', 'Bearer ' + token);
		databrokerApi.setHeader('Authorization', 'Bearer ' + token);
		camroApi.setHeader('Authorization', 'Bearer ' + token);
		weatherApi.setHeader('Authorization', 'Bearer ' + token);
		return true;
	} catch (error) {
		return false;
	}
};

export const setHeaders = () => {
	coreApi.setHeader('wlHost', window.location.hostname);
	databrokerApi.setHeader('wlHost', window.location.hostname);
	camroApi.setHeader('wlHost', window.location.hostname);
	weatherApi.setHeader('wlHost', window.location.hostname);
};

setToken();
setHeaders();
