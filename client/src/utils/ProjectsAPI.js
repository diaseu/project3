import axios from 'axios'
const localStorage = window.localStorage

const ProjectsAPI = {
  showAll: () => axios.get('/api/projects'),
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

export default ProjectsAPI
