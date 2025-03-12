const buttons = document.querySelectorAll(".btn");
const h2White = document.querySelector("h2");

buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    // Ambil warna background dari tombol yang diklik
    const computedStyle = window.getComputedStyle(event.target);
    const newColor = computedStyle.backgroundColor;

    // Ubah warna background body
    document.body.style.backgroundColor = newColor;

    // Periksa apakah warna yang dipilih adalah hitam
    if (newColor == "rgb(0, 0, 0)") {
      h2White.classList.add("white-h2");
    } else {
      h2White.classList.remove("white-h2");
    }
  });
});
