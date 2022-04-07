import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getcharacter} from "../../actions/index"
import Nav from "../Nav/Nav"
import Paginado from "../Paginado/Paginado"
import Card from "../Characters/Card"
// import Cards from "../Characters/Cards"

export function Home(){
    const allCharacters = useSelector((state =>state.characters))
    const [currentPage, setCurrenPage]=useState(1) //La pagina actual sera 1
    const [charactersPerPage, setCharactersPerPage] = useState(6) //Seria cuantos personajes queremos por pagina (6)



    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getcharacter());
    },[dispatch]);


    const indexOfLastCharacter = currentPage * charactersPerPage; //6 indice del ultimo personaje
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage //indice del primer personaje
    const currentCharacters = allCharacters.slice(indexOfFirstCharacter, indexOfLastCharacter);// aca me devuelve un array con los personajes entres primer y ultimo 


    const paginado = (pageNumber)=> {
        setCurrenPage(pageNumber);
    }
        
    return(
        <div>
            <Nav/>

           {currentCharacters?.map(e => { //mapeamos renderizamos la pagina seleccionada (1, 2 ...) 
                    return(
                        <div>
                        <Link to={"/home/" + e.id}>
                            <Card name = {e.name} img= {e.img } nickname = {e.nickname} key={e.id}/>
                        </Link>
                        </div>
                    );
                })
            }
            <Paginado 
            charactersPerPage={charactersPerPage}
            allCharacters={allCharacters.length}
            paginado={paginado}
            />
             
        </div>
    )
}
export default Home;