import Image from "next/image";

export default function Mission() {
    return (
        <div className="grid  lg:grid-cols-2 mt-8 gap-10 place-items-center lg:place-items-stretch jusitfy-between" id="mission">
            <div className="lg:mt-[15%] md:pl-[3%] pl-3 mt-5 ">
                <h1 className="sm: text-bold md:text-5xl text-3xl text-center   lg:mt-[10%] pb-5 mr-8 text-artisticblue ">Mission</h1>
                
                <p className="md:text-xl text-[16px] text-artisticblue pr-4 ">
                    At Eco-Threads Hub, our mission is to promote sustainable fashion
                    and reduce textile waste. We connect second-hand sellers
                    with recycling companies, fostering a circular economy for
                    clothing and accessories that benefits both the planet and the
                    community.
                </p>
            </div>
            <div>
                <Image
                    src={"/picture2.jpeg"}
                    width={700}
                    height={500}
                    alt="mission"
                ></Image>
            </div>
        </div>
    )
}   