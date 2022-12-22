import $api from "../http";

export default class Serach {
  static async getSearchElem(elem) {
    return $api.get("/searchProduct", elem);
  }
}