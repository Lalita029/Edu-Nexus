const configuredApiUrl = import.meta.env.VITE_API_URL;
const API_URL = (configuredApiUrl || (import.meta.env.PROD
	? 'https://edu-nexus-r2s2.onrender.com'
	: '')).replace(/\/$/, '');

export const apiFetch = (path, options) => fetch(`${API_URL}${path}`, options);

export const readApiJson = async (response, fallbackMessage) => {
	const responseText = await response.text();

	if (!responseText.trim()) {
		return { message: fallbackMessage };
	}

	try {
		return JSON.parse(responseText);
	} catch {
		return { message: fallbackMessage };
	}
};

export default API_URL;