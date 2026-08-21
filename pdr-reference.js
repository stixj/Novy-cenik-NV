const DEFAULT_REFERENCE_IMAGE = "images/pdr/Střecha.png";

const PART_REFERENCE_IMAGES = {
  "kapota motoru": "images/pdr/Kapota motoru.png",
  "lp blatník": "images/pdr/LP blatník.png",
  "lp dveře": "images/pdr/LP dveře.png",
  "lz dveře": "images/pdr/LZ dveře.png",
  "l sloupek": "images/pdr/L sloupek.png",
  "lz bok": "images/pdr/LZ bok.png",
  "víko kufru": "images/pdr/Víko kufru.png",
  "pz bok": "images/pdr/PZ bok.png",
  "p sloupek": "images/pdr/P sloupek.png",
  "pz dveře": "images/pdr/PZ dveře.png",
  "pp dveře": "images/pdr/PP dveře.png",
  "pp blatník": "images/pdr/PP blatník.png",
  střecha: DEFAULT_REFERENCE_IMAGE,
};

const referenceImage = document.getElementById("pdr-reference-image");
const focusIndicator = document.getElementById("pdr-focus-indicator");
const status = document.getElementById("pdr-model-status");
const partsList = document.getElementById("parts-list");

if (referenceImage && focusIndicator && status && partsList) {
  initializeReferenceViewer();
}

function initializeReferenceViewer() {
  Object.values(PART_REFERENCE_IMAGES).forEach((imagePath) => {
    const image = new Image();
    image.src = imagePath;
  });

  status.textContent = "Pohled podle vybraného dílu";
  window.setTimeout(() => {
    status.hidden = true;
  }, 1800);

  partsList.addEventListener("mouseover", (event) => {
    const row = event.target.closest(".part-row");
    if (row && partsList.contains(row)) {
      showPartReference(row);
    }
  });

  partsList.addEventListener("mouseout", (event) => {
    const row = event.target.closest(".part-row");
    if (row && partsList.contains(row) && !row.contains(event.relatedTarget)) {
      resetReferenceView();
    }
  });

  partsList.addEventListener("focusin", (event) => {
    const row = event.target.closest(".part-row");
    if (row && partsList.contains(row)) {
      showPartReference(row);
    }
  });

  partsList.addEventListener("focusout", (event) => {
    const row = event.target.closest(".part-row");
    if (row && partsList.contains(row) && !row.contains(event.relatedTarget)) {
        resetReferenceView();
    }
  });

  referenceImage.addEventListener("error", () => {
    status.hidden = false;
    status.dataset.state = "error";
    status.textContent = "Referenční snímek není dostupný.";
  });
}

function showPartReference(row) {
  const partName = row.querySelector(".part-name")?.value.toLowerCase();
  const imagePath = PART_REFERENCE_IMAGES[partName];
  const partLabel = row.querySelector(".part-label")?.textContent.trim() || partName;

  if (!imagePath) {
    return;
  }

  referenceImage.src = imagePath;
  referenceImage.alt = `Vozidlo s vyznačeným dílem: ${partLabel}`;
  focusIndicator.textContent = `Zaměřeno: ${partLabel}`;
  focusIndicator.classList.add("is-visible");
}

function resetReferenceView() {
  referenceImage.src = DEFAULT_REFERENCE_IMAGE;
  referenceImage.alt = "Vozidlo s vyznačenou střechou";
  focusIndicator.classList.remove("is-visible");
}
