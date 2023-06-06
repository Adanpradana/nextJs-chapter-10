import bgimg from "../../public/banner3.jpg"
import { Button } from "@material-tailwind/react";

export default function Banner() {
  return (
    <div>
        <section>
            <div className="text-center"
                style={{
                backgroundImage: `url(${bgimg.src})`,
                backgroundSize:'cover',
                backgroundAttachment:'fixed',
                backgroundRepeat:'no-repeat',
                width: '99vw',
                height: '100vh'
                }}>
            <div class="grid grid-cols-3 gap-4 items-center pt-44">
                <div>{/* grid */}</div>
                <div>
                <h1 className="font-bold text-5xl text-black pt-20 pb-8">Alpha Centaury</h1>
                <p className="font-medium text-black pb-5">Class aptent taciti sociosqu ad litora torquent per conubia, per inceptos himenaeos. Quisque gravida eu lacus et consequat. Interdum et malesuada fames ac ante, ipsuprimis in faucibus mollis.</p>
                <Button className="mx-3 rounded-full bg-neutral-800">More Info</Button>
                <Button className="rounded-full bg-warning-1000 inline-block border-2 border-neutral-800 text-black">View Game</Button>
                </div>
                <div>{/* grid */}</div>
            </div>
            </div>
        </section>
    </div>
  )
}
