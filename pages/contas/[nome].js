import styles from '../components/styles.module.css'
import Link from 'next/link'
import Voltar from '../components/voltar.module'

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
            nome: nome,
            avatar: await dadosJson.avatar_url,
            nick: contaGithub
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
                <a href={'https://github.com/'+props.nick} target="_blank" rel="external">
                    <img src={props.avatar} width="96" height="96" className={styles.avatar}/>
                </a>
                <h1>Nome Do Usuário: {props.nome}</h1>
                <h1>Número De Seguidores: {props.seguidores}</h1>
                <a href={'https://github.com/'+props.nick+'?tab=repositories'}>
                    <h1>Número De Repositórios: {props.repositórios}</h1>
                </a>
            </main>
        </>
    )
}