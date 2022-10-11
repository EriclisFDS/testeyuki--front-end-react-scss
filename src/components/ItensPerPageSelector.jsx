import React from "react";

export default function ItensPerPageSelector({itensPerPage, action}){
    return (
        <div>
            <span>Exibir </span>
            <select 
                name=""
                id=""
                value={itensPerPage}
                onChange={(e) => action(Number(e.target.value))}
            >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
            </select>
            <span> por vez</span>

        </div>
    )
}