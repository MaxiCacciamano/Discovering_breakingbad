import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getcharacter, filterCharactersByStatus, orderByName, filterCreated} from '../../actions/';
import {Link} from 'react-router-dom';
import SearchBar from '../Search/SearchBar'
import Card from "../Characters/Card"

export default function Home(){
    const dispatch = useDispatch() //hooks
    const allCharacters = useSelector((state =>state.characters))
    const [order, setOrder]=useState('')
    const [currentPage, setCurrenPage]=useState(1) //La pagina actual sera 1
    const [charactersPerPage, setCharactersPerPage] = useState(6) //Seria cuantos personajes queremos por pagina (6)

    useEffect(()=>{
        dispatch(getcharacter())
    },[dispatch])


    function handleClick(e){
        e.preventDefault()
        dispatch(getcharacter())
    }

    function handleSort(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrenPage(1);
        setOrder(`Ordenado y listo ${e.target.value}`);
    }

    function handleFilterStatus(e){
        dispatch(filterCharactersByStatus(e.target.value))
    }

    function handleFilterCreated (e){
        dispatch(filterCreated(e.target.value))
    }


    return (
        <div>
            <Link to="/character">Crear personaje</Link>
            <h1>Breaking bad</h1>
            <button onClick={e=>handleClick(e)}>voler a cargar personajes</button>
            {/*resetear los personajes*/ }
            <div>
                {/*Filtros*/}
                <select onChange={e=>handleSort(e)}>
                    <option value="asc">Ascendente</option>
                    <option value="desc">Descendente</option>
                </select>
                <select onChange={e=>handleFilterStatus(e)}>
                    {/* filtrar por estado (status) */}
                    {/* el value tiene q ser el mismo q los que trae la api */}
                    <option value="All">Todos</option>
                    <option value="Alive">Vivos</option>
                    <option value="Deceased">Muertos</option>
                    <option value="Presumed Dead">Probablemente muerto</option>
                    <option value="Unknown">Desconocido</option>
                </select>
                <select onChange={e=>handleFilterCreated(e)}>
                    <option value="All">Todos</option>
                    <option value="created">Creados</option>
                    <option value="api">Existente</option>
                </select>
                <SearchBar/>

                {/* {currentCharacters?.map(e => { //mapeamos renderizamos la pagina seleccionada (1, 2 ...) 
                    return(
                        <div>
                        <Link to={"/home/" + e.id}>
                            <Card name = {e.name} img= {e.image } nickname = {e.nickname} key={e.id}/>
                        </Link>
                        </div>
                    );
                })
            } */}
            
            </div>
        </div>
    )
}