import './Logo.css'
export default function Logo({LogoItem}) {
    return(
        <div className='ContainerLogo'>
            {LogoItem.map((element =>{
                return(
                    <div>
                        <img src={element.img}  />
                    </div>
                )
            }))}
        </div>
    )
}