import { MdAirplanemodeActive } from "react-icons/md";
import { MdSell } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import './menuHorizontalCss.css'

function menuHorizontal() {
    return ( 
        <div className="menuH">
            <div className="boxMenu">
                <MdAirplanemodeActive />
                <p className="nomeItem"
                //onClick={}
                style={{borderBottom: '2px solid gray'}}
                >Emitir passagem</p>
            </div>

            <div className="boxMenu">
                <MdSell />
                <p
                className="nomeItem"
                //onClick={}
                style={{borderBottom: '2px solid gray'}}
                >Comprar milhas</p>
            </div>

            <div className="boxMenu">
                <FaMoneyBillWave />
                <p className="nomeItem"
                //onClick={}
                style={{borderBottom: '2px solid gray'}}
                >Vender milhas</p>
            </div>
        </div>
     );
}

export default menuHorizontal;