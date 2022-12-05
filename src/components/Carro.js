import { Component } from "react";
import BubbleAlert from './BubbleAlert'
import DetalleCarro from "./DetalleCarro";

const styles = {
    carro: {
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '15px 25px',
        borderRadius: '15px',
        cursor: 'pointer'
    },
    bubble: {
        position: 'relative',
        left: '12px',
        top: '20px'

    }
}

class Carro extends Component {
    render() {
        const { carro, esCarroVisible, mostrarCarro } = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
        console.log(carro)
        return (
            <div>
                <span style={styles.bubble}>
                    {cantidad !== 0 ?
                        <BubbleAlert value={cantidad} /> : null}
                </span>
                <button onClick={mostrarCarro} style={styles.carro}>
                    Carro
                </button>
                {esCarroVisible ? <DetalleCarro carro={carro} /> : null}

            </div>
        )
    }
}

export default Carro