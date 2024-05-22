import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './index.module.css'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react'

export default function Modal({ data, closeModal }) {
  const user = data
  const modalRef = useRef()

  const handleClose = (e) => {
    e.preventDefault()
    closeModal(false)
  }

  const handleClickOutside = (event) => {
    event.preventDefault()
    console.log(modalRef.current)
    console.log(event)
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal(false);
    }
  }

  return (
    <div className={styles.backdrop} onClick={handleClickOutside}>
      <div className={styles.modal} ref={modalRef}>
        <span className={styles.closeButton} onClick={handleClose}>
          <FontAwesomeIcon fontSize={38} icon={faTimesCircle} />
        </span>
        <div>
          <img
            alt="details_img"
            src={user.picture.medium}
            width="40"
            height="40"
          />
        </div >
        <span>
          <h1>{user.name.first} {user.name.last}</h1>
        </span>
        <span>
          <small>{user.email}</small>
        </span>
        <span>
          <h4>{user.gender}</h4>
        </span>
        <span>
          <h5>{user.dob.date}</h5>
        </span>
        <span>
          <h5>{user.phone}</h5>
        </span>
        <span>
          <h5>{user.nat}</h5>
        </span>
        <span>
          <h5>
            {user.location.street.name}, {user.location.street.number}
          </h5>
        </span>
        <span>
          <h5>{user.id.value}</h5>
        </span>
      </div>
    </div>
  )
}