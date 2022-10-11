import React from "react"
import Filter from './Filter'
import { Link } from 'react-router-dom'


export default function Header({busca, setBusca}){
    return (
        <header>
            <div>
                <Link to="/" ><h1 className="link">Bloom Books</h1></Link>
                <Filter 
                    busca={busca}
                    setBusca={setBusca}
                    />
                estrela
            </div>
        </header>
    )
}