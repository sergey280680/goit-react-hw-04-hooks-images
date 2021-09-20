import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const KEY = "22022827-e7833ac6793c04553f9ed3424";
const PER_PAGE = 12;

axios.defaults.baseURL = BASE_URL;
// axios.defaults.headers.common.Authorization = KEY;

async function fetchImages({ page = 1, query } = {}) {
  let queryParams = `?q=${query}&key=${KEY}&page=${page}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`;
  try {
    const data = await axios.get(`${queryParams}`);
    return data;
  } catch (error) {
    console.error(error);
  }
}
export { fetchImages };
