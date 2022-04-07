// import React, { useEffect, useState } from "react";
// import Card from "./Card";
// import { useSelector } from "react-redux";

// export function Cards(){
//     const characters = useSelector(state=>state.characters);
//     const [currentPage, setCurrenPage] = useState(0);

//     const firstpage = ()=>{
//         setCurrenPage(0)
//     }

//     let nextPage = ()=>{
//         if(characters.length<=currentPage + 6){
//             setCurrenPage(currentPage);
//         }else {setCurrenPage(currentPage + 6)}
//     };


//     let prevPage = ()=>{
//         if(currentPage < 9 ){
//             setCurrenPage(0);
//         }else{setCurrenPage(currentPage - 6)}
//     };

//     const lastPage = () =>{
//         setCurrenPage(characters.length - 6);
//         console.log(currentPage);
//     }


//     useEffect(()=>{
//         firstpage();
//     },[characters])

//     const filteredc = characters.slice(currentPage, currentPage + 6);

//     return (
            
//             <div>

//             <button onClick={firstpage}>{"<<"}</button>
//             <button onClick={prevPage}>{"<"}</button>
//             <button onClick={nextPage}>{">"}</button>
//             <button onClick={lastPage}>{">>"}</button>

//             {
//             filteredc.map((e)=>{
//                 return(
//                     <Card
//                     id={e.id}
//                     name={e.name}
//                     nickname={e.nickname}
//                     image={e.image}
//                     />
//                 )
//             })
//             }
                
            
//             </div>
       
//    )

// }

// export default Cards;