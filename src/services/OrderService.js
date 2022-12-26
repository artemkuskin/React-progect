import $api from "../http";

export default class OrderService {
  static async order(elem) {
    return $api.post("/order", elem);
  }

  static async getOrder(params) {
    return $api.get(`/getOrders?limit=${params.limit}&page=${params.page}`, );
  }
}
