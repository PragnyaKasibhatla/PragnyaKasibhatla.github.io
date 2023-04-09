
import './index.css';
import { albums } from "./data";
function Album(props){
    console.log(props);
    if(!props.open){
        return null;
    }
    return (
        <div className="albumDialog">
          
          {/* {albums.map((item,i)=>(
            <audio controls>
                <source src={item[props.selected].songs[i]} type="audio/mpeg"></source>
            </audio>
          ))} */}
            {/* <audio controls>
                <source src={albums[props.selected].songs[0]} type="audio/mpeg"></source>
            </audio>
          <h1>{props.albumSelected}</h1>
          <h1>{albums[props.Selected].songs[0]}</h1> */}
          {/* <h1>{props.albumSelected.songs}</h1> */}
          <img className="close" alt="close" src="../assets/arrows/close.svg" onClick={props.onClose}></img>
          <img class="albumCover" alt="albumCover" src={albums[props.albumSelected-1].coverImg}></img>
          <div className="songs">
          {
            albums[props.albumSelected-1].songs.map((song)=>(
                <div className="song">
                  <p>{song.name}:</p>
                  <audio controls>
                    <source src={song.src}></source>
                  </audio>
                </div>
            ))
          }
          </div>
        </div>
      );
}

export default Album;