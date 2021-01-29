import React, {useState} from "react"
import ItemsCarousel from 'react-items-carousel';
import SingleCard from "./SingleCard";

const Section = ({section}) => {
    const {title, restaurants} = section;    
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 30;

    return (
            <div className="section-container">
                <h1 id="section-title">{title}</h1>
                <div className="carousel-container">
                    <ItemsCarousel
                        infiniteLoop
                        requestToChangeActive={setActiveItemIndex}
                        activeItemIndex={activeItemIndex}
                        numberOfCards={3}                        
                        gutter={10}
                        activePosition={'center'}
                        rightChevron={<button>{' > '}</button>}
                        leftChevron={<button>{' < '}</button>}
                        outsideChevron
                        chevronWidth={chevronWidth}
                    >                
                        {restaurants.map((restaurant, index)=> {
                            return (   
                                <SingleCard restaurant={restaurant} key={index}/>          
                            )
                            })
                        }
                    </ItemsCarousel>
                </div>
            </div>  
    )
}

export default Section;

