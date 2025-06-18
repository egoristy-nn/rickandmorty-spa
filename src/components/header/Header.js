import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <h1 style={{margin: 0}}>Rick and Morty App</h1>
        </div>
    )
}

export default Header