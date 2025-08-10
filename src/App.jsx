import { useEffect, useState } from "react";
import PrayerTimes from "./components/PrayerTimes"


function App() {

  const citis = [
    {name: 'القاهرة', value: "Cairo" },
    {name: 'الإسكندرية', value: "Alexandria" },
    {name: 'الجيزة', value: "Giza" },
    {name: 'المنصورة', value: "Mansoura" },
    {name: 'السويس', value: "Suez" },
    {name: 'بورسعيد', value: "Port Said" },
    {name: 'الأقصر', value: "Luxor" },
    {name: 'أسوان', value: "Aswan" },
    {name: 'المنيا', value: "Minya" },
    {name: 'طنطا', value: "Tanta" },
    {name: 'الزقازيق', value: "Zagazig"},
    {name: 'بني سويف', value: "Beni Suef" },
    {name: 'قنا', value: "Qena" },
    {name: 'أسيوط', value: "Assiut" },
    {name: 'دمنهور', value: "Damanhur" },
    {name: 'الفيوم', value: "Faiyum" },
    {name: 'الشرقية', value: "Sharqia" },
  ]

  const [prayerTimes, setPrayerTimes] = useState({});
  const [dataTIme, setDataTime] = useState("");
  const [city, setCity] = useState("Cairo");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=Egypt`);
        const data_prayer = await response.json();
        setPrayerTimes(data_prayer.data.timings);
        console.log(data_prayer.data.timings);
        setDataTime(data_prayer.data.date.gregorian.date);
      } catch (error) {
        console.error('Error fetching prayer times:', error);
      }
    };
    fetchData();
  }, [city]);


  const formateTime = (time) => {
    if (!time){
      return "00:00"
    } 
    let [hours, minutes] = time.split(':').map(Number);
    const perd = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${hours}:${minutes.toString().padStart(2, '0')} ${perd}`;
      
  }
  


  return (
    <>
    <section>
      <div className="container">
        <div className="top_sec">
          <div className="city">
            <h3>المدينة</h3>

            <select name="" id="" onChange={(e) => setCity(e.target.value)}>
              {citis.map((city_obj) => {
                return (
                  <option key={city_obj.value} value={city_obj.value}>
                    {city_obj.name}
                  </option>
                )
              })}
            </select>
          </div>
          <div className="date">
            <h4>التاريخ</h4>
            <h4>{ dataTIme }</h4>
          </div>
        </div>
        <div className="bottom_sec">
          <PrayerTimes name="الفجر" time={formateTime(prayerTimes.Fajr)} />
          <PrayerTimes name="الشروق" time={formateTime(prayerTimes.Sunrise)} />
          <PrayerTimes name="الظهر" time={formateTime(prayerTimes.Dhuhr)} />
          <PrayerTimes name="العصر" time={formateTime(prayerTimes.Asr)} />
          <PrayerTimes name="المغرب" time={formateTime(prayerTimes.Maghrib)} />
          <PrayerTimes name="العشاء" time={formateTime(prayerTimes.Isha)} />
        </div>
      </div>
    </section>
    </>
  )
}

export default App
