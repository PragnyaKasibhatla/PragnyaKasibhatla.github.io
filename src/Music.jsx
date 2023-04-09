import React, { useEffect , useState } from "react";
import './index.css';
import { albums,songs } from "./data";
import Album from "./Album";
function Music(){
    const [dialogOpen, setDialogOpen] = useState(false);
    const [albumSelected, setAlbumSelected] = useState(null);
    const [isPlaying, setIsPlaying] = useState(true);
    useEffect(()=>{
        document.body.style.backgroundColor = "black"
        document.body.style.backgroundImage = "";
        const index = Math.floor(Math.random() * songs.length);
        const audio = new Audio(songs[index]);
        console.log("audio: ",audio);
        console.log(songs[Math.floor(Math.random(12))]);
        audio.loop = true;
        audio.autoplay = true;
        if(isPlaying){
            audio.play();
        } else{
            audio.pause();
        }
        return ()=>{
            audio.pause();
        };
    }, [isPlaying]);

    function handlePlay(){
        setIsPlaying(!isPlaying);
    }

    function handleAlbumClick(albumIndex){
        setDialogOpen(!dialogOpen);
        setAlbumSelected(albumIndex);
        console.log(albumIndex);
    }
    
    return <div className="MusicContainer">
                    {albums.map((album,index) => (
                        <div key={index+1} className="cover">
                            <img src={album.coverImg} alt="BTS" style={{width:"200px",height:"200px"}} onClick={()=>{handleAlbumClick(index+1)}}/>
                            {albumSelected && <Album open={dialogOpen} onClose={()=>setDialogOpen(!dialogOpen)} albumSelected={albumSelected}></Album>}
                        </div>))}
                    {isPlaying ? <img className="speaker" src="../assets/arrows/speakerON.svg" onClick={handlePlay} alt="audio"></img>: <img className="speaker" src="../assets/arrows/speakerOFF.svg" onClick={handlePlay} alt="audio"></img>}
            </div>
}

export default Music;