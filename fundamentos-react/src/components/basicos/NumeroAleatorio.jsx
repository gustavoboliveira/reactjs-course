export default props => {
    const { max, min } = props
    const aleatorio = parseInt(Math.random() * (max - min)) + min
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p><strong>Valor Máximo: </strong>{ max }</p>
            <p><strong>Valor Mínimo: </strong>{ min }</p>
            <p><strong>Valor Aleatório: </strong>{ aleatorio }</p>
        </div>
    )
}