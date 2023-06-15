import axios from "axios";

export const BASE_URL = 'https://www.rijksmuseum.nl/api/en/collection?key=a7LmWCcH';
const DETAILS_URL = 'https://www.rijksmuseum.nl/api/nl/collection/';

export const getCatalog = (num):number => (
	axios({
		method: 'get',
		url: `${ BASE_URL }&ps=10&p=${num}`,
		responseType: 'json',
	})
	.then(res => res?.data?.artObjects)
	.catch(() => [])
);

export const catalogDetails = (id):string => (
  axios({
    method: 'get',
    url: `${DETAILS_URL}${id}?key=a7LmWCcH`,
    responseType: 'json'
  })
);
