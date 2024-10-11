import React from 'react'
import dishes from '../Dishdata'
import Dish from '../components/Dish'

export default function HotelScreen() {
  return (
    <div>
        <img 
        src="https://www.franchiseinfo.ca/wp-content/uploads/2017/03/KFC_copy.jpg" alt="hotel-banner" style={{width: '100%', height: '500px'}}/>
        <div className="hotel" style={{marginLeft: '25px'}}>
        <h1 style={{fontSize : '50px'}}>KFC</h1>
        <p>Neelambur</p>
        <p>15 - 20 mins</p>
        <p>Burgers, Fast Food, Rolls & Wraps</p>
        <h1 style={{marginTop: '25px', fontSize:' 30px'}}>Recipes</h1>
        {
            dishes.map(dish=>{
                return(
                    <div>
                        <Dish dish={dish}/>
                    </div>
                )
                
            }

            )
        }
        </div>
        
    </div>

  )
}
