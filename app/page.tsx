
"use client"
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/common/navbar";
import About from "@/components/sections/about/pages";
import Service from "@/app/service/page";
import Footer from "@/components/common/footer";
import AboutDemo from "./AboutDemo";
export default function Home() {

  const api = ()=>{
    const api = process.env.API_BASE_URL;
        console.log(api);

  }
  return (
    <main>
      <About />
       <Service />
       {/* <AboutDemo /> */}
      <section className="h-screen bg-white dark:bg-black"></section>
      <section className="h-screen bg-white dark:bg-black"></section>
      <Footer />
    </main>
  );
}
