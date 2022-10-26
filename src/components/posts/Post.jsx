import styles from './Post.module.css';

export function Post({titulo, link}) {
    return (
        <>
            <a href={link}
               className={styles.btnPost}
               target="_blank"
            >{titulo}</a>
        </>
    )
}