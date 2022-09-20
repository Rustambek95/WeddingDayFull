let timer = null
autoplay()

function autoplay() {
    timer = setInterval(IntervalDate, 1000)
}

function IntervalDate() {
    const wedding = new Date().getTime()
    const weddingDay = new Date('august 28, 2022 00:00:00')
    let interval = wedding - weddingDay 

    const sec = 1000
    const min = 60 * sec
    const hour = 60 * min
    const day = 24 * hour
    // const week = 7.11 * day
    // const year = 365.25 * day


    // const yearInterval = Math.floor(interval / year)
    // const weekInterval = Math.floor(interval / week)
    const daysInterval = Math.floor(interval / day)
    const hoursInterval = Math.floor(interval % day / hour)
    const minInterval = Math.floor(interval % hour / min)
    const secInterval = Math.floor(interval % min / sec)

    // document.querySelector('.year').textContent = yearInterval
    // document.querySelector('.week').textContent = weekInterval
    document.querySelector('.day').textContent = daysInterval
    document.querySelector('.hour').textContent = hoursInterval
    document.querySelector('.min').textContent = minInterval
    document.querySelector('.sec').textContent = secInterval
}