

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
export default function Blogs(props) {
    return (
        <main>
            <h1>Nome Da Usuário: {props.nome}</h1>
            <h1>Número De Seguidores: {props.seguidores}</h1>
            <h1>Número De Repositórios: {props.repositórios}</h1>
        </main>
    )
}