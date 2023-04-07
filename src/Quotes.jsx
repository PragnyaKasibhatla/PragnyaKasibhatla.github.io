import React, { useEffect, useState } from 'react';
import './index.css';
import { quotes } from './data';
import { images } from './data';
function Quotes(){
    const [index,setIndex] = new useState(0);
    const [img,setImg] = new useState("../assets/bg/5.jpg");
    function nextQuote(){
        console.log(index);
        if(index > 13){
            setIndex(0);
            console.log(index);
        }
        else{
            setIndex(index + 1);
        }
        console.log(index);
        setImg(images[Math.floor(Math.random() * 12)]);
        document.body.style.backgroundImage = `url('${img}')`;
    }
    function prev(){
        if(index < 1){
            setIndex(13);
        }
        else{
            setIndex(index - 1);
        }
        console.log(index);
        setImg(images[Math.floor(Math.random() * 10)]);
        document.body.style.backgroundImage = `url('${img}')`;
    }
    useEffect(()=>{
    
    });
    return (
        <div>
        {/* <button className='button' onClick={()=> alert("HIII")}></button> */}
        <img className='prev' alt="prev" src="../assets/arrows/p.svg" onClick={prev}></img>
        <div className='Container'>
            <p className='Quote'>{quotes[index].quote}</p>
            <p className='By'>- {quotes[index].quote_by}</p>
        </div>
        <img className='next' alt="next" src="../assets/arrows/n.svg" onClick={nextQuote}></img>

        {/* <h1>{index}</h1> */}
        </div>
        );
}

export default Quotes;