import ServerSession from "@/components/ServerSession";
import ClientSession from "@/components/ClientSession";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl text-emerald-800 font-bold underline bg-red-400">
        Hello world!
      </h1>
      <ServerSession />
      <hr />
      <ClientSession />
    </>
  );
}
