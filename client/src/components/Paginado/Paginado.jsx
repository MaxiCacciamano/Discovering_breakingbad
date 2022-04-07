import react from "react";

export default function Paginado({charactersPerPage, allCharacters, paginado}){
    const pageNumbers = []

    for(let i=0;i<=Math.ceil(allCharacters/charactersPerPage);i++){
        pageNumbers.push(i+1)
    }

    return(
        <nav>
            <ul >
                {pageNumbers && pageNumbers.map((number) => (
                    <li  key={number}>
                         <a href="#/" onClick={()=>paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )

}