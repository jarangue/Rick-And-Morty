import style from '../SearchBar/SearchBar.module.css'

export default function SearchBar(props) {
   const {onSearch} = props
   return (
      <div className={style.navBar}>
         <input type='search'/>
         <div className={style.buttonNavBar}>
         <button className={style.btn} onClick={onSearch}>Agregar</button>
         </div>
      </div>
   );
}
