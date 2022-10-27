import styles from './User.module.css';

export function User() {
    const fotoUser = "./src/assets/rafaelpires-perfil.png"
    
    return (
        <>
            <img className={styles.user} src={fotoUser} />
            <h2 className={styles.title}>Rafael Pires</h2>
            <p className={styles.subtitle}>Ciclo da Riqueza</p>
        </>
    )
}