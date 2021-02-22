export default function Teste(props) {
    props.organizações.forEach((org) => {
        return (
            <a className={styles.link_conta} href={'https://github.com/'+props.nick+'/'+org} target="_blank" rel="external" className={styles.link_conte} style={{textDecoration: 'none'}}>
                {org}
            </a>
        )
    })
}