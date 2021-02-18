import styles from '../components/styles.module.css'
import Link from 'next/link'
import Voltar from '../components/voltar.module'
import Image from 'next/image'

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking'
    }
}
export async function getStaticProps(context) {
    const contaGithub = context.params.nome
    const dados = await fetch(
      `https://api.github.com/users/${contaGithub}`
    );
    const dadosJson = await dados.json()
    const dadosRepos = await fetch(
      `https://api.github.com/users/${contaGithub}/repos`
    );
    const dadosReposJson = await dadosRepos.json()
    var nome = ''
    if (dadosJson.name === null) {
        nome = 'nulo'
    }else {
        nome = dadosJson.name
    }
    return {
        props: {
            seguidores: await dadosJson.followers,
            repositórios: await dadosJson.public_repos,
            nome: nome
        }
    }
}
export default function Contas(props) {
    return (
        <>
            <head>
                <title>Conta: {props.nome}</title>
            </head>
            <main className={styles.main}>
                <Voltar cor="black" hover/>
                <Image src="https://avatars.githubusercontent.com/u/65141147?v=4" width="32" height="32"/>
                <h1>Nome Do Usuário: {props.nome}</h1>
                <h1>Número De Seguidores: {props.seguidores}</h1>
                <h1>Número De Repositórios: {props.repositórios}</h1>
            </main>
        </>
    )
}