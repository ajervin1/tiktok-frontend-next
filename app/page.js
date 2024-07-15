import Header from "@/components/Header";

import SearchForm from "@/app/SearchForm";
import HeroBlock from "@/app/HeroBlock";



export default async function Home() {
  return <main className="home">
    <Header />
    <HeroBlock />
    <SearchForm />
  </main>
}
