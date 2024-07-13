import './NavBar.css'
export default function NavBar({logo , logo2 , navItem , btn }){
    
    function OpenMenu() {
        const open = document.querySelector('.navbaropen')
        const close = document.querySelector('.navbarclose')
        const container = document.querySelector('.container-navbar')
        
        if (close.style.display ="none") {
            close.style.display ="block"
            open.style.display ="none"
            container.style.display ="block"
            
        }
        
    }
    function closeMenu() {
        const open = document.querySelector('.navbaropen')
        const close = document.querySelector('.navbarclose')
        const container = document.querySelector('.container-navbar')
        
        if (close.style.display !="none") {
            close.style.display ="none"
            open.style.display ="block"
            container.style.display ="none"
        }
    }
    return(
        <nav>
            <div className='container-logo'>
            <h1 className='logo'>{logo}</h1>
            <h1 className='logo2'>{logo2}</h1>
            
            </div>
            <ul>
                {navItem.map((element)=>{
                    return(
                        <li> <a href="#">{element.text}</a></li>
                        
                )})}
            </ul>
            <button>{btn}</button>
            
            <div className='container-navbar'>
            {navItem.map((element)=>{
                    return(
                        <li> <a href="#">{element.text}</a></li>
                        
                )})}
            </div>
            <button onClick={()=>OpenMenu()} className='navbaropen'><i class="fa-solid fa-bars"></i></button>
            <button onClick={()=> closeMenu ()} className='navbarclose'><i  class="fa-solid fa-xmark"></i></button>
        </nav>
    )
}