import { BaseAPI } from "api/baseAPI";
import { sleep } from "helper/sleep";
import { localstorageConfig } from "config";

class AuthAPI extends BaseAPI {
  BASE_URL = "/auth";

  async login(username: string) {
    await sleep();
    localStorage.setItem(localstorageConfig.keys.AUTH_USERNAME, username);
    return { username, token: "" };
  }

  async getMe() {
    await sleep();
    const username = localStorage.getItem(localstorageConfig.keys.AUTH_USERNAME);
    if (username) {
      return { username };
    }
    return null;
  }

  async logout() {
    await sleep();
    localStorage.removeItem(localstorageConfig.keys.AUTH_USERNAME);
  }
}

export const authAPI = new AuthAPI();
