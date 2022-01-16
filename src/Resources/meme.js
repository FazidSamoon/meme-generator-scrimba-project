import React, { useEffect, useState } from "react";
// import memeData from "../memeData";


export default function Meme(){
    const [meme, setMeme] = useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    },[])

    

    // const [allMemeImages, setAllMemeImages] = useState(memeData)
    function getMemeImage(e){
        
        
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        
        const imageUrl = allMemes[randomNumber].url

        setMeme(prevState => {
            return{
                ...prevState,
                randomImage: imageUrl,
            }
        });
        e.preventDefault();
        
        

    }

    function handleChange(event){
        const{name , value } = event.target
        setMeme(prevState => {
            return{
                ...prevState,
                [name] : value
            }
        });
        // setMeme(prevMeme => ({
        //     ...prevMeme,
            
        // }))
    }

    return(
        
        <main>
            
            <form className="form">
                <input 
                    type="text" 
                    className="form-input" 
                    placeholder="top-text"
                    name="topText"
                    value= {meme.topText}
                    onChange={handleChange}
                />

                <input 
                    type="text" 
                    className="form-input" 
                    placeholder="bottom-text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />

                <button 
                    className="form-button" 
                    onClick={getMemeImage}
                >
                    Get a new meme image
                </button>

            </form>
            <div className="image-container">
                <img src={meme.randomImage} alt="memeImage" className="meme-image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            
        </main>
    )
}