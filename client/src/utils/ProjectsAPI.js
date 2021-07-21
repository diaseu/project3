import axios from 'axios'
const localStorage = window.localStorage

const Projects = {
  show: () => axios.get('/api/projects', {
    
  }),
  login: user => axios.post('/api/users/login', user),
  me: () => axios.get('/api/users/me', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),
  profile: username => axios.get(`/api/users/${username}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
}

export default Projects
