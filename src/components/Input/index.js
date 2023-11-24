import { useState } from 'react'
import './styles.css'

const Input = () => {
  const [user, setUser] = useState('')

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`)
    const newUser = await userData.json()
    console.log(newUser)
  }

  return (
    <div>
        <input name="usuario" value={user} onChange={event => setUser(event.target.value)} className="search__bar" placeholder="@username"/>

        <button className='search__button' onClick={handleGetData}>Buscar</button>
    </div>
        
  )
}

export {Input }