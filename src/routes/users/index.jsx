import { useState } from "react"
import Modal from "../../components/Modal"
import UsersList from "../../components/UserList"
import Card from "../../components/Card"

export default function Users() {
  const [userData, setUserData] = useState([])
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
    <main>
      {
        showModal && (
          <Modal closeModal={closeModal}>
            <Card data={userData}/>
          </Modal>
        )
      }
      <UsersList
        handleModal={handleModal}
      />    
    </main>
  )
}