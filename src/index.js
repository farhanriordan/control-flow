import "./styles.css";

function score() {
  let nilai = Number(prompt("input nilai!"));
  if (nilai >= 80) {
    alert("nilai anda A");
  } else if (nilai >= 60 && nilai < 80) {
    alert("nilai anda B");
  } else if (nilai >= 40 && nilai < 60) {
    alert("nilai anda C");
  } else if (nilai >= 20 && nilai < 40) {
    alert("nilai anda D");
  } else if (nilai >= 0 && nilai < 20) {
    alert("nilai anda E");
  }
}

score();
