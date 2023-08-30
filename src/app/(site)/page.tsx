import ServerSession from "@/components/ServerSession";
import ClientSession from "@/components/ClientSession";

export default function Home() {
  return (
    <>
      <ServerSession />
      <hr />
      <ClientSession />
    </>
  );
}
