import {useState, useEffect} from 'react';

export default function GiphyForm() {
    const [search, setSearch] = useState("baseball");
    const [imgSrc, setImgSrc] = useState("");
    const [alt, setAlt] = useState("");

    const API = 'lz6ILwu6w3e17yumUl7iottdSBfV6TQV';
    const URL = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API}`;

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API}`)
            .then((res) => res.json())
            .then((data) => {
                setImgSrc(data.data[0].images.original.url);
                setAlt(data.data[0].title)
            })
            .catch((error) => console.log(error))
    }, )

    const getImage = () => {
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                setImgSrc(data.data[0].images.original.url);
                setAlt(data.data[0].title)
            })
            .catch((error) => console.log(error))
    }
    
    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    
    const handleClick = (e) => {
        e.preventDefault();
        getImage();
    }
    
    return (
        <form name="giphySearchForm" className="form">
            <label className="subtitle">Type search item below:</label>
            <input type="text" name="search-term" id="search-term" value= {search} onChange= {handleChange} className="input"></input>
            <button onClick= {handleClick} className="search-button">Search</button>
            <div className="imgContainer">
               {imgSrc && <img src={imgSrc} alt={alt}/>} 
            </div>
        </form>
    );
}

