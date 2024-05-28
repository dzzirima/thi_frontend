"use client"
import TopBar from "@/app/ui/navigation/top-bar"
import CenterBlock from "@/app/ui/landingpage/center-block";
import ParcelTracker from "@/app/ui/landingpage/parcel-tracker";
// import Footer from "./ui/navigation/footer";
import Footer from "@/app/ui/navigation/footer";

export default function Home() {
  return (
    <div className="min-h-screen  p-2 pb-2 ">

      <TopBar/>
      <CenterBlock/>
      <ParcelTracker/>
      <Footer/>
    </div>
  );
}
