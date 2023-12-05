import './loginInitCss.css';
import Logo from '../../assets/MoneyMilhas.svg'
import iconPassword from '../../assets/password.svg'
import iconEmail from '../../assets/email.svg'
import iconGoogle from '../../assets/google-icon-logo.svg'

const Login = () => {
    return ( 
        <div className='body'>
            <img className='logo' src={Logo} alt='Logo Money Milhas'/>
            <div className='boxLogin'>
                <h1>Login</h1>
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
                        <button className='submit'
                        type="submit"
                        style={{background: '#FFB23F'}}
                        >Entrar</button>
                        <button className='fazerCadastro'>Fazer cadastro</button>
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

export default Login;