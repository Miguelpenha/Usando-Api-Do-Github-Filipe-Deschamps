import styles from '../components/styles.module.css'
import Voltar from '../components/voltar.module'
import Head from 'next/head'
import Org from '../components/org.module'

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
    var organizações = []
    for (var quant_orgs = 0;quant_orgs < dadosOrgsJson.length;quant_orgs++) {
        if (quant_orgs < dadosOrgsJson.length-1) {
            organizações.push(dadosOrgsJson[quant_orgs].name+', ')
        } else {
            organizações.push(dadosOrgsJson[quant_orgs].name)
        }
    }
    return {
        props: {
            seguidores: await dadosJson.followers,
            repositórios: await dadosJson.public_repos,
            nome: nome,
            avatar: await dadosJson.avatar_url,
            nick: contaGithub,
            organizações: organizações,
            criado_em: dadosJson.created_at
        }
    }
}
export default function Contas(props) {
    props.organizações.forEach((org) => {
        console.log(org)
    })
    return (
        <>
            <Head>
                <link rel="canonical" href="https://usando-api-do-github-filipe-deschamps.vercel.app/" />
                <title>Conta: {props.nome}</title>
            </Head>
            <main className={styles.main}>
                <Voltar cor="black" hover/>
                <a href={'https://github.com/'+props.nick} target="_blank" rel="external">
                    <img src={props.avatar} width="128" height="128" className={styles.avatar}/>
                </a>
                <div className={styles.dados}>
                    <h1 className={styles.tit_conta}>Nome Do Usuário: 
                        <a href={'https://github.com/'+props.nick} target="_blank" rel="external" className={styles.link_conta} className={styles.link_conte} style={{textDecoration: 'none'}}>
                            {props.nome}
                        </a>
                    </h1>
                    <h1 className={styles.tit_conta}>Número De Seguidores: 
                        <a href={'https://github.com/'+props.nick+'?tab=followers'} target="_blank" rel="external" className={styles.link_conta} className={styles.link_conte} style={{textDecoration: 'none'}}>
                            {props.seguidores}
                        </a>
                    </h1>
                    <h1 className={styles.tit_conta}>Número De Repositórios: 
                        <a className={styles.link_conta} href={'https://github.com/'+props.nick+'?tab=repositories'} target="_blank" rel="external" className={styles.link_conte} style={{textDecoration: 'none'}}>
                            {props.repositórios}
                        </a>
                    </h1>
                    <h1 className={styles.tit_conta}>Organizações: 
                        {props.organizações.map((org) => {
                            return <Org nick={props.nick} org={org}/>
                        })}
                    </h1>
                    <h1 className={styles.tit_conta}>Começou em:  
                        <a className={styles.link_conta} href={'https://github.com/'+props.nick} target="_blank" rel="external" className={styles.link_conte} style={{textDecoration: 'none'}}>
                            {props.criado_em}
                        </a>
                    </h1>
                </div>
            </main>
        </>
    )
}