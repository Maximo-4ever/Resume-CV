const areaCv = document.getElementById("area-cv");
const btnDownload = document.querySelector(".btnDownload");
const opt = {
  margin: 0,
  filename: "Eduardo Maximiliano - CV.pdf",
  image: { type: "jpeg", quality: 1 },
  enableLinks: true,
  html2canvas: { scale: 3 },
  jsPDF: { unit: "px", format: [1065, 1265], orientation: "portrait" },
};

btnDownload.addEventListener("click", () => {
  html2pdf().set(opt).from(areaCv).save();
});
