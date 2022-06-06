import http from "../http-common";

class InventoryDataService {
  getAll(page = 0) {
    return http.get(`inventarios?page=${page}`);
  }

  get(id) {
    return http.get(`/inventario?id=${id}`);
  }

  find(query, by = "status", page = 0) {
    return http.get(`inventarios?${by}=${query}&page=${page}`);
  } 

  createRuta(data) {
    return http.post("/ruta-new", data);
  }

  updateRuta(data) {
    return http.put("/ruta-edit", data);
  }

  deleteRuta(id, userId) {
    return http.delete(`/ruta-delete?id=${id}`, {data:{user_id: userId}});
  }

  getEspecies(id) {
    return http.get(`/especies`);
  }

}

export default new InventoryDataService();