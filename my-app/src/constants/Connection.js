import { environment as PATH } from "./app-config";

const httpUrl = `${window.location.protocol}//${PATH.LOCAL_API_URL}`;

class Connection {
  static getResturl(url) {
    return `${httpUrl}/${url}`;
  }
  static getBaseUrl() {
    return httpUrl;
  }
}

export default Connection;
