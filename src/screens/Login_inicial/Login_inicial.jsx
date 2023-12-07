import './Login_inicial_style.css';
import Logo from '../../assets/Logo_moneyMilhas.svg'
import iconPassword from '../../assets/icon_senha.svg'
import iconEmail from '../../assets/icon_email.svg'
import iconGoogle from '../../assets/Logo_google.svg'

const Login_inicial = () => {
    return ( 
        <div className='body'>
            <img className='logo' src={Logo} alt='Logo Money Milhas'/>
            <div className='boxLogin'>
                <h1 className='h1'>Login</h1>
                <form className='label'>
                    <div>
                        <img src={iconEmail} alt="iconEmail" className='icon'/>
                        <input className="input"
                        type="email"
                        placeholder='Email'/>
                    </div>

                    <div>
                        <img src={iconPassword} alt="iconPassword" className='icon'/>
                        <input className="input"
                        type="password"
                        placeholder='Senha'/>
                    </div>

                    <div>
                        <button className='button'
                        type="submit"
                        style={{background: '#FFB23F'}}
                        >Entrar</button>
                        <button className='button'>Cadastrar</button>
                    </div>
                </form>
                <div className='entrarComOutro'>
                    <p className='entrarCom'>Entrar com</p>
                    <div className='google'>
                        <img src={iconGoogle} alt="iconGoogle" />
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Login_inicial;