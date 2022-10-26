import styles from './User.module.css';

export function User() {
    return (
        <>
            <img className={styles.user} src='./src/assets/rafaelpires-perfil.png' />
            <h2 className={styles.title}>Rafael Pires</h2>
            <p className={styles.subtitle}>Ciclo da Riqueza</p>
        </>
    )
}