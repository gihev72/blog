import BigTitle from "./components/BigTitle";
import RecentPost from "./components/RecentPost";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
       <BigTitle />
       <RecentPost />
      
    </main>
  )
}
