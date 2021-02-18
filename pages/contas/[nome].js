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
    const dadosOrgs = await fetch(
        `https://api.github.com/users/${contaGithub}/repos`
    )
    const dadosOrgsJson = await dadosOrgs.json()
    var nome = ''
    if (dadosJson.name === null) {
        nome = 'nulo'
    }else {
        nome = dadosJson.name
    }
    var quant_orgs = dadosOrgsJson.length
    var organizações = ''
    while (quant_orgs > 0) {
        if (quant_orgs === 0) {
            organizações = `${organizações}${dadosOrgsJson[quant_orgs-1].name}`
        }else {
            organizações = `${organizações}${dadosOrgsJson[quant_orgs-1].name}, `
        }
        quant_orgs =- 1
    }
    if (organizações.length === 0) {
        organizações = 'Nenhuma'
    }
    return {
        props: {
            seguidores: await dadosJson.followers,
            repositórios: await dadosJson.public_repos,
            nome: nome,
            avatar: await dadosJson.avatar_url,
            nick: contaGithub,
            organizações: organizações,
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
                    <img src={props.avatar} width="128" height="128" className={styles.avatar}/>
                </a>
                <div className={styles.dados}>
                    <h1>Nome Do Usuário: {props.nome}</h1>
                    <a href={'https://github.com/'+props.nick+'?tab=followers'} target="_blank" rel="external" className={styles.link_conta}>
                        <span style={{textDecoration: 'none'}} className={styles.tit_conta}>Número De Seguidores: {props.seguidores}</span>
                    </a>
                    <br/>
                    <br/>
                    <a href={'https://github.com/'+props.nick+'?tab=repositories'} target="_blank" rel="external" className={styles.link_conta}>
                        <span style={{textDecoration: 'none'}} className={styles.tit_conta}>Número De Repositórios: {props.repositórios}</span>
                    </a>
                    <br/>
                    <br/>
                    <a href={'https://github.com/'+props.nick+'?tab=repositories'} target="_blank" rel="external" className={styles.link_conta}>
                        <span style={{textDecoration: 'none'}} className={styles.tit_conta}>Organizações: {props.organizações}</span>
                    </a>
                </div>
            </main>
        </>
    )
}