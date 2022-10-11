import React from "react"
import Button from '../../../components/Button'


export default function Book({item}){
    
    const handleRedirect = () => {
        window.open(item.amazon_product_url, "_blank");
    }  

    return (
        <div>
            <h2>{item.book_details[0].title}</h2>
            <figure><img src="https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg" alt="" /></figure>
            <div>
                <h3>
                    <span>by {item.book_details[0].author}</span>
                </h3>
                <p>{item.book_details[0].description}</p>
                <p>Editora: {item.book_details[0].publisher}</p>
                <p>Rank: {item.rank}</p>
                <Button text={`compre por R$ ${item.book_details[0].price}`}  action={() => handleRedirect()}/>
            </div>
        </div>
    )
}