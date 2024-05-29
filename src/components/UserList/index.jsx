// styles
import styles from './index.module.css'

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCakeCandles, faMars, faVenus } from '@fortawesome/free-solid-svg-icons'

// utils
import formatDate from "../../utils"

// react
import { useEffect, useState } from "react"

// components
import SearchBar from "../SearchBar"
import Spinner from "../Spinner"

export default function UsersList({ handleModal }) {
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [results, setResults] = useState(20)
  const [spinner, setSpinner] = useState(false)

  useEffect(() => {
    loadUsers()
  }, [results])

  // load random users
  const loadUsers = async() => {
    try {    
      const res = await fetch(`https://randomuser.me/api/?results=${results}`)
  
      if (!res.ok) {
        console.log('error')
      }
  
      const data = await res.json()

      const users = data.results

      setSpinner(false)
      setUsers(users)
      setFilteredUsers(users)

      console.log(users)
  
    } catch (error) {
      console.log(error)
    }
  }

  // call modal (passing data)
  const toggleModal = (e, user) => {
    handleModal(e, user)
  }

  // handle search in input
  const handleSearch = (e) => {
    e.preventDefault()
    
    const newUsers = users.filter((user) => {
      const fullName = `${user.name.first} ${user.name.last}`

      return fullName.includes(e.target.value)
    })

    setFilteredUsers(newUsers)

  }

  // infinity scrool
  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight

    if (bottom) {
      setResults(results + 20)
      setSpinner(true)
    }
  }
  
  return (
    <>
      {/* component search bar */}
      <SearchBar
        handleSearch={handleSearch}
        value={filteredUsers}
      />

      {/* infinity scrool */}
      <ul onScroll={handleScroll}>
        {
          filteredUsers && filteredUsers.map((user) => (
            // user list item
            <li key={user.login.uuid}>
              <div className={styles.card} onClick={(e) => toggleModal(e, user)}>
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
                    <span className={styles.gender}>
                      {user.gender == "male" ?
                        <FontAwesomeIcon icon={faMars} className={styles.male} />
                      : <FontAwesomeIcon icon={faVenus} className={styles.female}/>
                      }
                      <p>{user.gender}</p>
                    </span>
                    <span className={styles.birthday}>
                      <FontAwesomeIcon icon={faCakeCandles} className={styles.cake}/>
                      <p>{formatDate(user.dob.date)}</p>
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))
        }
        {/* spinner */}
        {spinner && <><Spinner text={"Carregando Mais"}/></>}
      </ul>
    </>
  )
}