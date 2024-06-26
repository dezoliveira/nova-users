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
  faVenus 
} from '@fortawesome/free-solid-svg-icons'

// utils
import { utils }  from '../../utils'

// react
import { useState } from 'react'

export default function Card({ data }) {
  const [user, setUser] = useState(data)
  const { formatDate, iconPalette } = utils()

  return (
    <div className={styles.card}>
      {/* user image */}
      <div>
        <img
          alt="details_img"
          src={user.picture.large}
          width="200"
          height="200"
        />
      </div >

      {/* username */}
      <span className={styles.userName}>
        <h1>{user.name.first} {user.name.last}</h1>
      </span>

      {/* mail */}
      <span className={styles.iconBox}>
        <FontAwesomeIcon
          icon={faEnvelopeCircleCheck}
          color={iconPalette("mail")}
        />
        <small>{user.email}</small>
      </span>

      {/* gender and dob */}
      <div className={styles.userInfo}>
        <span className={styles.iconBox}>
          {user.gender == "male" ?
            <FontAwesomeIcon
              icon={faMars}
              color={iconPalette("mars")}
            />
          : <FontAwesomeIcon
              icon={faVenus}
              color={iconPalette("venus")}
            />
          }
          <p>{user.gender}</p>
        </span>
        <span className={styles.iconBox}>
          <FontAwesomeIcon
            icon={faCakeCandles}
            color={iconPalette("cake")}/>
          <p>{formatDate(user.dob.date)}</p>
        </span>
      </div>

      {/* phone and flag */}
      <div className={styles.userInfo}>
        <span className={styles.iconBox}>
          <FontAwesomeIcon
            icon={faMobile}
            color={iconPalette("mobile")}
          />
          <p>{user.phone}</p>
        </span>
        <span className={styles.iconBox}>
          <FontAwesomeIcon icon={faFlag} />
          <p>{user.nat}</p>
        </span>
      </div>

      {/* street */}
      <span className={styles.iconBox}>
        <FontAwesomeIcon
          icon={faLocation}
          color={iconPalette("location")}/>
        <p>
          {user.location.street.name}, {user.location.street.number}
        </p>
      </span>

      {/* id */}
      <span className={styles.iconBox}>
        <FontAwesomeIcon
          icon={faAddressCard}
          color={iconPalette("idCard")}/>
        <p><b>{user.id.name}: </b>{user.id.value ? user.id.value : "N/A"}</p>
      </span>
    </div>
  )
}