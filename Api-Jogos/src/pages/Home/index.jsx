import './style.css'
import Trash from '../../assets/trash.svg'

function Home() {
  
const users = [
  {
    id: 89517899,
    email: 'luckas01@gmail.com',
    name: 'Luckas Hernandes',
    state: 'Mato Grosso',
    city: 'Cuiabá',
    age: 30
  },
] 

  return (
    
      <div className='container'>
        <form>
          <h1> Cadastro de Usuários</h1>
          <input placeholder="Nome" name='nome' type='text'/>
          <input placeholder="Email" name='email' type='email'/>
          <input placeholder="Estado" name='state' type='text'/>
          <input placeholder="Cidade" name='city' type='text'/>
          <input placeholder="Idade" name='age' typer='number'/>
          <button type='button'>Cadastrar</button>
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
        <button>
          <img src={Trash} className="trash-icon"/>
        </button>
        </div>
        
        ))} 
      </div>  
  )
}

export default Home
