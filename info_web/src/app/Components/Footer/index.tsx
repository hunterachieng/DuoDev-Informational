import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-[100%] bg-artisticblue text-slate-200" id="contact">
            <div className="mx-[5%]">
                <h1 className="text-center md:text-xl p-[30px]">©2024 Eco-Threads Hub</h1>
                <hr className="w-[100%] pb-9"/>
                <div className="sm:grid text-center pb-5  md:flex justify-between pr-5 lg:flex justify-between">
                    {/* contact us */}
                    <section className="  pb-5">
                        <ul className="grid justify-center md:text-xl flex  ">
                            <li className="mx-5 text-bold text-3xl mb-5">Contact Us</li>
                            <li><a href="mailto:ecothreads2024@gmail.com">ecothreads2024@gmail.com</a></li>                            
                        </ul>
                    </section>
                    {/*media icons */}
                    <section >
                    <li className=" text-bold text-3xl mb-5 list-none">Follow Us</li>
                        <ul className=" flex justify-center md:flex ">
                            <Link href="https://www.facebook.com/"> <li className="px-2"> <FaFacebookF /></li></Link>
                            <Link href="https://www.linkedin.com/"> <li className="px-2"><FaLinkedinIn /></li></Link>
                            <Link href="https://www.twitter.com/"><li className="px-2"><FaTwitter /></li></Link>
                            <Link href="https://www.youtube.com/"><li className="px-2"><FaYoutube /></li></Link>
                            <Link href="https://www.instagram.com/"><li className="px-2"> <FaInstagram /></li></Link>
                        </ul>
                    </section>
                </div>
             
            </div>
        </footer>

    )
}