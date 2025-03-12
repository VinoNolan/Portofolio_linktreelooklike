// Ruang Keluarga
let togglekeluarga = document.getElementById("togglekeluarga");
let lampu1_kel = document.getElementById("lampu1_kel");
let lampu2_kel = document.getElementById("lampu2_kel");
let lampu3_kel = document.getElementById("lampu3_kel");
let toggle1_kel = document.getElementById("toggle1_kel");
let toggle2_kel = document.getElementById("toggle2_kel");
let toggle3_kel = document.getElementById("toggle3_kel");

// Ruang Makan
let togglemakan = document.getElementById("togglemakan");
let lampu1_mak = document.getElementById("lampu1_mak");
let toggle1_mak = document.getElementById("toggle1_mak");

// Ruang Tidur
let toggletidur = document.getElementById("toggletidur");
let lampu1_tdr = document.getElementById("lampu1_tdr");
let lampu2_tdr = document.getElementById("lampu2_tdr");
let toggle1_tdr = document.getElementById("toggle1_tdr");
let toggle2_tdr = document.getElementById("toggle2_tdr");

// Ruang Tamu
let toggletamu = document.getElementById('toggletamu');
let lampu1_tam = document.getElementById('lampu1_tam');
let lampu2_tam = document.getElementById('lampu2_tam');
let lampu3_tam = document.getElementById('lampu3_tam');
let lampu4_tam = document.getElementById('lampu4_tam');
let toggle1_tam = document.getElementById('toggle1_tam');
let toggle2_tam = document.getElementById('toggle2_tam');
let toggle3_tam = document.getElementById('toggle3_tam');
let toggle4_tam = document.getElementById('toggle4_tam');

function saklar_utama() {
  // Ruang Keluarga
  if (togglekeluarga.checked) {
    lampu1_kel.src = "assets/images/off.png";
    lampu2_kel.src = "assets/images/off.png";
    lampu3_kel.src = "assets/images/off.png";
    toggle1_kel.checked = true;
    toggle2_kel.checked = true;
    toggle3_kel.checked = true;
  } else {
    lampu1_kel.src = "assets/images/on.png";
    lampu2_kel.src = "assets/images/on.png";
    lampu3_kel.src = "assets/images/on.png";
    toggle1_kel.checked = false;
    toggle2_kel.checked = false;
    toggle3_kel.checked = false;
  }
  // Ruang Makan
  if (togglemakan.checked) {
    lampu1_mak.src = "assets/images/off.png";
    toggle1_mak.checked = true;
  } else {
    lampu1_mak.src = "assets/images/on.png";
    toggle1_mak.checked = false;
  }
  // Ruang Tidur
  if (toggletidur.checked) {
    lampu1_tdr.src = "assets/images/off.png";
    lampu2_tdr.src = "assets/images/off.png";
    toggle1_tdr.checked = true;
    toggle2_tdr.checked = true;
  } else {
    lampu1_tdr.src = "assets/images/on.png";
    lampu2_tdr.src = "assets/images/on.png";
    toggle1_tdr.checked = false;
    toggle2_tdr.checked = false;
  }
  // Ruang Tamu
  if (toggletamu.checked) {
    lampu1_tam.src = "assets/images/off.png"
    lampu2_tam.src = "assets/images/off.png"
    lampu3_tam.src = "assets/images/off.png"
    lampu4_tam.src = "assets/images/off.png"
    toggle1_tam.checked = true
    toggle2_tam.checked = true
    toggle3_tam.checked = true
    toggle4_tam.checked = true
  } else {
    lampu1_tam.src = "assets/images/on.png"
    lampu2_tam.src = "assets/images/on.png"
    lampu3_tam.src = "assets/images/on.png"
    lampu4_tam.src = "assets/images/on.png"
    toggle1_tam.checked = false
    toggle2_tam.checked = false
    toggle3_tam.checked = false
    toggle4_tam.checked = false
  }
}

function saklar_satuan() {
  // Ruang Keluarga
  if (toggle1_kel.checked) {
    lampu1_kel.src = "assets/images/off.png";
  } else {
    lampu1_kel.src = "assets/images/on.png";
  }
  if (toggle2_kel.checked) {
    lampu2_kel.src = "assets/images/off.png";
  } else {
    lampu2_kel.src = "assets/images/on.png";
  }
  if (toggle3_kel.checked) {
    lampu3_kel.src = "assets/images/off.png";
  } else {
    lampu3_kel.src = "assets/images/on.png";
  }
  if (toggle1_kel.checked && toggle2_kel.checked && toggle3_kel.checked) {
    togglekeluarga.checked = true;
  } else {
    togglekeluarga.checked = false;
  }

  // Ruang Makan
  if (toggle1_mak.checked) {
    lampu1_mak.src = "assets/images/off.png";
    togglemakan.checked = true;
  } else {
    lampu1_mak.src = "assets/images/on.png";
    togglemakan.checked = false;
  }

  // Ruang Tidur
  if (toggle1_tdr.checked) {
    lampu1_tdr.src = "assets/images/off.png"
  } else {
    lampu1_tdr.src = "assets/images/on.png"
  }
  if (toggle2_tdr.checked) {
    lampu2_tdr.src = "assets/images/off.png"
  } else {
    lampu2_tdr.src = "assets/images/on.png"
  }
  if (toggle1_tdr.checked && toggle2_tdr.checked) {
    toggletidur.checked = true
  } else {
    toggletidur.checked = false
  }
  
  // Ruang Tamu
  if (toggle1_tam.checked) {
    lampu1_tam.src = "assets/images/off.png"
  } else {
    lampu1_tam.src = "assets/images/on.png"
  }
  if (toggle2_tam.checked) {
    lampu2_tam.src = "assets/images/off.png"
  } else {
    lampu2_tam.src = "assets/images/on.png"
  }
  if (toggle3_tam.checked) {
    lampu3_tam.src = "assets/images/off.png"
  } else {
    lampu3_tam.src = "assets/images/on.png"
  }
  if (toggle4_tam.checked) {
    lampu4_tam.src = "assets/images/off.png"
  } else {
    lampu4_tam.src = "assets/images/on.png"
  }
  if (toggle1_tam.checked && toggle2_tam.checked && toggle3_tam.checked && toggle4_tam.checked) {
    toggletamu.checked = true
  } else {
    toggletamu.checked = false
  }
}
