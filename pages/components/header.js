import Link from 'next/link';


const Header = () =>(

    <nav className="Header">
    
    <Link href="./">
        <a className="navbar-brand"> Note app </a>
    </Link>

    <Link href="./new">
        <a className="create">New</a>
    </Link>

    

    
    </nav>
)

export default Header;