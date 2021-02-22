export default function Teste(props) {
    var organizações = String(props.organizações).split(',')
    return (
        <a className={styles.link_conta} href={'https://github.com/'+props.nick+'/'} target="_blank" rel="external" className={styles.link_conte} style={{textDecoration: 'none'}}>
            {organizações}
        </a>
    )
}