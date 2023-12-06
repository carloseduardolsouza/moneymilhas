import './headerPrincipalCss.css'
import profileUser from '../../assets DB/profileUser.png'
import logoMoneyMilhas from '../../assets/MoneyMilhas.svg'
import { IoIosMenu } from "react-icons/io";

function headerPrincipal() {
    const openCloseMenu = () => {
        
    }

    return ( 
        <div className='header'>
            <div>
                <img src={logoMoneyMilhas} alt="logo money milhas"
                className='logoMM'/>
            </div>
            <div className='boxUser'>
                <IoIosMenu className='menuIcon'onClick={openCloseMenu}/>
                <img src={profileUser} alt="profile user" className='profileUser'/>

            </div>
        </div>
     );
}

export default headerPrincipal;