import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "22022827-e7833ac6793c04553f9ed3424";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: "photo",
  orientation: "horizontal",
  per_page: 12,
};

async function fetchImages({ page = 1, query } = {}) {
  try {
    const data = await axios.get("", {
      params: {
        page,
        q: query,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}
export { fetchImages };
