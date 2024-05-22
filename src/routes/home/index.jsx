import { Link } from "react-router-dom";
import styles from './index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <img
        src="/src/assets/images/logo.jpeg"
        width={200}
        height={200}
      />
      <h3>Bem vindo de volta, 
        <strong> usuario12434</strong><br/>
        O que deseja fazer ?
      </h3>
      <Link to="/users">
        <button className={styles.btnPrimary}>
          Listar Usuários
        </button>
      </Link>
    </div>
  )
}