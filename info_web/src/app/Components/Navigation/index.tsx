"use client";

import { useState, SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navigationbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  

  const handleLinkClick = (section: SetStateAction<string>) => {
    setActiveLink(section);
  };

  const handleScroll = (sectionId:string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="flex p-2 bg-artisticblue justify-between px-3 items-center  w-full">
      <Image
        src={"/logo.jpeg"}
        width={230}
        height={200}
        alt="Eco-Threads logo"
        className="md:w-300 md:h-300"
      />

      {/* Hamburger Menu for Small Screens */}
      <button
        className="lg:hidden text-white text-3xl focus:outline-none pl-3"
        onClick={toggleMenu}
      >
        {isOpen ? "x" : "☰"}
      </button>

      {/* Full Menu (visible only on larger screens) */}
        <ul className="hidden lg:flex text-xl text-white cursor-pointer text-[24px] pl-3">
          <li className="mx-5 text-[24px]">
          <Link
            href="/" 
           onClick={(e) => { e.preventDefault(); handleScroll('home'); handleLinkClick('/') }}  
          className={`${
            activeLink === "/" ? "text-forestgreen" : "text-white"  
          } hover:text-forestgreen`}
        >
          Home
          </Link>
        </li>

        <li className="mx-5 text-[24px]">
          <Link
            href="#mission"
            onClick={(e) => {e.preventDefault(); handleScroll("mission"); handleLinkClick('#mission') }} 
            className={`${
              activeLink === "#mission" ? "text-forestgreen" : "text-white"
            } hover:text-forestgreen`}
          >
            Mission
          </Link>
        </li>

        <li className="mx-5 text-[24px] hover:text-forestgreen">
          <Link 
          href="#values"
          onClick={(e) => {e.preventDefault(); handleScroll("values"); handleLinkClick('#values') }}
          className={` ${activeLink === "#values" ? "text-forestgreen" : "text-white"}`}
          >Value</Link>
        </li>
        <li className="mx-5 text-[24px] hover:text-forestgreen">
          <Link 
          onClick={(e) => {e.preventDefault(); handleScroll("community");}}
          className={` ${activeLink === "#community" ? "text-forestgreen" : "text-white"}`}
          
          href="#community">Community</Link>
        </li>
        <li className="mx-5 text-[24px] hover:text-forestgreen">
          <Link 
          onClick={(e) => {e.preventDefault(); handleScroll("contact"); handleLinkClick('#contact') }}
          className={` ${activeLink === "#contact" ? "text-forestgreen" : "text-white"}`}
          
          href="#contact">Contact</Link>
        </li>
      </ul>

      {/* Mobile Menu (visible when hamburger is clicked) */}
      {isOpen && (
        <ul className="lg:hidden ease-in absolute top-20 left-0 right-0 bg-artisticblue flex flex-col text-white text-xl p-5 text-[24px]">
          <li className="py-2 text-[24px] hover:text-forestgreen ml-5">
            <Link href="/" onClick={toggleMenu  }>
              Home
            </Link>
          </li>
          <li className="py-2 text-[24px] hover:text-forestgreen ml-5">
            <Link href="#mission" onClick={toggleMenu}>
              Mission
            </Link>
          </li>
          <li className="py-2 text-[24px] hover:text-forestgreen ml-5">
            <Link href="#value" onClick={toggleMenu}>
              Value
            </Link>
          </li>
          <li className="py-2 text-[24px] hover:text-forestgreen ml-5">
            <Link href="#community" onClick={toggleMenu}>
              Community
            </Link>
          </li>
          <li className="py-2 text-[24px] hover:text-forestgreen ml-5">
            <Link href="#contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
