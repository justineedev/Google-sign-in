import './Footer.css'
import logo from '../logo.svg';

export default function Footer(){
    return(
        <footer className='footer'>
            <p className='footer-p'>Made with <img className='icon' width={35} src={logo}></img> by <pre>Justine Dave</pre></p>
        </footer>
    )
}