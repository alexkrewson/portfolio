import "./sassystyle.scss";


let unit = 'F';
let high, low, unitText;

const img = document.querySelector('img');
const line1Text = document.getElementById('line1');
// const line2Text = document.getElementById('line2');
// const line3Text = document.getElementById('line3');

function lengthen(shortString, desiredLength) {
    let counter = 0
    let longString = shortString

    console.log('shortString: ' + shortString)

    while (longString.length < desiredLength && counter < 50) {
        longString = longString + ' '
        counter++
    }
    counter = 0

    console.log('longString: ' + longString)

    return longString

    // let newArr = []
    // array.forEach((text, index) => {
    //     newArr[index] = text
    //     // console.log('newArr[index].length before:' + newArr[index].length)
    //     while (newArr[index].length < desiredLength && counter < 50) {
    //         newArr[index] = newArr[index] + ' '
    //         counter++
    //     }
    //     counter = 0
    //     // console.log('newArr[index].length after:' + newArr[index].length)
    // })

}


// const btn = document.getElementById('btn')
// btn.addEventListener('click', loadJson)


async function loadJson() {

    const lat = 33.67472836552414
    const lon = -115.78941209923903
    const todayUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&APPID=a9fec7b30dcd9fdba9ec7e45820f9cad' + '&units=imperial';
    const forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&APPID=a9fec7b30dcd9fdba9ec7e45820f9cad' + '&units=imperial';
    // const hourlyUrl = 'http://api.openweathermap.org/data/2.5/forecast/hourly?lat=' + lat + '&lon=' + lon + '&APPID=a9fec7b30dcd9fdba9ec7e45820f9cad';

    try {
        

        const todayResponse = await fetch(todayUrl, { mode: 'cors' });
        const todayData = await todayResponse.json();

        const forecastResponse = await fetch(forecastUrl, { mode: 'cors' });
        const forecastData = await forecastResponse.json();

        // const hourlyResponse = await fetch(hourlyUrl, { mode: 'cors' });
        // const hourlyData = await hourlyResponse.json();

        console.log('todayData: ')
        console.log(todayData)

        console.log('forecastData: ')
        console.log(forecastData)

        // console.log('hourlyData: ')
        // console.log(hourlyData)



        const mainToday = todayData.weather[0].description
        const tempMinToday = Math.round(todayData.main.temp_min)
        const tempMaxToday = Math.round(todayData.main.temp_max)
        const windToday = Math.round(todayData.wind.speed)
        const gustToday = Math.round(todayData.wind.gust)


        let line1ShortString = ' ' + mainToday + ', ' + tempMinToday + '-' + 
                                     tempMaxToday + ' F, ' + windToday + '-' + gustToday + ' mph'

        line1Text.innerHTML = lengthen(line1ShortString, 15)
        // console.log('mainToday: ')
        // console.log(mainToday)

        // console.log('tempMinToday: ')
        // console.log(tempMinToday)

        // const main1 = weatherData.list[0].weather[0].main
        // const main2 = weatherData.list[2].weather[0].main
        // const main3 = weatherData.list[4].weather[0].main
        // const main4 = weatherData.list[6].weather[0].main
        // const main5 = weatherData.list[8].weather[0].main
        // const main6 = weatherData.list[10].weather[0].main
        // const main7 = weatherData.list[12].weather[0].main
        // const main8 = weatherData.list[14].weather[0].main
        // const main9 = weatherData.list[16].weather[0].main

        // let mainArr = [main1, main2, main3, main4, main5, main6, main7, main8, main9]
        // let counter = 0

        // let newArr = []
        // mainArr.forEach((text, index) => {
        //     newArr[index] = text
        //     console.log('newArr[index].length before:' + newArr[index].length)
        //     while (newArr[index].length < 9 && counter < 50) {
        //         newArr[index] = newArr[index] + ' '
        //         counter++
        //     }
        //     counter = 0
        //     console.log('newArr[index].length after:' + newArr[index].length)
        // })


        // line1Text.innerHTML = ' ' + newArr[0] + newArr[1] + newArr[2] + newArr[3] + newArr[4] + newArr[5] + newArr[6] + newArr[7] + newArr[8]

        // const temp1 = Math.round(weatherData.list[0].main.temp)
        // const temp2 = Math.round(weatherData.list[2].main.temp)
        // const temp3 = Math.round(weatherData.list[4].main.temp)
        // const temp4 = Math.round(weatherData.list[6].main.temp)
        // const temp5 = Math.round(weatherData.list[8].main.temp)
        // const temp6 = Math.round(weatherData.list[10].main.temp)
        // const temp7 = Math.round(weatherData.list[12].main.temp)
        // const temp8 = Math.round(weatherData.list[14].main.temp)
        // const temp9 = Math.round(weatherData.list[16].main.temp)

        // let line2WhiteSpace = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
        // line2Text.innerHTML = ' ' + temp1 + line2WhiteSpace
        //     + temp2 + line2WhiteSpace
        //     + temp3 + line2WhiteSpace
        //     + temp4 + line2WhiteSpace
        //     + temp5 + line2WhiteSpace
        //     + temp6 + line2WhiteSpace
        //     + temp7 + line2WhiteSpace
        //     + temp8 + line2WhiteSpace
        //     + temp9 + line2WhiteSpace


        // const wind1 = Math.round(weatherData.list[0].wind.speed)
        // const wind2 = Math.round(weatherData.list[2].wind.speed)
        // const wind3 = Math.round(weatherData.list[4].wind.speed)
        // const wind4 = Math.round(weatherData.list[6].wind.speed)
        // const wind5 = Math.round(weatherData.list[8].wind.speed)
        // const wind6 = Math.round(weatherData.list[10].wind.speed)
        // const wind7 = Math.round(weatherData.list[12].wind.speed)
        // const wind8 = Math.round(weatherData.list[14].wind.speed)
        // const wind9 = Math.round(weatherData.list[16].wind.speed)


        // let windSpeedArr = [wind1, wind2, wind3, wind4, wind5, wind6, wind7, wind8, wind9]

        // windSpeedArr.forEach((speed, index) => {
        //     if (speed < 10) {
        //         speed = '&nbsp;' + speed
        //     }
        // })


        // const gust1 = Math.round(weatherData.list[0].wind.gust)
        // const gust2 = Math.round(weatherData.list[2].wind.gust)
        // const gust3 = Math.round(weatherData.list[4].wind.gust)
        // const gust4 = Math.round(weatherData.list[6].wind.gust)
        // const gust5 = Math.round(weatherData.list[8].wind.gust)
        // const gust6 = Math.round(weatherData.list[10].wind.gust)
        // const gust7 = Math.round(weatherData.list[12].wind.gust)
        // const gust8 = Math.round(weatherData.list[14].wind.gust)
        // const gust9 = Math.round(weatherData.list[16].wind.gust)

        // let windGustArr = [gust1, gust2, gust3, gust4, gust5, gust6, gust7, gust8, gust9]

        // windGustArr.forEach((gust, index) => {
        //     if (gust < 10) {
        //         gust = '&nbsp;' + gust
        //     }
        // })

        // const windDeg1 = weatherData.list[0].wind.deg
        // const windDeg2 = weatherData.list[2].wind.deg
        // const windDeg3 = weatherData.list[4].wind.deg
        // const windDeg4 = weatherData.list[6].wind.deg
        // const windDeg5 = weatherData.list[8].wind.deg
        // const windDeg6 = weatherData.list[10].wind.deg
        // const windDeg7 = weatherData.list[12].wind.deg
        // const windDeg8 = weatherData.list[14].wind.deg
        // const windDeg9 = weatherData.list[16].wind.deg

        // const windDegArr = [windDeg1, windDeg2, windDeg3, windDeg4, windDeg5, windDeg6, windDeg7, windDeg8, windDeg9]
        // let dir = ['', '', '', '', '', '', '', '', '']
        // let start = 0
        // let end = 0

        // windDegArr.forEach((deg, index) => {
        //     // console.log(deg)

        //     start = 348.75
        //     end = 11.25
        //     if (deg >= start || deg < end) {
        //         dir[index] = 'N'
        //     }

        //     start = end
        //     end = 33.75
        //     if (deg >= start && deg < end) {
        //         dir[index] = 'NNE'
        //     }

        //     start = end
        //     end = 56.25
        //     if (deg >= start && deg < end) {
        //         dir[index] = 'NE'
        //     }

        //     start = end
        //     end = 78.75
        //     if (deg >= start && deg < end) {
        //         dir[index] = 'ENE'
        //     }

        //     start = end
        //     end = 101.25
        //     if (deg >= start && deg < end) {
        //         dir[index] = 'E'
        //     }

        //     start = end
        //     end = 123.75
        //     if (deg >= start && deg < end) {
        //         dir[index] = 'ESE'
        //     }

        //     start = end
        //     end = 146.25
        //     if (deg >= start && deg < end) {
        //         dir[index] = 'SE'
        //     }

        //     start = end
        //     end = 168.75
        //     if (deg >= start && deg < end) {
        //         dir[index] = 'SSE'
        //     }

        //     start = end
        //     end = 191.25
        //     if (deg >= start && deg < end) {
        //         dir[index] = 'S'
        //     }

        //     start = end
        //     end = 213.75
        //     if (deg >= start && deg < end) {
        //         dir[index] = 'SSW'
        //     }

        //     start = end
        //     end = 236.25
        //     if (deg >= start && deg < end) {
        //         dir[index] = 'SW'
        //     }

        //     start = end
        //     end = 258.75
        //     if (deg >= start && deg < end) {
        //         dir[index] = 'WSW'
        //     }

        //     start = end
        //     end = 281.25
        //     if (deg >= start && deg < end) {
        //         dir[index] = 'W'
        //     }

        //     start = end
        //     end = 3033.75
        //     if (deg >= start && deg < end) {
        //         dir[index] = 'WNW'
        //     }

        //     start = end
        //     end = 326.25
        //     if (deg >= start && deg < end) {
        //         dir[index] = 'NW'
        //     }

        //     start = end
        //     end = 348.75
        //     if (deg >= start && deg < end) {
        //         dir[index] = 'NNW'
        //     }
        // })

        // // let line3Segment = ''
        // // dir.forEach((text, index) => {
        // //     newDirArr[index] = text
        // //     console.log('newDirArr[index].length before:' + newDirArr[index].length)
        // //     while (newDirArr[index].length < 9 && counter < 50) {
        // //         newDirArr[index] = newDirArr[index] + ' '
        // //         counter++
        // //     }
        // //     counter = 0
        // //     console.log('newDirArr[index].length after:' + newDirArr[index].length)
        // // })

        // // console.log(dir)





        // let segments = []
        // line3Text.innerHTML = ' '
        // windSpeedArr.forEach((speed, index) => {
        //     segments[index] = dir[index] + ' ' + speed + '-' + windGustArr[index]
        //     counter = 0

        //     console.log('segments[index].length before:' + segments[index].length)
        //     while ( segments[index].length < 9 && counter < 50) {
        //          segments[index] =  segments[index] + ' '
        //         counter++
        //     }
        //     counter = 0
        //     console.log(' segments[index].length after:' +  segments[index].length)

        //     line3Text.innerHTML = line3Text.innerHTML + segments[index]


        // })


        // console.log(weatherData)

    } catch (err) {
        console.log('error error error')
        console.log(err);
    }



}

loadJson()