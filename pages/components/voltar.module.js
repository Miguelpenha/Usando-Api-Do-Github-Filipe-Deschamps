import Link from 'next/link'
import styles from '../components/styles.module.css'

export default function Voltar(props) {
    function veriHref() {
        if (props.href === undefined) {
            return '/'
        } else {
            return String(props.href)
        }
    }
    function veriCor() {
        if (props.cor === undefined) {
            return ''
        } else {
            return String(props.cor)
        }
    }
    function veriHover() {
        if (props.hover === undefined) {
            return undefined
        } else {
            return styles.bt_voltar_hover
        }
    }
    if (props.link !== undefined) {
        return (
            <a href={veriHref()} className={veriHover()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16" color={veriCor()}>
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                </svg>
            </a>
        )
    } else if (props.link === undefined){
        return (
            <Link href={veriHref()}>
                <a className={veriHover()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16" color={veriCor()}>
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                    </svg>
                </a>
            </Link>
        )
    }
}