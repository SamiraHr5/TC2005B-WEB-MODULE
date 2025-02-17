import Grid from "./components/grid";
import Image from "next/image";
import Link from "next/link"
import Rectangle from "./components/Rectangle";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify center gap-4">
      <Rectangle color="green"/>
      <div className="w-64 h-32 bg-green-500"></div>
      <Link href="/page2" className="text=blue=500 hoover:underline">
      Go to Page 2
      </Link>
      <div className="flex justify-center items-center h-screen">
      <Grid />
    </div>
    </div>
  )
}
