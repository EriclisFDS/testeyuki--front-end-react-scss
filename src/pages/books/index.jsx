import React, {useState, useEffect} from "react";
import Header from "../../components/Header"
import PageTitle from "../../components/PageTitle"
import BooksList from "./BooksList"
import Axios from "axios";
import ItensPerPageSelector from "../../components/ItensPerPageSelector";
import Pagination from "../../components/Pagination";
import {useParams} from "react-router-dom";

const apiKey = "api-key=gzpwwScZ9MSGS6aSRTvTh84c97VGD2qG";

export default function Books(){
        
    const [mainContent, setMainContent] = useState([]);
    const [busca, setBusca] = useState('');
    const lowerBusca = busca.toLowerCase();
    const contentFiltered = mainContent.filter( item => {
        return item.book_details[0].title
                .toLowerCase().startsWith(lowerBusca);
    });
    const [loading, setLoading] = useState(false);

    const [itensPerPage, setItensPerPage] = useState(5);
    const [currentPage, setCurrentPage] =useState(0);

    const pages = Math.ceil(contentFiltered.length / itensPerPage);
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentItens = contentFiltered.slice(startIndex, endIndex);

    const { genreId: genreName  } = useParams();

    console.log("useParams()",useParams())

    const getMainContent = () => {
        const url = `https://api.nytimes.com/svc/books/v3/lists.json?list=${genreName}&${apiKey}`

        setLoading(true);

        Axios.get(url)
            .then(res => {
                console.log("res", res);
                setMainContent(res.data.results);
                setLoading(false);
            })
            .catch(err => {
                console.log("err", err);
                setLoading(false);
            })
    }

    useEffect(() => {
        getMainContent()
    },[]);

    useEffect(() => {
        setCurrentPage(0)
    },[itensPerPage, busca]);
    
    return (
        <div>
            <Header
                busca={busca}
                setBusca={setBusca} 
            />
            <PageTitle title="Livros"/>
            <ItensPerPageSelector itensPerPage={itensPerPage} action={setItensPerPage} />
            <BooksList currentItens={currentItens} loading={loading} />
            <Pagination pages={pages} setCurrentPage={setCurrentPage}/>
        </div>
    )
}