import vineImage from '../assets/vine.jpg'; 
import juiceImage from '../assets/juice.jpg';
import beerImage from '../assets/beer.jpg';
import "./ItemsList.css"
import { useState } from 'react';

const JsonData = require('../JsonData/Jsondata.json');

const ItemsList = ()=>{
    const [clickedElement, SetClickedElement] = useState("");
    const [titleName, SetTitleName] = useState("")
    const ClickableElement = (elementId, titleName)=>{
        SetTitleName()
        SetClickedElement(elementId)
    }
    return(
        <div className='itemsList rounded-md'>

            <ul className='meals-list'>

                {JsonData.meals.map((item, index)=>{
                    console.log(item.id)
                    return (
                        <li key={index}>
                        <div className='flex'>

                            <div>
                                <img src={item.img} alt='meals' className='meal-img' />
                            </div>

                            <div className='ml-[5%]'>

                                <div>
                                    
                                    <p>{item.title}</p>
                                    <p>Starter: {item.starter}</p>
                                    <p>Desert: {item.desert}</p>

                                </div>

                                <br />
                                <p>Select Your Drink: {}</p>
                                <div>

                                    <div className='drink-img'>
                                        
                                        {item.drinks.map((i, index2)=>{
                                            let drinkImageSrc = null;
                                            let tot_index = item.id + i.title;
                                            switch (i.title) {
                                            case 'Vine':
                                                drinkImageSrc = vineImage;
                                                break;
                                            case 'Juice':
                                                drinkImageSrc = juiceImage;
                                                break;
                                            case 'Beer':
                                                drinkImageSrc = beerImage;
                                                break;
                                            default:
                                                break;
                                            }
                                            return (
                                                <img
                                                src={drinkImageSrc}
                                                alt='drinks'
                                                key={tot_index}
                                                className={tot_index === clickedElement ? 'clicked-border':''}
                                                onClick={()=>{ClickableElement(tot_index, i.title)}}
                                                />
                                            );
                                        })}

                                        <div className='price-and-button'>
                                            <p>Price: {item.price}</p>
                                            <button>Select</button>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ItemsList;