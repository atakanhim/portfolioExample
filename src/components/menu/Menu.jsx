import "./menu.scss";
import Menuitem from "./MenuItems/MenuItem";

export default function Menu({menuOpen,setMenuOpen}) {
  const data = [
    {
      id:"intro",
      txt:"Intro"
    },
    {
      id:"portfolio",
      txt:"Portfolio"
    },
    {
      id:"works",
      txt:"Works"
    },
    {
      id:"testimonials",
      txt:"Testimonials"
    },
    {
      id:"contact",
      txt:"Contact"
    },
  ]
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
      {data.map(item=>(
        <Menuitem key={item.id} id={item.id} txt={item.txt} setMenuOpen={setMenuOpen}/>
      ))}
      </ul>
    </div>
  );
}
