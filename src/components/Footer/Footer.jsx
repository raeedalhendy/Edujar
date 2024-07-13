import './Footer.css'
export default function Footer({title1, title2 , text, textbottom, title11 , title12 , Legal, Links,  title13 , btn }) {
    return(
        <div className='container-footer'>
            <div className='container-edujar'>
                <div className='title-edujar'>
                <h1>{title1} </h1>
                <h2>{title2} </h2>
                </div>
                <p>{text} </p>
                <h3>{textbottom} </h3>
            </div>

            <div>
                <h1 className='title'>{title11} </h1>
                {Links.map((element =>{
                    return(
                        <ul>
                            <li>
                                <a href="">{element.links}</a>
                            </li>
                        </ul>
                    )
                }))}
            </div>
            
            <div>
                <h1  className='title'>{title12} </h1>
                {Legal.map((element =>{
                    return(
                        <ul>
                            <li>
                                <a href="">{element.links2}</a>
                            </li>
                    </ul>
                    )
                }))}
            </div>
            <div className='quick-links'>
                <h1  className='title'>{title13} </h1>
                <input type="email" placeholder=' Enter Your Email' />
                <button>{btn} </button>
            </div>
        </div>
    )
    
}