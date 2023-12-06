import './itensOfertasCss.css'
import imageOferta from '../../assets/praia.jpg'

function itenOferta() {
    return ( 
        <div>
            <div className="boxOferta">
                <img src={imageOferta} alt="imagem oferta" className='imageOferta'/>
                <div className='info'>
                    <h1 className='QuantidadeMilhas'>1.000 milhas</h1>
                    <p className='Oferta'>1.000 milhas por <strong>R$400,00</strong></p>
                    <button className='comprar botão'>Comprar</button>
                    <button className='negociar botão'>Negociar</button>
                </div>
            </div>
        </div>
     );
}

export default itenOferta;