import Hero from "@/components/core/hero/Hero";

export default function Home() {
  return (
    <>
      <Hero
        size="lg"
        title="Build faster, build better!"
        description="A Next.js boilerplate to start your next project, with user
          authentication, theming and more."
      />

      <div className="container">
        <p>Hello</p>
      </div>
    </>
  );
}
