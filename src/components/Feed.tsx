
import MiniProfile from "@/components/MiniProfile"
import Posts from "@/components/Posts"
import Stories from "@/components/Stories"
import Suggestion from "@/components/Suggestion"

// import dynamic from "next/dynamic";
// const Stories = dynamic(() => import("@/components/Stories"), {ssr: false})
// const Suggestion = dynamic(() => import("@/components/Suggestion"), {ssr: false})


export default function Feed() {
  return (
    <>
      <main className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto">
        <section className="md:col-span-2">
          {/*    Stories*/}
          <Stories />

          {/*    Posts*/}
          <Posts />
        </section>
        <section className="hidden md:inline-grid md:col-span-1">
          <div className="fixed w-[380px]">
            {/*    Mini Profile*/}
            <MiniProfile />

            {/*    Suggestions*/}
            <Suggestion />
          </div>
        </section>
      </main>
    </>
  )
}
