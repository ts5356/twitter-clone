import Sidebar from "@/components/Sidebar"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen max-w-7xl mx-auto ">
        {/* SIDEBAR */}
        <Sidebar />

        {/* FEED */}

        {/* WIDGETS */}

        {/* MODAL */}
      </main>
    </>
  )
}
