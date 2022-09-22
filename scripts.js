console.log('labas')

// 1. Parašykite pažadą, kuris visada resolve'insis po 5 sekundžių. Jam resolve - išoka alert "yes,
// veikia!". Pažado aprašyme teks naudoti setTimeOut - daugiau apie jį čia.

// const pažadas = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(), 5000)
// })
// pažadas.then(() => alert('YES! Veikia!'))


// 2. Pakoreguokite pirmą pratimą, kad būtų 4/5 tikimybė, jog resolve'ins po 5 sekundžių, ir 1/5 tikimybė,
// kad po 5 sekundžių bus reject.

// const pažadas = new Promise((resolve, reject) => {
//     const random = Math.floor(Math.random() * 5) + 1
//     setTimeout(() => {
//         if(random === 1) {
//             reject()
//         } else {
//             resolve()
//         }
//     }, 5000)
// })
// pažadas
//     .then(() => alert('YES! Veikia!'))
//     .then(() => alert('Oops, pazadas buvo atmestas'))


// 3. Then bendrauja su kitu then. Pakoreguokite antrą pratimą, kad jei resolve'inasi pirmas pažadas -
// pasileidžia then(), kuris paprasčiausiai grąžina žinutę "this is a message", šią žinutę pagauna
// antrasis then() ir ją alertina. Prisiminkime - ką then() returnina, tą pasigauna kitas then() kaip
// parametrą. Nelabai aišku? Pasižiūrėk čia apie teoriją - o jei ne, užmesk akį į atsakymus.

const pažadas = new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 5) +1

    setTimeout(() => {
        if(random ===1) {
            reject()
        } else {
            resolve()
        }
    }, 500)
})

pažadas
    .then(() => 'This is message')
    .then((message) => alert(message))
    .catch(() => alert('Oops, pažadas buvo atmestas'))