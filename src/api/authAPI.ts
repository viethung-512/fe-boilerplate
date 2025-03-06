import { BaseAPI } from "api/baseAPI";
import { sleep } from "helper/sleep";
import { localstorageConfig } from "config";
import { LoginInput, LoginOutput } from "types/auth.type";

class AuthAPI extends BaseAPI {
  BASE_URL = "/auth";

  async login(input: LoginInput): Promise<LoginOutput> {
    const { username } = input;
    await sleep();

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
