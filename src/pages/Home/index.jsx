import { useEffect, useState, useRef } from 'react'
import './style.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'

function Home() {
const [users, setUsers] = useState([])

const inputName = useRef()
const inputAge = useRef()
const inputEmail = useRef()
const inputState = useRef()
const inputCity = useRef()

  async function getUsers(){
  const usersFromApi = await api.get('/usuarios')

 setUsers(usersFromApi.data)
}

async function createUsers(){
  await api.post('/usuarios', {
    name: inputName.current.value,
    age: inputAge.current.value,
    email: inputEmail.current.value,
    city: inputCity.current.value,
    state: inputState.current.value,
  })
  getUsers()
}

async function deleteUsers(id){
  await api.delete(`/usuarios/${id}`)

  getUsers()
}


useEffect(() => {
  getUsers()
}, [])

  return (
    
      <div className='container'>
        <form>
          <h1> Cadastro de Usuários</h1>
          <input placeholder="Nome" name="nome" type="text" ref={inputName}/>
          <input placeholder="Email" name="email" type="email" ref={inputEmail}/>
          <input placeholder="Estado" name="state" type="text" ref={inputState}/>
          <input placeholder="Cidade" name="city" type="text" ref={inputCity}/>
          <input placeholder="Idade" name="age" type="number" ref={inputAge}/>
          <button type="button" onClick={createUsers}>Cadastrar</button>
        </form>
        
        { users.map(user => (
          <div key={user.id} className="card">
        <div>
          <p>Nome: <span>{user.name}</span> </p>
          <p>Email: <span>{user.email}</span> </p>
          <p>Estado: <span>{user.state}</span> </p>
          <p>Cidade: <span>{user.city}</span> </p>
          <p>Idade: <span>{user.age}</span> </p>
        </div>
        <button onClick={() => deleteUsers(user.id)}>
          <img src={Trash} className="trash-icon"/>
        </button>
        </div>
        
        ))} 
      </div>  
  )
}

export default Home
