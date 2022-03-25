import React from 'react'
import  ReactDOM  from 'react-dom'
import './styles.css'

const App = () => {
    const estiloBotao ={
        marginTop: 12, 
        paddingTop: 12, 
        paddingBottom: 8,
        borderRadius: 8, 
        backgroundColor: 'blueviolet',
        color: 'white', 
        width: '100%'  
    }
    const textoDoRotulo = 'Nome'
    const obterTextoDoBotao = () => {
        return "Enviar";
        }
       
    return( 
        <div style={{margin: 'auto', width: 768, backgroundColor:
        '#EEE', padding: 12, borderRadius: 8}}>
            <label className="rotulo" htmlFor="nome" style={{display: 'block', marginBottom: 4}}>
            {textoDoRotulo}</label>

            <input Id="nome" type="text" style={{paddingTop: 8, paddingBottom: 8,
            borderStyle:'hidden', width: '100%', outline: 'none'}}></input>
            
            <button style={estiloBotao}>{obterTextoDoBotao}</button>

        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
