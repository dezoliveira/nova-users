
// import { useEffect, useState } from "react"
// import styles from './index.module.css'
// import Loading from "../../components/Loading"
import { useState } from "react"
import Modal from "../../components/Modal"
import UsersList from "../../components/UserList"
import Card from "../../components/Card"

// import formatDate from "../../utils"

//font awesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCakeCandles, faMars, faVenus } from '@fortawesome/free-solid-svg-icons'

export default function Users() {
  // const [users, setUsers] = useState([])
  const [userData, setUserData] = useState([])
  console.log("USER DATA: ", userData)
  // const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

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
          <Modal
            // data={userData}
            closeModal={closeModal}
          >
            <Card data={userData}/>
          </Modal>
        )
      }
      <UsersList
        handleModal={handleModal}
      />    
    </>
  )
}