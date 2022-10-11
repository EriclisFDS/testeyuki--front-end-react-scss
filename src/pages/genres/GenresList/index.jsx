import React from "react"
import {Link} from "react-router-dom";

export default function GenresList({currentItens, loading}){
    return (
       <table>
            <tbody>
                {!loading ? currentItens.map(item => (
                    <tr>
                        <td>
                            <Link to={`/${item.list_name_encoded}/books`}>
                                {item.display_name}
                            </Link> 
                            {item.updated}
                        </td>
                        <td>Ultima publicação: {item.newest_published_date}</td>
                        <td>Publicação mais antiga: {item.oldest_published_date}</td>
                    </tr>
                )): 
                    <tr>
                        <td collSpan="3" >Loading...</td>
                    </tr>
                }
            </tbody>
       </table>
    )
}