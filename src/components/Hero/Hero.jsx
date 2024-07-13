import './Hero.css'
export default function Hero({img1 , titel , desc ,img2 ,span , btn }) {
    return(
        <div className="hero">
            <div><img className='img1' src={img1} alt="" /></div>
            <div className='title'>
                <h1>{titel} <span>{span}</span></h1>
                <p>{desc}</p>
                <div className='inputbtn'>
                    <input type="search" placeholder='Want do you want to learn?' />
                    <button>{btn}</button>
                </div>
            </div>
            <div><img src={img2}  /></div>
        </div>
        
    )
}