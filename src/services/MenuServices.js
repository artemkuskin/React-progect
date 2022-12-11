import $api from "../http";


export default class MenuServices {
  static async fetchMenu() {
    return $api.get("/menu");
  }
}
