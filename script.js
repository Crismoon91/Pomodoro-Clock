const startBtn = document.querySelector(".start");
const settingsBtn = document.querySelector(".settings");
const circle = document.querySelector("circle");
const ring = document.querySelector(".ring");
let minuteBox = document.querySelector("#minuteBox");
let secondBox = document.querySelector("#secondBox");
let clock;

startBtn.addEventListener("click", function () {
  startBtn.textContent == "start" ? startClock() : stopClock();
});

settingsBtn.addEventListener("click", function () {
  if (minuteBox.disabled == true) {
    //mientras se entra en el modo editar, se habilitan los inputs y desahibilita el boton start
    minuteBox.disabled = false;
    secondBox.disabled = false;
    startBtn.disabled = true;
  } else {
    minuteBox.disabled = true;
    secondBox.disabled = true;
    startBtn.disabled = false;
  }
});

function startClock() {
  ring.classList.remove("ending"); //cambia de color, quitando la clase ending
  startBtn.textContent = "stop"; //el texto cambia a stop

  let minutes = parseInt(minuteBox.value); //estas dos variables toman los valores de sus respectivos inputs
  let seconds = parseInt(secondBox.value);

  clock = setInterval(function () {
    //le asignamos a la variable Clock la función que ejecuta el intervalo

    seconds--; //irán bajando los segundos
    if (seconds == 0 && minutes <= 0) {
      //si el reloj llega a 0, se deshabilita el botón start y se para
      startBtn.disabled = true;
      stopClock();
    } else if (seconds < 0) {
      //si bajan los segundos de 0, vuelven a 59
      seconds = 59;
      minuteBox.value = --minutes < 10 ? "0" + minutes : minutes; //el valor del minutero asignará un 0 delante del número si es menor de 10
    }
    secondBox.value = seconds < 10 ? "0" + seconds : seconds; //el valor del segundero funciona igual que el minutero
  }, 1000); //cada vuelta será de 1 segundo
}

function stopClock() {
  clearInterval(clock);
  ring.classList.add("ending"); //añade el color rojo
  startBtn.textContent = "start"; //cambia el contenido del botón a Start
}
