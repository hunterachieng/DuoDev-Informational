import Image from "next/image";

export default function Join() {
    return (
        <div className="lg:grid  lg:grid-cols-2 flex flex-col-reverse">
            <div className="ml-[5%] flex justify-center">
                <Image
                    src={"/join.png"}
                    alt="join"
                    width={500}
                    height={500}
                ></Image>
            </div>
            <div className="mt-[10%] lg:mr-[20%] text-center">
                <h1 className="text-4xl text-artisticblue">Join the Sustainable Fashion Movement</h1>
                <p className="text-xl mt-6">Ready to make a difference? Join us in revolutionizing the fashion industry by choosing eco-friendly options and supporting a greener future. Sign up to stay updated on our latest collections, events, and more.</p>
                <button className="bg-forestgreen text-2xl cursor-pointer text-white w-[200px] h-[50px] rounded-full mt-9">Join</button>
            </div>
        </div>
    )
}