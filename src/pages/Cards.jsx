import { useState , useEffect } from 'react'
import Card from '../components/Card'
import { useParams } from 'react-router-dom'
import palabras from '../../src/assets/Palabras.json'

function Cards() {

  const {players} = useParams()
  
  let words =[]

  const wordForArtis = palabras.palabras[Math.floor(Math.random() * palabras.palabras.length)];

  let wordForFake = palabras.palabras[Math.floor(Math.random() * palabras.palabras.length)];

  while(wordForArtis == wordForFake){
    wordForFake = palabras.palabras[Math.floor(Math.random() * palabras.palabras.length)];
  }

  for (var i = 0; i <= players; i++) {
    words.push(wordForArtis)
  }
  
  const randomPositionForFake = Math.floor(Math.random() * players)

  words[randomPositionForFake] = wordForFake


  return (
    <>
      <div className="container-fluid text-center">

        {words.map(
          (word , i) => (
            <Card 
            word={word}
            index ={i}
            />
          )
        )}

      </div>
    </>
  )
}

export default Cards
