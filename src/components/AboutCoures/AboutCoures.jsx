import './AboutCoures.css'
export default function AboutCoures({titel , desc , titel2, desc2 ,img, desc3, desc4, rate , icon , titel3 ,desc5 , titel4, desc6})   {
    return(
        <div className='AboutCoures'>
            <div className='contianer gray '>
                <h1>{titel}</h1>
                <p>{desc}</p>
            </div>
            <div className='contianer green'>
                <h1>{titel2}</h1>
                <p>{desc2}</p>
            </div>
            <div className='con-rate gray'>
                <div className='rate'>
                    <img src={img}  />
                    <h1>{desc3}</h1>
                </div>
                <div className='rate'>
                    <p>{desc4}</p>
                    <div className='rate-child'><p>{rate}</p><img src={icon} /></div>
                </div>
            </div>
                <div className='contianer green '>
                    <h1>{titel3}</h1>
                    <p>{desc5}</p>
                </div>
                <div className='contianer gray'>
                    <h1>{titel4}</h1>
                    <p>{desc6}</p>
                </div>
        </div>
    )
}