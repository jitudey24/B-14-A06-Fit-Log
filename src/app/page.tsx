import Image from "next/image";
import Banner from "./components/homePage/Banner";
import Library from "./components/homePage/Library";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Library></Library>
    </div>
  );
}
