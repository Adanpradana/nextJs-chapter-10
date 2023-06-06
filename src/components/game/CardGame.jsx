
export default function CardGame() {
  return (
    <div>
        <div className="card w-96 glass">
          <figure>
          {/* <Image src={image} width={400} alt="car!"/> */}
          </figure>
          <div className="card-body">
              <h2 className="card-title">This Is Tittle</h2>
              <p>This Is Description</p>
              <div className="card-actions justify-end">
              <button className="btn btn-primary">View More</button>
              </div>
          </div>
        </div>
    </div>
  )
}
