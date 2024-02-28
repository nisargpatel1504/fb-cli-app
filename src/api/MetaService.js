import axios from "axios";
import { metaApi } from "../config/index.js";
import Logger from "../utils/logger.js";

class MetaService {
  constructor(accessToken) {
    this.accessToken = accessToken;
    this.baseUrl = metaApi.baseUrl;
  }

  async fetchUserData() {
    try {
      const response = await axios.get(`${this.baseUrl}/me`, {
        params: {
          fields: "id,name,last_name",
          access_token: this.accessToken,
        },
      });

      return response.data;
    } catch (error) {
      Logger.error(`Error fetching data from Meta API: ${error.message}`);
      throw error;
    }
  }
}

export default MetaService;
