function timeCount() {
  // SET DATES
  let date = new Date();
  const start = new Date(2022, 10, 20, 13, 0, 0);

  // ms between dates
  let diff = Math.abs(start - date);

  function msToSMHD(diff) {
    let seconds, minutes, hours, days, totalHours, totalMinutes, totalSeconds;

    totalSeconds = Number(Math.floor(diff / 1000));
    totalMinutes = Number(Math.floor(totalSeconds / 60));
    totalHours = parseInt(Math.floor(totalMinutes / 60));
    days = Math.floor(totalHours / 24);

    seconds = totalSeconds % 60;
    minutes = totalMinutes % 60;
    hours = totalHours % 24;

    return { s: seconds, m: minutes, h: hours, d: days };
  }
  let s = msToSMHD(diff).s;
  let m = msToSMHD(diff).m;
  let h = msToSMHD(diff).h;
  let d = msToSMHD(diff).d;
  document.getElementById("days").textContent = String(d).padStart(2, "0");
  document.getElementById("hours").textContent = String(h).padStart(2, "0");
  document.getElementById("minutes").textContent = String(m).padStart(2, "0");
  document.getElementById("seconds").textContent = String(s).padStart(2, "0");
}

// let s = msToSMHD(diff).s;
// let m = msToSMHD(diff).m;
// let h = msToSMHD(diff).h;
// let d = msToSMHD(diff).d;
// document.getElementById("days").textContent = String(d).padStart(2, "0");
// document.getElementById("hours").textContent = String(h).padStart(2, "0");
// document.getElementById("minutes").textContent = String(m).padStart(2, "0");
// document.getElementById("seconds").textContent = String(s).padStart(2, "0");

// function timeCount() {
//   {
//     s = msToSMHD(diff).s;
//     m = msToSMHD(diff).m;
//     h = msToSMHD(diff).h;
//     d = msToSMHD(diff).d;
//     document.getElementById("days").textContent = String(d).padStart(2, "0");
//     document.getElementById("hours").textContent = String(h).padStart(2, "0");
//     document.getElementById("minutes").textContent = String(m).padStart(2, "0");
//     document.getElementById("seconds").textContent = String(s).padStart(2, "0");
//     // console.log(s);
//   }
//   // setInterval(timer, 1000);
// }

addEventListener("load", function () {
  setInterval(timeCount, 1000);
});

// console.log(s);
