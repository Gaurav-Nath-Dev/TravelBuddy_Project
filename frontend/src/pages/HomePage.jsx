import { Transition } from "../components/Transition";
import { Navbar } from "../components/Navbar";

export const HomePage = () => {
  return (
    <>
    <Navbar />
    <div className="w-full h-[100svh] flex justify-center items-center">
      <h1 className="text-8xl font-black" >Home Page</h1>
    </div>
    </> 
  );
}