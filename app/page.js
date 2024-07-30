import Header from "@/components/Header";

import SearchForm from "@/app/SearchForm";
import HeroBlock from "@/app/HeroBlock";

export const metadata = {
  title: "Advanced TikTok Analytics Tool, Unlock Insights, Trends & Growth Strategies",
  description: "TikTok analytics to boost your social media strategy and get insights on content performance, engagement, and overall user statistics.",
  metadataBase: new URL('https://www.tiktokanalytics.tech'),
};
/* Home Page */
export default async function Home() {
  return <main className="home">
    <Header />
    <HeroBlock />
    <SearchForm />
  </main>
}
