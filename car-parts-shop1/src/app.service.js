import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000'

const appService = {
  getCarParts () {
    axios.get(`/api/carParts`).then(response => {
      // eslint-disable-next-line no-undef
      resolve(response.data)
    })
  }
}

export default appService
