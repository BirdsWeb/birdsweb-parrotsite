let count = localStorage.getItem("birdsweb_counter");

if (count === null) {
  count = 0;
}

count++;
localStorage.setItem("birdsweb_counter", count);

let formatted = count.toString().padStart(6, "0");
document.getElementById("counter").textContent = formatted;
