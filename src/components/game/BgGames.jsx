import BgGame from "../../../public/bggame.jpg"
import CardGame from "./CardGame"

export default function Games() {
  return (
    <div style={{
      height:'100vh ',
      width:'99vw',
      backgroundImage: `url(${BgGame.src})`,
      backgroundSize:'cover',
      backgroundAttachment:'fixed',
      backgroundRepeat:'no-repeat',
      opacity:'1.5'
    }}>
      <div className="items-center justify-center gap-4 grid font-bold text-5xl text-white pt-40 pb-20">MOST POPULAR GAME</div>

      <div className="flex flex-wrap justify-center	gap-5">
            <CardGame/> 
            <CardGame/> 
            <CardGame/> 
            <CardGame/> 
            <CardGame/> 
            <CardGame/> 
            <CardGame/> 
            <CardGame/> 
        </div>
    </div>
  )
}
