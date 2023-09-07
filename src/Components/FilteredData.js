import vineImage from '../assets/vine.jpg'; 
import juiceImage from '../assets/juice.jpg';
import beerImage from '../assets/beer.jpg';
import "./ItemsList.css"
import { useState } from 'react';

const JsonData = require('../JsonData/Jsondata.json')

const FilteredData = ({ CategoryName, setTotalPrice }) => {
    const [clickedElement, SetClickedElement] = useState("");
    const [titleName, SetTitleName] = useState("");

    const ClickableElement = (elementId, TitleName, tot_price) => {
        setTotalPrice(tot_price)
        console.log("Price from filteredData: ", tot_price)
        SetTitleName(TitleName)
        SetClickedElement(elementId)
    }

    const filteredItems = JsonData.meals.filter((item) => {
        return item.labels[0] === CategoryName || item.labels[1] === CategoryName;
    });

    return (
        <div>
            {filteredItems.map((item, index) => {
                return (
                    <li key={index}>
                        <div>
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

                                    <p>Select Your Drink: <mark>{item.id === clickedElement.slice(0, 5) ? titleName : ""}</mark></p>

                                    <div>
                                        <div className='drink-img'>
                                            {
                                                item.drinks.map((i, index2) => {
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
                                                    let total_price = item.price + i.price;
                                                    return (
                                                        <img
                                                            src={drinkImageSrc}
                                                            alt='drinks'
                                                            key={tot_index}
                                                            className={tot_index === clickedElement ? 'clicked-border' : ''}
                                                            onClick={() => { ClickableElement(tot_index, i.title, total_price) }}
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
                        </div>
                    </li>
                );
            })}
        </div>
    )
}
export default FilteredData;
