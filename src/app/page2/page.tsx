import Link from "next/link"
import Rectangle from "../components/Rectangle";

export default function Page2() {
  return (
    <div className="min-h-screen flex flex col items-center justify center gap-4">
      <Link href="/" className="text=blue=500 hoover:underline">
      Go to Home
      </Link>
      <div className="w-64 h-32 bg-green-500"></div>
    </div>
  )
}