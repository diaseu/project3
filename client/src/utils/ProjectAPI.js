import axios from 'axios'
const localStorage = window.localStorage

const Project = {
  getById: id => axios.get(`/api/users/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),
  create: project => axios.post('/api/posts', project, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),
  update: (project, id) => axios.put(`/api/projects/${id}`, project, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),
  delete: id => axios.delete(`/api/projects/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),
  addMember: (id, member) => axios.put(`/api/projects/${id}/addMember`, member, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
}

export default Project