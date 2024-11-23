import { useEffect } from 'react'
import './App.css'
//http://www.omdbapi.com/?i=tt3896198&apikey=84ca3bbc
const API_URL = 'http://www.omdbapi.com/?apikey=84ca3bbc'
function App() {
const searchMovie = async (title)=>{
  const response = await fetch(`${API_URL}& s=${title}`);
  const data = await response.json();
  console.log(data);

};
 useEffect(()=>{
  searchMovie("Batman");

 },[])
  return (
    <>
     mine App
    </>
  )
}

export default App

// const API_URL = 'http://www.omdbapi.com/?apikey=84ca3bbc'