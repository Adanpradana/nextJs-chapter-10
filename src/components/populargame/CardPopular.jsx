import Image from "next/image"

export default function CardPopular({title, description, image}) {
  return (
    <div>
        <div className="card w-96 glass">
          <figure>
          <Image src={image} width={400} alt="car!"/>
          </figure>
          <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p>{description}</p>
              <div className="card-actions justify-end">
              <button className="btn btn-primary">View More</button>
              </div>
          </div>
        </div>
    </div>
  )
}
