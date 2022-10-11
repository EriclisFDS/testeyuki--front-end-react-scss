import React from "react";
import Button from "./Button";

export default function Pagination({pages, setCurrentPage}){
    return (
        <>
            {Array.from(Array(pages),(_, index) => {
                return <Button value={index} text={index + 1} action={setCurrentPage} />
            })}
        </>
    )
}