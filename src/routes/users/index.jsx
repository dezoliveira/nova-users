
import { useEffect, useState } from "react"
// import { loadUsers } from "../../hooks/loadUsers"
import styles from './index.module.css'
import Loading from "../../components/Loading"
import Modal from "../../components/Modal"

import formatDate from "../../utils"

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCakeCandles, faMars, faVenus } from '@fortawesome/free-solid-svg-icons'
import Card from "../../components/Card"

export default function Users() {
  const [users, setUsers] = useState([])
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async() => {
    setLoading(true)
    try {    
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      const res = await fetch("https://randomuser.me/api/?results=20")
  
      if (!res.ok) {
        console.log('error')
      }
  
      const data = await res.json()

      const users = data.results

      console.log(users)
      setLoading(false)
      setUsers(users)
  
    } catch (error) {
      console.log(error)
    }
  }

  const handleModal = (e, user) => {
    e.preventDefault()
    setUserData(user)

    document.body.style.overflowY = 'hidden'
    setShowModal(true)
  }

  const closeModal = (value) => {
    setShowModal(value)
    document.body.style.overflowY = 'auto'
  }

  return (
    <>
      {
        showModal && (
          <Modal closeModal={closeModal}
          >
            <Card data={userData}/>
          </Modal>
        )
      }
      <ul>
        {
          users && users.map((user) => (
            <li key={user.id.value ? user.id.value : user.email}>
              <div className={styles.card} onClick={(e) => handleModal(e, user)}>
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
        {loading && <><Loading>Loading...</Loading></>}
      </ul>
    
    </>
  )
}