import { axiosClient } from "api/axiosClient";

const REQUEST_TIMEOUT = 2 * 60 * 1000;

export abstract class BaseAPI {
  abstract BASE_URL: string;

  protected async get<T>(url: string): Promise<T> {
    return await axiosClient({
      method: "GET",
      url: `${this.BASE_URL}/${url}`,
      timeout: REQUEST_TIMEOUT,
      withCredentials: true,
    });
  }

  protected async post<T, U>(url: string, body: T): Promise<U> {
    return await axiosClient({
      method: "POST",
      url: `${this.BASE_URL}/${url}`,
      data: body,
      timeout: REQUEST_TIMEOUT,
      withCredentials: true,
    });
  }

  protected async put<T, U>(url: string, body: T): Promise<U> {
    return await axiosClient({
      method: "PUT",
      url: `${this.BASE_URL}/${url}`,
      data: body,
      timeout: REQUEST_TIMEOUT,
      withCredentials: true,
    });
  }

  protected async patch<T, U>(url: string, body: T): Promise<U> {
    return await axiosClient({
      method: "PATCH",
      url: `${this.BASE_URL}/${url}`,
      data: body,
      timeout: REQUEST_TIMEOUT,
      withCredentials: true,
    });
  }

  protected async _delete(url: string): Promise<void> {
    return await axiosClient({
      method: "DELETE",
      url: `${this.BASE_URL}/${url}`,
      timeout: REQUEST_TIMEOUT,
      withCredentials: true,
    });
  }
}
