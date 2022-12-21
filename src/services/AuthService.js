import $api from "../http";

export default class AuthServices {
  static async login(email, password) {
    return $api.post("/auth/login", { email, password });
  }

  static async registration(email, password) {
    return $api.post("/auth/registration", { email, password });
  }

}
