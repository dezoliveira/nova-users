import styles from './index.module.css'

export default function Loading() {
  return (
    <div className={styles.container}>
      <img
        className={styles.loading}
        alt="logo"
        src={"/src/assets/images/logo.jpeg"}
        width={"200"}
        height={"200"}
      />
    </div>
  )
}