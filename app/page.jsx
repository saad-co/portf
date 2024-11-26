import Screen01 from "@/components/Screen01/Screen01";
import Screen02 from "@/components/screen02/Screen02";
import Screen03 from "@/components/screen03/Screen03";
import Screen04 from "@/components/screen04/Screen04";
import Screen05 from "@/components/screen05/Screen05";

export default function Home() {
  return (
    <div>
      <Screen01 />
      <Screen02 />
      {/* <Screen03 /> */}
      <Screen04 />
      <Screen05/>
    </div>
  );
}
