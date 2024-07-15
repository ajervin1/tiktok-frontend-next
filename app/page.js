import Header from "@/components/Header";
import { getAverageViews, getTotalViews } from "@/utils/api";
import DateStringChart from "@/components/DateStringChart";
import BarChart from "@/components/BarChart";
import DateStringChart2 from "@/components/DateStringChart2";

export default async function Home() {
  const averagePlays = await getAverageViews('avani');
  const totalPlays = await getTotalViews('avani');
  const barSeriesData = totalPlays.map(row => {
    return {
      x: new Date(row.date).toLocaleString('default', { month: "short", year: "2-digit" }),
      y: row.totalPlayCount,
    }
  })
  const lineSeriesData = averagePlays.map(row => {
    return {
      x: row.date.split("T")[0].slice(0, 7),
      y: row.averagePlayCount,
    }
  })
  return <main className="home">
    <Header />
    <BarChart seriesData={barSeriesData} title={"Title"} seriesName={"Series Name"} />
    <DateStringChart2 seriesData={lineSeriesData} title={'Viewers Per Month'} seriesName={"Viewers Per Month"} />
  </main>
}
