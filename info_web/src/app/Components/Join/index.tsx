import Image from "next/image";

export default function Join() {
    return (
        <div className="lg:grid px-5 lg:grid-cols-2 flex flex-col-reverse">
            <div className="ml-[5%] flex justify-center">
                <Image
                    src={"/join.png"}
                    alt="join"
                    width={500}
                    height={500}
                />
            </div>
            <div className="mt-[10%] lg:mr-[20%] text-center">
                <h1 className="text-[32px] font-bold  text-artisticblue">Join the Sustainable Fashion Movement</h1>
                <p className="text-[16px] mt-6">Ready to make a difference? Join us in revolutionizing the fashion industry by choosing eco-friendly options and supporting a greener future. Sign up to stay updated on our latest collections, events, and more.</p>
                <button className="bg-forestgreen text-[20px] cursor-pointer text-white w-[150px] h-[50px] rounded-[30px] mt-9">Join</button>
            </div>
        </div>
    )
}