import styles from './index.module.css'

export default function Spinner({ text }) {
  return (
    <div className={styles.container}>
      <span className={styles.loader}></span>
      <p>{text}</p>
    </div>
  )
}