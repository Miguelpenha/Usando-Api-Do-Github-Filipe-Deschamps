import styles from '../components/styles.module.css'

export default function Org(props) {
    return (
        <a className={styles.link_conta} href={'https://github.com/'+props.nick+'/'+String(props.org).replace(',')} target="_blank" rel="external" className={styles.link_conte} style={{textDecoration: 'none'}}>
            {props.org}
        </a>
    )
}