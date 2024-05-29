// react
import { useState } from "react"

// components
import Modal from "../../components/Modal"
import UsersList from "../../components/UserList"
import Card from "../../components/Card"

export default function Users() {
  const [userData, setUserData] = useState([])
  const [showModal, setShowModal] = useState(false)

  // handle modal on card click
  const handleModal = (e, user) => {
    e.preventDefault()
    setUserData(user)

    // freezy scrool
    document.body.style.overflowY = 'hidden'
    setShowModal(true)
  }

  // close modal
  const closeModal = (value) => {
    setShowModal(value)

    // infreezy scroll
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