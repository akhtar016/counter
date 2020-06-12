let count = 0

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {

    btn.addEventListener("click", function (event) {
        const styles = event.currentTarget.classList;

        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++ ;
        } else {
            count = 0;
        }

        if (count < 0 ) {
            value.style.color = "red"
        } else if (count > 0) {
            value.style.color = "green"
        } else {
            value.style.color = "#222"
        }
        value.textContent = count;

    })

})

// Alternative Solution

// const value = document.querySelector('#value');
// const incre = document.querySelector('.increase')
// const reset = document.querySelector('.reset')
// const decre = document.querySelector('.decrease')


// incre.addEventListener("click", function(){
//      count ++;
//     value.textContent = count
//     if (count > 0 ) {
//         value.style.color= "green"
//     } 

// })

// decre.addEventListener("click", function(){
//     count --;
//    value.textContent = count
//    if (count < 0 ) {
//     value.style.color = "red"
// }
// })

// reset.addEventListener("click", function(){
//     count = 0
//     value.textContent = count;
//     value.style.color = "#222"
// })


