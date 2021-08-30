import { API_URL } from './configs';

export const getJoke = route => fetch(`${API_URL}/${route}`)
  .then(res => res.json());

export const getCategories = () => fetch(`${API_URL}/categories`)
  .then(res => res.json());
