import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <div className="my-10 ">
          <div className="border-t-8 border-sky-500 w-40 h-40 mx-auto rounded-full animate-spin ">
          </div>
      </div>
      <Image src="/img.jpg" alt="Vercel Logo" width={1000} height={1000} className="w-full"/>
    </main>
  );
}
