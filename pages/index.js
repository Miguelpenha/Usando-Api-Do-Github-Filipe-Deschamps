import styles from './components/styles.module.css'

export default function Home() {
    if (typeof window !== 'undefined') {
        var form = document.getElementById('formulario');
        var campo = document.getElementById('campo');

        form.addEventListener('submit', function(e) {
            window.location.replace('https://usando-api-do-github-filipe-deschamps.vercel.app/contas/'+campo.value)
            e.preventDefault();
        });
    }
    return (
        <>
            <head>
                <title>Home</title>
            </head>
            <main className={styles.main}>
                <h1>Home</h1>
                <form id="formulario">
                    <input type="text" id="campo"></input>
                    <button type="submit">Enviar</button>
                </form>
            </main>
        </>
    )
}