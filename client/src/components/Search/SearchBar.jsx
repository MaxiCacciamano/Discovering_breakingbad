import React from "react";
import {useState} from 'react';
import { useDispatch } from "react-redux";
import {getNameCharacters} from '../../actions/index'


export default function SearchBar(){
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleInpuChange(e){
        e.preventDefault();
        setName(e.target.value);
        console.log(name)
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getNameCharacters(name));
    }

   return(
    <div>
        <input type = 'text'
            placeholder = "Buscar ..." 
            onChange = {(e) => handleInpuChange(e)}
        />
        <button type = 'submit' onSubmit={(e)=>handleSubmit(e)}>Buscar</button>
    </div>
)}