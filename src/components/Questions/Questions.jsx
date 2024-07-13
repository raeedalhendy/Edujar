import './Questions.css'

export default function Questions({questions , questions2}){
    return(
        <div className='containe-questions'>
            <div className='left'>
                {questions.map((element =>{
                    return(
                    <div className='container-left'>
                        <div className='child' >
                            <p>{element.title}</p>
                            <h1>{element.text} </h1>
                            <button>{element.btn} </button>
                        </div>
                        <div className='img'>
                        <img src={element.img} />
                        </div>
                    </div>
                    )
                    
            }))}
            </div>
            <div className='right'>
                {questions2.map((element =>{
                    return(
                    <div className='container-right' >
                        <div className='con-q'>
                            <h1>{element.titleTop} </h1>
                            <p>{element.text} </p>
                        </div>
                        <div className='questions'>
                            <h1>{element.title} </h1>
                            <h3>{element.icon} </h3>
                        </div>
                        
                    </div>
                    )
                }))}
            </div>
        </div>
    )
}