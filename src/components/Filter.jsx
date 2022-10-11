import React from "react"
import { useState } from "react"

export default function Filter({busca, setBusca}){
    return (
        <div>
            <input 
                type="text" 
                value={busca} 
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Pesquise aqui..."
            />
        </div>
    )
}