import Hero from "~/components/Hero";
import Newest from "~/components/Newest";

export default function HomePage() {
  return (
    <main className='className="pb-6 lg:pb-12" sm:pb-8'>
      <Hero />
      <Newest />
    </main>
  );
}
