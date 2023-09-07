import { useState } from 'react'
import ItemsList from './ItemsList'
import FilteredData from './FilteredData'
const JsonData = require('../JsonData/Jsondata.json')

const Categories = ()=>{
    const [filtered, SetFiltered] = useState("")
    const [clicked, SetClicked] = useState(false)
    const Update = (value)=>{
        console.log("Clicked Value: ", value)
        if(value === "All"){
            SetClicked(false)
            return;
        }
        SetClicked(true)
        SetFiltered(value)

    }
    return(
        <div className='categories rounded-md'>
            <div>
                <ul className='all-categories'>
                    <li onClick={()=>{ Update("All") }}>All</li>
                        {JsonData.labels.map((item, index)=>{
                            return <li key={index} onClick={()=>{ Update(item.id) }} >{item.id}</li>
                            
                        })}
                </ul>
            </div>
            {
                clicked?(
                    <div className='itemsList rounded-md'>

                        <ul className='meals-list'>
                            {
                                JsonData.meals.map((item1, index1)=>{
                                    
                                    return item1.labels.map((item2, index2)=>{
                                        console.log("Items inside the 2nd Map: ", item2," and, ", filtered)
                                        return(item2 === filtered ? ( <div key={index2}>{console.log(true," True from inside")}<FilteredData CategoryName={item2} /></div>):(null))
                                        
                                    })
                                })
                            }
                        </ul>
        
                    </div>
                ):(
                    <div className='mt-[5%] border-black-500 border-t-2'>
                        <ItemsList />
                    </div>
                )
            }

        </div>
    )
}

export default Categories;