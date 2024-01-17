import ServerSession from "@/components/ServerSession";
import ClientSession from "@/components/ClientSession";

export default function Home() {
  return (
    <div className="container">
      <ServerSession />
      <hr />
      <ClientSession />
    </div>
  );
}
