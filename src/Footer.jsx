import React from 'react'
import './Footer.css';





const footer = () =>  {

    let count = 1;

   return (
    <div className='App'>
        <h2 style={{textAlign: 'center', color: 'green', display : count == 1 ? 'none' : 'block'} }>Test</h2>

        {/* <h2 style={{textAlign: 'center', color: 'blue', display : count == 2 ? 'none' : 'block'} }>Test</h2> */}

    </div> 
   )
   
}



export default footer;

// const obj = {
//     1: 1,
//     2: 2,
//     3: 3
// };

// if (Object.keys(obj) == Object.values(obj)) {
//     console.log('Равны')
// } else {
//     console.log('не равны')
// }

// Object.keysпреобразует ключи в строку ["1", "2", "3"], 

// Object.values дает числовые значения[1, 2, 3]. 


function Car () {
    this.numberOfWheels = 4;
    return  {
        numberOfWheels: 3
    };
}

const car = new Car()
console.log(car.numberOfWheels);


