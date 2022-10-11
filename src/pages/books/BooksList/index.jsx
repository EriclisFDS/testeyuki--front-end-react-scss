import React from "react"
import Book from "../Book"

export default function BooksList({currentItens, loading}){
    return (
        <section>
            {!loading ? currentItens.map(item => (
                <Book item={item}/> 
            )): 
                <p>Loading...</p> 
            }
        </section>
    )
}