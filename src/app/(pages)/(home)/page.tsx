import Catering from "@/app/(mainsite)/components/homepage/Catering/Catering";
import Delicious from "@/app/(mainsite)/components/homepage/Delicious/Delicious";
import Good from "@/app/(mainsite)/components/homepage/Good/Good";
import Header from "@/app/(mainsite)/components/homepage/Header/Header";
import Icons from "@/app/(mainsite)/components/homepage/Icons/Icons";
import ServiceArea from "@/app/(mainsite)/components/homepage/ServiceArea/ServiceArea";
import Sweet from "@/app/(mainsite)/components/homepage/Sweet/Sweet";


export default function Home() {
  return (
    <>
      <Header />
      <Delicious />
      <Catering />
      <Icons />
      <Good />
      <Sweet />
      <ServiceArea />
    </>
  )
}
