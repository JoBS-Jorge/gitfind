import { useState } from 'react'
import { Header } from '../../components/Header'
import background from '../../assets/background.png'
import ItemList from '../../components/ItemList'
import './styles.css'

function App() {
  const [user, setUser] = useState('')
  const [currentUser, setCurrentUser] = useState(null)
  const [repos, setRepos] = useState(null)
  
  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`)
    const newUser = await userData.json()

    if (newUser.name){
      const {avatar_url, name,login, bio} = newUser
      setCurrentUser({avatar_url, name, login, bio})
    
      const reposData = await fetch(`https://api.github.com/users/${user}/repos`)
      const newRepos = await reposData.json()
  
      if(newRepos !== null){
        setRepos(newRepos)
        console.log(repos.lenght)
      }
    }
  }

  return (
    <div className="App">
      <Header/>
        <div className='content'>
          <img src={background} className='background-img' alt="background image"/> 
          <div className='content__info'>
            <div>
              <input name="usuario" value={user} onChange={event => setUser(event.target.value)} className="search__bar" placeholder="@username"/>

              <button className='search__button' onClick={handleGetData}>Buscar</button>
            </div>

            {currentUser?.name ? (
              <div>
                <div className='main-card'>
                  <img src={currentUser.avatar_url} className='main-card__img' alt='imagem do perfil'/>

                  <div className='main-card__info'>
                    <h3>{currentUser.name}</h3>
                    <span> {currentUser.login} </span>
                    <p> {currentUser.description} </p>
                  </div>
                </div>
                <br />
                <hr />
              </div> 

            ) : null}   
            
            {repos !== null ? (
               <div className='repositorios__content'>
                <h1>Repositórios</h1>
                {repos.map(repo => (
                 <ItemList title={repo.name} description={repo.description}/>

                ))}
              </div> 
            ) : null}
            

          </div>
        </div>
    </div>
  );
}

export default App
