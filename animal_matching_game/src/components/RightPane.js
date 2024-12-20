
import React from "react"
export default function RightPane({animals,AnimalClick}){
    return(
        <div className="right">
            <h3>Select the Animal</h3>
            <div className="img">
           {
            animals.map((animal)=>(
               
                <img  key={animal.name} 
                style={{ margin: '13px' }} 
                src={require(`./fig/${animal.img}`)} 
                alt={animal.name} 
                onClick={()=>AnimalClick(animal)} />
            ))
           } 
          </div>
        </div>

    )
}