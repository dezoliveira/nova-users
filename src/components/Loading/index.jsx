import styles from './index.module.css'
import logo from '/src/assets/images/logo.jpeg'

export default function Loading() {
  return (
    <div className={styles.container}>
      <img
        className={styles.loading}
        alt="logo"
        src={logo}
        width={"200"}
        height={"200"}
      />
    </div>
  )
}