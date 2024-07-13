import './PopularCourses.css'

export default function PopularCourses({text , desc , left , right ,Popular , btn2}) {
    return(
        <div className='container'>
            <div className='con-title'>
                    <div className='text' >
                        <h1>{text}</h1>
                        <p>{desc}</p>
                    </div>
                    <div className='arrows'>
                        <h1>{left}</h1>
                        <h1>{right}</h1>
                    </div>
            </div>

            <div className='container-card'>
                {Popular.map((element =>{
                    return(
                    <div className='card'>
                        <div className='head-card'>
                                <div className='top-card'>
                                    <img src={element.img1}/>
                                    <h6>{element.text1}</h6>
                                </div>
                                <h5> {element.textTop} </h5>
                        </div>
                        <div className='title'>
                            <h1>{element.desc1}</h1>
                            <p>{element.desc2}</p>
                        </div>
                        <div className='card-bottom'>
                            <button>{element.btn}</button>
                            <img src={element.img2}  />
                        </div>
                    </div>
                    )
                }))}
            </div>

                <div className='btn2'>
                <button>{btn2}</button>
                </div>
        </div>
        
    )
}