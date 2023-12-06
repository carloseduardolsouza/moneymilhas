import HeaderPrincipal from "../../components/headerPrincipal/headerPrincipal";
import MenuHorizontal from "../../components/menuHorizontal/menuHorizontal";
import ItensOferta from "../../components/ItensOfertas/itensOfertas";

import './homePrincipalCss.css'

function homePrincipal() {
    return ( 
        <div>
            <HeaderPrincipal/>
            <MenuHorizontal/>
            <div className="main">
                <ItensOferta/>
                <ItensOferta/>
                <ItensOferta/>
                <ItensOferta/>
                <ItensOferta/>
                <ItensOferta/>
                <ItensOferta/>
            </div>
        </div>
     );
}

export default homePrincipal;