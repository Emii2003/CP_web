import {Link} from "react-router-dom";

export default function Menu(){
    return(
        <>
            <nav className="menu">
                <Link to='/' className="a">Home</Link>
                <span> | </span>
                <Link to='/produtos' className="a">Produtos</Link>
                

            </nav>
        
        </>
    )
}