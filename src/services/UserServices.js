import $api from "../http";

export default class UserServices {
  static async fetchUsers() {
    return $api.get("/users");
  }
}
