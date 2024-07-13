import './Explore.css'

export default function Explore({text , desc ,ExploreItem , left , right}){
    return(
        <div className='Explore-container'>
            <div className='con-title'>
                <h1>{text}</h1>
                <p>{desc}</p>
            </div>
            <div className='container-categories'>
                <h2>{left}</h2>
            {ExploreItem.map((element =>{
            return(
                
                <div className='items'>
                    <div className='con-img'>
                        <img src={element.img1}  />
                    </div>
                    <div>
                        <h4>{element.text}</h4>
                    </div>
                </div>
            )
        }))}
                <h2>{right}</h2>
            </div>
        </div>
        
    )
}