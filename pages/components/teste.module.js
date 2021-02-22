export default function Teste(props) {
    var organizações = String(props.organizações).split(',')
    return (
        <h1>
            {organizações}
        </h1>
    )
}