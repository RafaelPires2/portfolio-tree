import styles from './User.module.css';
import userImg from '/assets/rafaelpires-perfil.png';

export function User() {

    return (
        <>
            <img className={styles.user} src={userImg} />
            <h2 className={styles.title}>Rafael Pires</h2>
            <p className={styles.subtitle}>Ciclo da Riqueza</p>
        </>
    )
}