import Link from "next/link"

function Header (){
    return(
        <div>
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                <Link className="navbar-brand" href="/" >Movies DB</Link>
                </div>
            </nav>            
        </div>
    )
}

export default Header