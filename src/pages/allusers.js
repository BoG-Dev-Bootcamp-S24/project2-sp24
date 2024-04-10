import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar.js";
import SideBar from "@/components/Sidebar";
import TrainingLog from "@/components/TrainingLog";
import TopBanner from "@/components/TopBanner";


export default function allUsers() {
    const currentUser = "Nathan";
    return (
        <div className="bg-white w-[100%] h-[100%] flex flex-col relative">
          <Navbar searchBar={true}/>
          <div className="w-full h-full flex flex-row">
            <SideBar adminAccess={true} currentPage={"allusers"} user={currentUser}/>
            <div className="flex flex-col w-full h-full">
                <TopBanner formStatusProp={null} setFormStatusProp={null} title={"All users"}/>
            </div>
          </div>
        </div>
    )
}