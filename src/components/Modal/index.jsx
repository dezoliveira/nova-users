// styles
import styles from './index.module.css'

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

// react
import { useRef } from 'react'

export default function Modal({ closeModal, children }) {
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
        <div className={styles.modalBody}>
          { children }
        </div>
      </div>
    </div>
  )
}