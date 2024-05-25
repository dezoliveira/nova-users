import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './index.module.css'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar() {
  return (
    <div className={styles.container}>
      <span className={styles.searchBox}>
        <input type="text" placeholder="Pesquisar"/>
      </span>
      <span className={styles.searchIcon}>
        <FontAwesomeIcon icon={faSearch} color='aliceblue'/>
      </span>
    </div>
  )
}