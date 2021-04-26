import axios from "axios";

const BASE_URL = "https://dev.to/api/articles?username=sanspanic";

class devAPI {
  static async getArticles() {
    try {
      const res = await axios.get(BASE_URL);
      return res.data;
    } catch (err) {
      throw err;
    }
  }
}

export default devAPI;
