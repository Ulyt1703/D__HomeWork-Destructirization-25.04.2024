/* let musicLibrary = { 
    count: 2, 
    artists: [ 
    { 
        name: 'The Beatles', 
        albums: [ 
            { 
            title: 'Sgt. Pepper\'s Lonely Hearts Club Band', 
            year: 1967, 
            tracks: [ 
              { title: 'With a Little Help from My Friends', duration: '2:44' }, 
              { title: 'Lucy in the Sky with Diamonds', duration: '3:28' }, 
              { title: 'A Day in the Life', duration: '5:33' } 
            ] 
          }, 
          { 
            title: 'Abbey Road', 
            year: 1969, 
            tracks: [ 
              { title: 'Come Together', duration: '4:19' }, 
              { title: 'Something', duration: '3:01' }, 
              { title: 'Here Comes the Sun', duration: '3:06' } 
            ] 
          } 
        ] 
      }, 
      { 
        name: 'Pink Floyd', 
        albums: [ 
          { 
            title: 'The Wall', 
            year: 1979, 
            tracks: [ 
              { title: 'Another Brick in the Wall, Part 2', duration: '3:59' }, 
              { title: 'Comfortably Numb', duration: '6:23' }, 
              { title: 'Hey You', duration: '4:40' } 
            ] 
          }, 
          { 
            title: 'Dark Side of the Moon', 
            year: 1973, 
            tracks: [ 
              { title: 'Speak to Me/Breathe', duration: '3:58' }, 
              { title: 'Time', duration: '7:06' }, 
              { title: 'Money', duration: '6:22' } 
            ] 
          } 
        ] 
      }         
    ] 
}


let{
    count,
    artists: [{
        name, 
        albums: [{
            title,
            year,
            tracks: [
                {title: titleLittleHelp, duration},
                {title: titleLucy, duration: duration1},
                {title: titleDayLife, duration: duration2}
            ]
        },
        {
            title: titleAbbeyRoad,
            year: yearAbbeyRoad,
            tracks: [
                {title: titleComeTogether, duration: durationComeTogether},
                {title: titleSomething, duration: durationSomething},
                {title: titleComeSun, duration: durationComeSun}
            ]
        }
    ]
    },
    {
        name: nameFloyd,
        albums: [
            {
                title: titleWall,
                year: yearWall,
                tracks: [
                    {title: titleBrickWall, duration: durationBrickWall},
                    {title: titleComfortably, duration: durationComfortably},
                    {title: titleHeyYou, duration: durationHeyYou}
                ]
            },
            {
                title: titleDarkSide,
                year: yearDarkSide,
                tracks: [
                    {title: titleSpeakMe, duration: durationSpeakMe},
                    {title: titleTime, duration: durationTime},
                    {title: titleMoney, duration: durationMoney}
                ]
            }
        ]
    }
]
} = musicLibrary


console.log(
    count, 
    name, 
    title, 
    year, 
    titleLittleHelp, 
    duration, 
    titleLucy, 
    duration1, 
    titleDayLife, 
    duration2,
    titleAbbeyRoad,
    yearAbbeyRoad,
    titleComeTogether,
    durationComeTogether,
    titleSomething,
    durationSomething,
    titleComeSun,
    durationComeSun,
    nameFloyd,
    titleWall,
    yearWall,
    titleBrickWall,
    durationBrickWall,
    titleComfortably,
    durationComfortably,
    titleHeyYou,
    durationHeyYou,
    titleDarkSide,
    yearDarkSide,
    titleSpeakMe,
    durationSpeakMe,
    titleTime,
    durationTime,
    titleMoney,
    durationMoney
) */



let bankAccount ={ 
  ownerName: "me", 
  accountNumber: "122", 
  balance: 1000, 
  deposit(amount) { 
      this.balance += amount; 
      console.log(`${this.balance}`); 
  }, 
  withdraw(amount){ 
      if (isNaN(amount) || amount <= 0) { 
          console.log("incorrect") 
      } 
      else if(amount > this.amount){ 
          console.log("Not enought") 
      } 
      else{ 
          this.balance -= amount; 
          console.log("Money is took") 
      } 
  } 
  } 
  function makeDeposit(amount) { 
  bankAccount.deposit(amount) 
  } 
  function makeWithdrawal(amount) { 
  bankAccount.withdraw(amount) 
  } 
  let depositAmount = 200 
  let withdrawAmount = 100 
  makeDeposit(depositAmount) 
  makeWithdrawal(withdrawAmount)
  
  
  
  let movie = {
      title: "Fast and Furious",
      director: "Vin Diesel",
      year: 2020,
      rating: 9,
      findRatingMovie(){
          if(rating >= 8){
              console.log(true)
          }
          else{
              console.log(false)
          }
      }
  }
  
  let{title, director, year, rating, findRatingMovie} = movie
  
  findRatingMovie()
  
  
  
  let inputWeather = document.querySelector(".weather-temperature")
  
  let inputWeatherValue = inputWeather.value
  
  let weather = {
      temperature: inputWeatherValue,
      humidity: 15,
      windSpeed: 20,
      findTemperatureWeather(){
          if(temperature <= 0){
              console.log(true)
          }
          else{
              false
          }
      }
  }
  
  let{temperature, humidity, windSpeed, findTemperatureWeather} = weather
  
  findTemperatureWeather()
  
  if(findTemperatureWeather() === true){
      console.log("Температура нижче 0 градусів Цельсія")
  }