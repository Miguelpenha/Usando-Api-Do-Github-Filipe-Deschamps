import styles from '../components/styles.module.css'

export default function Teste(props) {
    var organizações = String(props.organizações).split(',')
    while (organizações) {
        return (
            <a className={styles.link_conta} href={'https://github.com/'+props.nick+'/'} target="_blank" rel="external" className={styles.link_conte} style={{textDecoration: 'none'}}>
                asd
            </a>
        )
    }
}