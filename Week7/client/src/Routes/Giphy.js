import axios from 'axios';
import {useState, useEffect} from 'react';

function Giphy({initialQuery}) {
    const [imgSrc, setImgSrc] = useState("");
    const [alt, setAlt] = useState("");

    let userQuery = initialQuery;
    const API = 'kI3wgVHR0SXFgtmDdPNvOaPGoJsgpTet';


    useEffect(() => {
        getImage(userQuery);
    }, [userQuery]);

    const getImage = (userQuery) => {
        axios.get(`https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(userQuery)}&api_key=${API}`)
            .then((res) => {
                setImgSrc(res.data.data[0].images.original.url);
                setAlt(res.data.data[0].title)
            })
            .catch((error) => console.log(error))
    }
    
    const handleClick = (e) => {
        e.preventDefault();
        userQuery = e.target.previousElementSibling.value;
        getImage(userQuery);
    }
    
    return (
        <form id="giphySearchForm">
            <label className="subtitle">Enter a word of phrase: </label>
            <input type="text" name="search-term" id="search-term" className="input" placeholder="search giphy"></input>
            <button onClick= {handleClick} className="search-button">Search</button>
            <div className="imgContainer">
               {imgSrc && <img src={imgSrc} alt={alt}/>} 
            </div>
        </form>
    );
}

export default Giphy;