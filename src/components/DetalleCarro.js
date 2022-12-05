import { Component } from "react";

const styles = {
    detalleCarro: {
        backgroundColor: "#fff",
        position: "absolute",
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width: '300px',
        right: '50px',
    },
    ul: {
        margin: 0,
        padding: 0
    },
    producto: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 25px',
        borderBottom: 'solid 1px #aaa'
    }

}

class DetalleCarro extends Component {
    render() {
        const { carro } = this.props

        return (
            <div style={styles.detalleCarro} >
                <ul style={styles.ul}>
                    {carro.map(x =>
                        <li style={styles.producto} key={x.name}>
                            <img alt={x.name} src={x.img} width='40' height='40' />
                            {x.name} <span>{x.cantidad}</span>
                        </li>)}
                </ul>
            </div >
        )
    }
}

export default DetalleCarro