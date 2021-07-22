import Link from 'next/link';


const Footer = () =>(

    <nav className="Footer">
    
    <Link href="./">
        <a className="navbar-brand"> Note app </a>
    </Link>

    <Link href="./new">
        <a className="create">New</a>
    </Link>

    

    
    </nav>
)

export default Footer;