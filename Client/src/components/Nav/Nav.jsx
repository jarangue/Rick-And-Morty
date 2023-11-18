import SearchBar from '../SearchBar/SearchBar';
import {NavLink, useLocation} from "react-router-dom";
import style from "../Nav/Nav.module.css"


const Nav = (props) =>{

    const {onSearch} = props

    const { pathname } = useLocation()

    return(
        <div className={style.navBar}>
                <div className={style.containerBoton}>

               <NavLink to="/about">
                    <button className={style.btn}> About </button>
                 </NavLink>
                 <NavLink to="/home">
                    <button className={style.btn}> Home </button>
                 </NavLink>
                 <NavLink to="/favorites">
                    <button className={style.btn}> Favorites </button>
                 </NavLink>
                 {/* <NavLink to='/' className={style.a}><button className={style.logout} onClick={() => logout()}>LogOut</button></NavLink> */}
                 </div>

                 {
                  pathname.includes("/home") && <SearchBar onSearch={onSearch}/>
               }
                
             
        </div>
    )
}

export default Nav