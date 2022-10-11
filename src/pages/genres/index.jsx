import React, {useState, useEffect} from "react";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import GenresList from "./GenresList";
import Axios from "axios";
import ItensPerPageSelector from "../../components/ItensPerPageSelector";
import Pagination from "../../components/Pagination";

const apiKey = "api-key=gzpwwScZ9MSGS6aSRTvTh84c97VGD2qG";

export default function Genres(){
    
    const [mainContent, setMainContent] = useState([]);
    const [busca, setBusca] = useState('');
    const lowerBusca = busca.toLowerCase();
    const contentFiltered = mainContent.filter( item => {
        return item.list_name_encoded
                .toLowerCase().startsWith(lowerBusca);
    });
    const [loading, setLoading] = useState(false);

    const [itensPerPage, setItensPerPage] = useState(5);
    const [currentPage, setCurrentPage] =useState(0);

    const pages = Math.ceil(contentFiltered.length / itensPerPage);
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentItens = contentFiltered.slice(startIndex, endIndex);

    const getMainContent = () => {
        const url = `https://api.nytimes.com/svc/books/v3/lists/names.json?${apiKey}`

        setLoading(true);

        Axios.get(url)
            .then(res => {
                setMainContent(res.data.results);
                setLoading(false);
            })
            .catch(err => {
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
            <div className="genres">
                <div>
                    <PageTitle title="Generos"/>
                    <ItensPerPageSelector itensPerPage={itensPerPage} action={setItensPerPage} />
                </div>
            </div>
            <GenresList currentItens={currentItens} loading={loading} />
            <Pagination pages={pages} setCurrentPage={setCurrentPage}/>
        </div>
    )
}