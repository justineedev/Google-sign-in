import './Footer.css'
import logo from '../logo.svg';

export default function Footer(){
    return(
        <footer className='footer'>
            <p className='footer-p'>Made with <img className='icon' width={35} src={logo} alt="react"></img> by <pre>Justine Dave (v1.0.1)</pre></p>
        </footer>
    )
}