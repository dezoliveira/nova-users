
import { useEffect, useState } from "react"
// import { loadUsers } from "../../hooks/loadUsers"
import styles from './index.module.css'

export default function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    loadUsers()
    // formatDate()
  }, [users])

  const loadUsers = async() => {
    try {    
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      const res = await fetch("https://randomuser.me/api/?results=20")
  
      if (!res.ok) {
        console.log('error')
      }
  
      const data = await res.json()

      const users = data.results

      console.log(users)
      
      setUsers(users)
  
    } catch (error) {
      console.log(error)
    }
  }

  const formatDate = (date) => {
    let newDate = new Date(date)
    newDate = newDate.toLocaleDateString()
    return newDate
  }

  return (
    <ul>
      {
        users && users.map((user) => (
          <li key={user.id.value !== null}>
            <div className={styles.card}>
              <div className={styles.logo}>
                <img
                  alt="user-profile"
                  src={user.picture.medium}
                  width="80"
                  height="80"
                />
              </div >
              <div className={styles.userBox}>
                <h3>{user.name.first} {user.name.last}</h3>
                <div className={styles.userInfo}>
                  <span>
                    <p>{user.gender}</p>
                  </span>
                  <span>
                    <p>{formatDate(user.dob.date)}</p>
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))
      }
      {!users && <><h1>Loading...</h1></>}
    </ul>
  )
}