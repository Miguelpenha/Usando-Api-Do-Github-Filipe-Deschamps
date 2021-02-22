import styles from '../components/styles.module.css'

export default function Teste(props) {
    var organizações = String(props.organizações).split(',')
    organizações.forEach((org) => {
        return (
            <a className={styles.link_conta} href={'https://github.com/'+props.nick+'/'} target="_blank" rel="external" className={styles.link_conte} style={{textDecoration: 'none'}}>
                {org}
            </a>
        )
    })
}