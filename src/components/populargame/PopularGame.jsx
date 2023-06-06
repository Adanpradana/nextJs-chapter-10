import React from 'react'
import CardPopular from './CardPopular'
import bgimg from "../../../public/banner4.jpg"
import img1 from "../../../public/game1.jpg"
import img2 from "../../../public/game2.jpg"
import img3 from "../../../public/game3.jpg"
import img4 from "../../../public/game4.jpg"

export default function PopularGame() {
  return (
    <div>
      <div
        
        style={{
        backgroundImage: `url(${bgimg.src})`,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        width: '99vw',
        height: '120vh'
        }}>

        <div className="items-center justify-center gap-4 grid grid-flow-col auto-cols-max font-bold text-5xl text-gray pt-28 pb-20">MOST POPULAR GAME</div>

        {/* Cardgame */}
        <div className="items-center justify-center gap-4 grid grid-flow-col auto-cols-max">
            <CardPopular image={img1} title='Super Adventure Quest' description='Embark on an epic quest filled with danger and treasures in this action-packed adventure game'/>
            <CardPopular image={img2} title='Galactic Warfare' description='Join the intergalactic battle and fight against enemy spaceships in this intense sci-fi shooter.'/>
            <CardPopular image={img3} title='Fantasy Realms' description='Immerse yourself in a mystical world of magic and mythical creatures in this fantasy role-playing game.'/>
            <CardPopular image={img4} title='Space Explorer' description='Embark on a space exploration journey and discover new planets and civilizations in this captivating game.'/>  
        </div>
        </div>
    </div>
  )
}
