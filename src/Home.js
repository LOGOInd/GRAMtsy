import React from 'react';
import './styles/Home.css'
import Product from './Product';

// IMAGES
import bg1 from './assets/images/bg1.jpg' ;
import bg2 from './assets/images/bg1.png' ;
import bg3 from './assets/images/bg2.jpg' ;
import bg4 from './assets/images/bg3.jpg' ;

function Home() {
    return (
        <div className="home">
            
            <div className="home__container">

                <div className="home__bg">
                    <img src={bg4} alt="BG1" className="home__bg--bgImage" ></img>
                    <h1 className="home__bg--brand" >GRAMtsy</h1>
                    <h4 className="home__bg--tagline" >One Place to find all your needs ON RENT !</h4>
                </div>
        
                <div className="home__row">
                    <Product 
                    title="Macbook Pro 15in 2020" 
                    imageSrc="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRc0xnApjXpjdu42nFbyWWCtx_BoZ-BOJuvkDEYgQ2W2UP55K15FNXVBEj0iRZk3sQjR2SeyHp25w&usqp=CAc"
                    priceFM="1000"
                    pricePMO="500"
                    useStatus="12"
                    />
                    <Product 
                    title="Apple Watch SE Nike 44mm" 
                    imageSrc="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQIGSvALZANCbQqmqEhOm7W1dPWKOiCSpQ93e1ZWmcKulvb9x5AdNPVSbFDsjoNEYpOw8WGiJLcYA&usqp=CAc"
                    priceFM="500"
                    pricePMO="200"
                    useStatus="2"
                    />
                </div>
                <div className="home__row">
                    <Product 
                    title="5 Seater L-Sofa " 
                    imageSrc="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ9rMDBvIA603LXzmg_v6Sb15NH0CHLHqe8GP3mxzKyiVrjj5ddf6JGCYmWIU9McaqXXkXaeQt-Rg&usqp=CAc"
                    priceFM="800"
                    pricePMO="600"
                    useStatus="24"
                    />
                    <Product 
                    title="Royal Carpet" 
                    imageSrc="https://thumbs.dreamstime.com/thumb_2168/21684751.jpg"
                    priceFM="1600"
                    pricePMO="1000"
                    useStatus="1"
                    />
                    <Product 
                    title="Takk Smart Desk" 
                    imageSrc="data:image/jpeg;base64,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"
                    priceFM="700"
                    pricePMO="550"
                    useStatus="3"
                    />
                </div>
                <div className="home__row">
                    <Product 
                    title="Macbook Pro 15in 2020" 
                    imageSrc="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRc0xnApjXpjdu42nFbyWWCtx_BoZ-BOJuvkDEYgQ2W2UP55K15FNXVBEj0iRZk3sQjR2SeyHp25w&usqp=CAc"
                    priceFM="1000"
                    pricePMO="500"
                    useStatus="12"
                    />
                    <Product 
                    title="Apple Watch SE Nike 44mm" 
                    imageSrc="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQIGSvALZANCbQqmqEhOm7W1dPWKOiCSpQ93e1ZWmcKulvb9x5AdNPVSbFDsjoNEYpOw8WGiJLcYA&usqp=CAc"
                    priceFM="500"
                    pricePMO="200"
                    useStatus="2"
                    />
                </div>
                <div className="home__row">
                    <Product 
                    title="5 Seater L-Sofa " 
                    imageSrc="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ9rMDBvIA603LXzmg_v6Sb15NH0CHLHqe8GP3mxzKyiVrjj5ddf6JGCYmWIU9McaqXXkXaeQt-Rg&usqp=CAc"
                    priceFM="800"
                    pricePMO="600"
                    useStatus="24"
                    />
                    <Product 
                    title="Royal Carpet" 
                    imageSrc="https://thumbs.dreamstime.com/thumb_2168/21684751.jpg"
                    priceFM="1600"
                    pricePMO="1000"
                    useStatus="1"
                    />
                    <Product 
                    title="Takk Smart Desk" 
                    imageSrc="data:image/jpeg;base64,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"
                    priceFM="700"
                    pricePMO="550"
                    useStatus="3"
                    />
                </div>

            </div>
        
        </div>

    )
}

export default Home
