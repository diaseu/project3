import axios from 'axios'
const localStorage = window.localStorage

const User = {
  showMine: () => axios.get('/api/users/me', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),
  login: user => axios.post('/api/users/login', user),
  me: () => axios.get('/api/users/me', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),
  create: post => axios.post('/api/projects/', post, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
}

export default User
