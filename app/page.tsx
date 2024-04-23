import Image from "next/image";
import TopBar from "@/app/ui/navigation/top-bar"
import CenterBlock from "@/app/ui/landingpage/center-block";
import ParcelTracker from "@/app/ui/landingpage/parcel-tracker";
import Footer from "./ui/navigation/footer";

export default function Home() {
  return (
    <main className="min-h-screen  p-2 ">

      <TopBar/>
      <CenterBlock/>
      <ParcelTracker/>

      <Footer/>
    </main>
  );
}
