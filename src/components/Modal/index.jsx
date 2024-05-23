// styles
import styles from './index.module.css'

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faAddressCard,
  faCakeCandles,
  faEnvelopeCircleCheck,
  faFlag,
  faLocation,
  faMars,
  faMobile,
  faTimesCircle,
  faVenus 
} from '@fortawesome/free-solid-svg-icons'

// react
import { useRef } from 'react'

// utils
import formatDate from '../../utils'

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
        <div className={styles.modalBody}>
          <div>
            <img
              alt="details_img"
              src={user.picture.large}
              width="200"
              height="200"
            />
          </div >
          <span className={styles.userName}>
            <h1>{user.name.first} {user.name.last}</h1>
          </span>

          {/* mail */}
          <span className={styles.iconBox}>
            <FontAwesomeIcon icon={faEnvelopeCircleCheck} className={styles.mail}/>
            <small>{user.email}</small>
          </span>

          {/* gender and dob */}
          <div className={styles.userInfo}>
            <span className={styles.iconBox}>
              {user.gender == "male" ?
                <FontAwesomeIcon icon={faMars}  />
              : <FontAwesomeIcon icon={faVenus} />
              }
              <p>{user.gender}</p>
            </span>
            <span className={styles.iconBox}>
              <FontAwesomeIcon icon={faCakeCandles} className={styles.cake}/>
              <p>{formatDate(user.dob.date)}</p>
            </span>
          </div>

          {/* phone and flag */}
          <div className={styles.userInfo}>
            <span className={styles.iconBox}>
              <FontAwesomeIcon icon={faMobile} />
              <p>{user.phone}</p>
            </span>
            <span className={styles.iconBox}>
              <FontAwesomeIcon icon={faFlag} />
              <p>{user.nat}</p>
            </span>
          </div>

          {/* street */}
          <span className={styles.iconBox}>
            <FontAwesomeIcon icon={faLocation} className={styles.location}/>
            <p>
              {user.location.street.name}, {user.location.street.number}
            </p>
          </span>

          {/* id */}
          <span className={styles.iconBox}>
            <FontAwesomeIcon icon={faAddressCard} className={styles.idCard}/>
            <p><b>{user.id.name}: </b>{user.id.value ? user.id.value : "N/A"}</p>
          </span>
        </div>
      </div>
    </div>
  )
}