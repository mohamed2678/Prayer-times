import PrayerTimes from "./components/PrayerTimes"


function App() {


  return (
    <>
    <section>
      <div className="container">
        <div className="top_sec">
          <div className="city">
            <h3>المدينة</h3>

            <select name="" id="">
              <option value="">Select City</option>
              <option value={20}>القاهرة</option>
              <option value={20}>الاسكندرية</option>
            </select>
          </div>
          <div className="date">
            <h4>التاريخ</h4>
            <h4>8-10-2025</h4>
          </div>
        </div>
        <div className="bottom_sec">
          <PrayerTimes name="الفجر" time='04:15' />
          <PrayerTimes name="الظهر" time='04:15' />
          <PrayerTimes name="العصر" time='04:15' />
          <PrayerTimes name="المغرب" time='04:15' />
          <PrayerTimes name="العشاء" time='04:15' />
        </div>
      </div>
    </section>
    </>
  )
}

export default App
