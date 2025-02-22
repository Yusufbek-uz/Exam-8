import {Card} from './card/Card'
import './main.css'
import data from './api.json'

export function Main() {
    return (
        <div className="container">
            <div className="bar">
                <h2>Products</h2>
                <button className='btn'>Move All To Bag</button>
            </div>
            <div className="cards">
               
                
                
                    {data.map(e=>{
                       return    <Card key={e.id} info={e}/>
                    })}
               
            </div>
        </div>
    )
}