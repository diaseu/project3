import axios from 'axios'
const localStorage = window.localStorage

const Issue = {
  getById: id => axios.get(`/api/issues/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),
  create: issue => axios.post('/api/issues', issue, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),
  update: issue => axios.put('/api/issues', issue, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
}

export default Issue