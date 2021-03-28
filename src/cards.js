import React from 'react';
import './cards.css'

const arrayDatas=[
    {id:123 ,imageUrl :"./product-images/load_more_img1.png" , price :600 ,title: "Lorem Impus1" , desc:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."},
    {id:124 ,imageUrl :"./product-images/load_more_img2.png" , price :580 ,title: "Lorem Impus2" , desc:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."},
    {id:125 ,imageUrl :"./product-images/load_more_img5.png" , price :570 ,title: "Lorem Impus3", desc:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." },
    {id:126 ,imageUrl :"./product-images/load_more_img6.png" , price :580 ,title: "Lorem Impus4" , desc:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."},
    {id:127 ,imageUrl :"./product-images/load_more_img2.png" , price :580 ,title: "Lorem Impus2" , desc:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."},
    {id:128 ,imageUrl :"./product-images/load_more_img5.png" , price :570 ,title: "Lorem Impus3", desc:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." }

];
class cards extends React.Component{  
    
    render(){
        return( 
            <div>
               <label>Min Value</label>    
               <input />
               <label>Max Value</label>    
               <input onChange={this.filterContent}/>
                {arrayDatas.map(item =>(
                    <div className="card" key={item.id} >
                    <img src={item.imageUrl} alt="img"/>
                    <h2 className="item_title">{item.title}</h2> 
                    <p className="item_price"> <strong>€ {item.price}</strong> </p>
                    <p>{item.desc}</p>
                    <button>Add to Cart</button>                   
                    </div>
                    
                ))}  
            </div>         
        )
    };

};  

export default cards;
