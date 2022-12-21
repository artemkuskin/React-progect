import $api from "../http";

export default class OrderService {
  static async order(elem) {
    return $api.post("/order", elem);
  }

  static async getOrder() {
    return $api.get("/getOrders");
  }
}
