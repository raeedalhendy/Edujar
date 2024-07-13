import './OurClients.css'

export default function OurClients({background,Ourclients , user1 , user2 , user3 ,user4 ,user5 , left , right}) {
    return(
        <div className='ContainerOurClients'>
            {/* <img className='background' src={background} /> */}
            
            {Ourclients.map((element =>{
            return(
                <div className='content'>
                    <div className='detiles' >
                        <h1>{element.title} </h1>
                        <img src={element.icon} />
                        <p>{element.text} </p>
                        <h2>{element.name} </h2>
                    </div>
                </div>
            )
        }))}

            <div className='container-user'>
                <div className='users'>
                    <img className='arrow' src={left}  />
                    <img src={user1}  />
                    <img src={user2}  />
                    <img src={user3}  />
                    <img src={user4}  />
                    <img src={user5}  />
                    <img className='arrow' src={right}  />
                </div>
            </div>
            
           
        </div>
    )
}