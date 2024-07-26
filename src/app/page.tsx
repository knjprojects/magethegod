"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
//import gsap from "gsap";
//import { useGSAP } from "@gsap/react";
//import { ScrollToPlugin } from "gsap/ScrollToPlugin";
//gsap.registerPlugin(ScrollToPlugin);
//gsap.registerPlugin(useGSAP);
import Users from "@/components/flaskcomponents/Users";

import Login from "./login/page";
import { useAuthStore } from "@/utils/zustand/auth.store";
import { useRouter } from "next/navigation";
import Blog from "@/components/Blog";
export default function Home() {
  /*const ScrollToSection = () => {
    // Arrow function to handle scroll
    const handleScroll = () => {
      gsap.to(window, {
        scrollTo: "#section2",
        duration: 1,
        ease: "power2.out",
      });
    };*/
  let auth = useAuthStore();
  const router = useRouter();
  const [message, setMessage]: any = useState("");

  const fetchData = async () => {
    try {
      const response: any = await fetch("/api/init");
      if (response.ok) {
        const message: any = await response.text();
        //const object=parseJSONString(data)
        //setMessage(map['dog']);
        setMessage(message);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();

    if (auth.username == "guest") router.push("/login");
    else {
      router.push("/dashboard");
    }
  }, []);
  return (
    <main className="flex min-h-screen flex-col justify-between w-full">
      <div className="z-10 h-screen">
        {/*<button id="scrollButton">Scroll to Section 2</button>
          <div className="content">
            <section id="section1" className="bg-green-400 h-screen">
              Section 1
            </section>
            <section id="section2" className="bg-red-900 h-screen">
              Section 2
            </section>
            <section id="section3" className="bg-gray-500 h-screen">
              Section 3
            </section>
            
          </div>*/}
        <div>
          <Blog />
        </div>
      </div>
    </main>
  );
}
