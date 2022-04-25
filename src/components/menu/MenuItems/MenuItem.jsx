import "./menuitem.scss"

const Menuitem = ({setMenuOpen,txt,id}) => {
    return (
        <li onClick={()=>setMenuOpen(false)}>
            <a href={"#"+id}>{txt}</a>
      </li>
    );
}

export default Menuitem;
