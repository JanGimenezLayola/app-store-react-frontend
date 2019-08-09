import axios from "axios";

class AppStoreService {
  constructor() {
    this.appStore = axios.create({
      baseURL: 'http://localhost:4000/api'
    })
  }

  getAllApps() {
    this.appStore.get('/apps')
    .then(response => response)
  };

  addOneApp(newApp) {
    return this.appStore.post('/apps/new', newApp)
    .then(response => response)
  };

  updateOneApp(id, updatedApp) {
    return this.appStore.put(`/apps/${id}/update`, updatedApp)
    .then(response => response)
  };

  deleteOneApp(id, deletedApp) {
    return this.appStore.delete(`/apps/${id}/delete`, deletedApp)
    .then(response => response)
  };

}