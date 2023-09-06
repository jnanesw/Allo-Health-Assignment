
const JsonData = require('../JsonData/Jsondata.json')

const Categories = ()=>{

    return(
        <div className='categories rounded-md'>
            <div>
                <ul className='all-categories'>
                    <li>All</li>
                        {JsonData.labels.map((item, index)=>{
                            // console.log(item.id)
                            return <li key={index}>{item.id}</li>
                            
                        })}
                </ul>
            </div>
        </div>
    )
}

export default Categories;