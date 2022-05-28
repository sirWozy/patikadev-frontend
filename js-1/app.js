let person = prompt('Isminiz nedir?')

let welcomeMessage = document.querySelector('.welcomeMessage')
let clock = document.querySelector('.clock')

welcomeMessage.innerHTML = `Merhaba, <b>${setName(person)}!</b> Hoş geldin!`

function setName(person) {
  return (person =
    person.charAt(0).toUpperCase() + person.slice(1).toLowerCase())
}

function getClock(clock) {
  let days = [
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi',
    'Pazar'
  ]
  let date = new Date()

  let day = date.getDay()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()

  hour = hour < 10 ? '0' + hour : hour
  minute = minute < 10 ? '0' + minute : minute
  second = second < 10 ? '0' + second : second

  let time = `${hour} : ${minute} : ${second}  ${days[day - 1]}`

  clock.innerHTML = time

  let t = setTimeout(() => {
    getClock(clock)
  }, 1000)
}

getClock(clock)
