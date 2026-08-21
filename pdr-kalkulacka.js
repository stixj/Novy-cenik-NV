const CarPart = {
  KAPOTA_STRECHA: "kapota,střecha",
  BLATNIK_DVERE: "blatník,dveře",
  BOCNI_RAM_KUFR: "boční rám,kufr",
};

const PART_OPTIONS = [
  { value: "Kapota motoru", label: "Kapota motoru", type: CarPart.KAPOTA_STRECHA },
  { value: "LP blatník", label: "LP blatník", type: CarPart.BLATNIK_DVERE },
  { value: "LP dveře", label: "LP dveře", type: CarPart.BLATNIK_DVERE },
  { value: "LZ dveře", label: "LZ dveře", type: CarPart.BLATNIK_DVERE },
  { value: "L sloupek", label: "L sloupek", type: CarPart.BOCNI_RAM_KUFR },
  { value: "LZ bok", label: "LZ bok", type: CarPart.BLATNIK_DVERE },
  { value: "Víko kufru", label: "Víko kufru", type: CarPart.BOCNI_RAM_KUFR },
  { value: "PZ bok", label: "PZ bok", type: CarPart.BLATNIK_DVERE },
  { value: "P sloupek", label: "P sloupek", type: CarPart.BOCNI_RAM_KUFR },
  { value: "PZ dveře", label: "PZ dveře", type: CarPart.BLATNIK_DVERE },
  { value: "PP dveře", label: "PP dveře", type: CarPart.BLATNIK_DVERE },
  { value: "PP blatník", label: "PP blatník", type: CarPart.BLATNIK_DVERE },
  { value: "Střecha", label: "Střecha", type: CarPart.KAPOTA_STRECHA },
];

const PART_TYPE_BY_VALUE = Object.fromEntries(
  PART_OPTIONS.map((option) => [option.value.toLowerCase(), option.type]),
);

const PART_TYPE_LABELS = {
  [CarPart.KAPOTA_STRECHA]: "kapota / střecha",
  [CarPart.BLATNIK_DVERE]: "blatník / dveře",
  [CarPart.BOCNI_RAM_KUFR]: "boční rám / kufr",
};

const ALUMINIUM_PRICE_MULTIPLIER = 1.2;
const PAINTING_PDR_PRICE_MULTIPLIER = 0.5;
const OVERHEAD_MATERIAL_RATE = 0.02;

const PRICE_TABLE = {
  [CarPart.KAPOTA_STRECHA]: {
    20: {
      "01": 598,
      "02-03": 1076,
      "04-06": 1614,
      "07-10": 2373,
      "11-15": 2705,
      "16-20": 3057,
      "21-25": 3332,
      "26-30": 3632,
      "31-40": 4068,
      "41-50": 4556,
      "51-60": 5467,
      "61-80": 6560,
      "81-100": 7652,
      "101-120": 8358,
      "121-140": 8684,
      "141-160": 9639,
      "161-180": 9983,
      "181-200": 10545,
      "201-220": 12073,
      "221-240": 12578,
      "241-260": 13278,
      "261-280": 13825,
      "281-300": 14370,
      "301-320": 14723,
      "321-340": 14887,
      "341-360": 15364,
      "361-380": 15536,
      "381-400": 15817,
    },
    30: {
      "01": 642,
      "02-03": 1156,
      "04-06": 1734,
      "07-10": 2550,
      "11-15": 2907,
      "16-20": 3284,
      "21-25": 3580,
      "26-30": 3902,
      "31-40": 4371,
      "41-50": 4895,
      "51-60": 5874,
      "61-80": 7049,
      "81-100": 8222,
      "101-120": 8981,
      "121-140": 9331,
      "141-160": 10358,
      "161-180": 10727,
      "181-200": 11331,
      "201-220": 12972,
      "221-240": 13515,
      "241-260": 14267,
      "261-280": 14855,
      "281-300": 15441,
      "301-320": 15820,
      "321-340": 15996,
      "341-360": 16509,
      "361-380": 16693,
      "381-400": 16995,
    },
    40: {
      "01": 742,
      "02-03": 1336,
      "04-06": 2003,
      "07-10": 2945,
      "11-15": 3357,
      "16-20": 3794,
      "21-25": 4135,
      "26-30": 4507,
      "31-40": 5048,
      "41-50": 5654,
      "51-60": 6785,
      "61-80": 8141,
      "81-100": 9496,
      "101-120": 10373,
      "121-140": 10778,
      "141-160": 11963,
      "161-180": 12390,
      "181-200": 13087,
      "201-220": 14983,
      "221-240": 15610,
      "241-260": 16479,
      "261-280": 17157,
      "281-300": 17834,
      "301-320": 18272,
      "321-340": 18475,
      "341-360": 19068,
      "361-380": 19281,
      "381-400": 19629,
    },
  },
  [CarPart.BLATNIK_DVERE]: {
    20: {
      "01": 677,
      "02-03": 1219,
      "04-06": 1829,
      "07-10": 2688,
      "11-15": 3065,
      "16-20": 3463,
      "21-25": 3775,
      "26-30": 4115,
      "31-40": 4609,
      "41-50": 5162,
      "51-60": 6194,
      "61-80": 7433,
      "81-100": 8669,
      "101-120": 9470,
      "121-140": 9839,
      "141-160": 10922,
      "161-180": 11311,
      "181-200": 11947,
      "201-220": 13678,
      "221-240": 14251,
      "241-260": 15044,
      "261-280": 15663,
      "281-300": 16281,
      "301-320": 16682,
      "321-340": 16867,
      "341-360": 17408,
      "361-380": 17602,
      "381-400": 17920,
    },
    30: {
      "01": 728,
      "02-03": 1310,
      "04-06": 1965,
      "07-10": 2889,
      "11-15": 3293,
      "16-20": 3721,
      "21-25": 4056,
      "26-30": 4421,
      "31-40": 4952,
      "41-50": 5546,
      "51-60": 6655,
      "61-80": 7986,
      "81-100": 9315,
      "101-120": 10176,
      "121-140": 10572,
      "141-160": 11735,
      "161-180": 12154,
      "181-200": 12838,
      "201-220": 14697,
      "221-240": 15313,
      "241-260": 16165,
      "261-280": 16830,
      "281-300": 17494,
      "301-320": 17924,
      "321-340": 18123,
      "341-360": 18705,
      "361-380": 18913,
      "381-400": 19255,
    },
    40: {
      "01": 841,
      "02-03": 1513,
      "04-06": 2270,
      "07-10": 3337,
      "11-15": 3804,
      "16-20": 4298,
      "21-25": 4685,
      "26-30": 5107,
      "31-40": 5719,
      "41-50": 6406,
      "51-60": 7687,
      "61-80": 9224,
      "81-100": 10759,
      "101-120": 11753,
      "121-140": 12211,
      "141-160": 13554,
      "161-180": 14037,
      "181-200": 14827,
      "201-220": 16975,
      "221-240": 17687,
      "241-260": 18670,
      "261-280": 19439,
      "281-300": 20206,
      "301-320": 20703,
      "321-340": 20932,
      "341-360": 21604,
      "361-380": 21845,
      "381-400": 22240,
    },
  },
  [CarPart.BOCNI_RAM_KUFR]: {
    20: {
      "01": 795,
      "02-03": 1431,
      "04-06": 2147,
      "07-10": 3156,
      "11-15": 3598,
      "16-20": 4066,
      "21-25": 4432,
      "26-30": 4831,
      "31-40": 5410,
      "41-50": 6060,
      "51-60": 7272,
      "61-80": 8726,
      "81-100": 10178,
      "101-120": 11118,
      "121-140": 11551,
      "141-160": 12822,
      "161-180": 13279,
      "181-200": 14026,
      "201-220": 16058,
      "221-240": 16731,
      "241-260": 17662,
      "261-280": 18389,
      "281-300": 19114,
      "301-320": 19584,
      "321-340": 19801,
      "341-360": 20437,
      "361-380": 20665,
      "381-400": 21038,
    },
    30: {
      "01": 854,
      "02-03": 1538,
      "04-06": 2307,
      "07-10": 3391,
      "11-15": 3866,
      "16-20": 4369,
      "21-25": 4762,
      "26-30": 5191,
      "31-40": 5813,
      "41-50": 6511,
      "51-60": 7813,
      "61-80": 9376,
      "81-100": 10936,
      "101-120": 11946,
      "121-140": 12412,
      "141-160": 13777,
      "161-180": 14268,
      "181-200": 15071,
      "201-220": 17255,
      "221-240": 17978,
      "241-260": 18977,
      "261-280": 19759,
      "281-300": 20538,
      "301-320": 21043,
      "321-340": 21276,
      "341-360": 21959,
      "361-380": 22204,
      "381-400": 22606,
    },
    40: {
      "01": 987,
      "02-03": 1776,
      "04-06": 2665,
      "07-10": 3917,
      "11-15": 4465,
      "16-20": 5046,
      "21-25": 5500,
      "26-30": 5995,
      "31-40": 6715,
      "41-50": 7520,
      "51-60": 9024,
      "61-80": 10829,
      "81-100": 12631,
      "101-120": 13798,
      "121-140": 14336,
      "141-160": 15913,
      "161-180": 16480,
      "181-200": 17407,
      "201-220": 19929,
      "221-240": 20764,
      "241-260": 21919,
      "261-280": 22821,
      "281-300": 23722,
      "301-320": 24305,
      "321-340": 24574,
      "341-360": 25363,
      "361-380": 25646,
      "381-400": 26110,
    },
  },
};

const PRICE_RANGES = [
  [1, "01"],
  [3, "02-03"],
  [6, "04-06"],
  [10, "07-10"],
  [15, "11-15"],
  [20, "16-20"],
  [25, "21-25"],
  [30, "26-30"],
  [40, "31-40"],
  [50, "41-50"],
  [60, "51-60"],
  [80, "61-80"],
  [100, "81-100"],
  [120, "101-120"],
  [140, "121-140"],
  [160, "141-160"],
  [180, "161-180"],
  [200, "181-200"],
  [220, "201-220"],
  [240, "221-240"],
  [260, "241-260"],
  [280, "261-280"],
  [300, "281-300"],
  [320, "301-320"],
  [340, "321-340"],
  [360, "341-360"],
  [380, "361-380"],
  [400, "381-400"],
];

function getPriceRange(count) {
  for (const [maxCount, rangeStr] of PRICE_RANGES) {
    if (count <= maxCount) {
      return rangeStr;
    }
  }
  return "381-400";
}

function getPartType(part) {
  const normalized = part.toLowerCase().trim();
  const partType = PART_TYPE_BY_VALUE[normalized];

  if (partType) {
    return partType;
  }

  throw new Error(`Unknown part type: ${part}`);
}

function calculatePdrPrice(damageParts) {
  let totalPrice = 0;
  const calculationDetails = [];

  for (const { partName, count, diameter, isAluminium, needsPainting } of damageParts) {
    if (!partName || !Number.isFinite(count) || count < 1) {
      continue;
    }

    if (!diameter) {
      continue;
    }

    const diameterKey = String(diameter);
    const partType = getPartType(partName);
    const priceRange = getPriceRange(count);
    const partPrice = PRICE_TABLE[partType]?.[diameterKey]?.[priceRange];

    if (partPrice == null) {
      continue;
    }

    const basePartPrice = partPrice;
    const adjustedPartPrice = round2(
      basePartPrice *
        (isAluminium ? ALUMINIUM_PRICE_MULTIPLIER : 1) *
        (needsPainting ? PAINTING_PDR_PRICE_MULTIPLIER : 1),
    );
    const adjustments = [];

    if (isAluminium) {
      adjustments.push("Alu +20 %");
    }
    if (needsPainting) {
      adjustments.push("PDR pro lakování −50 %");
    }

    totalPrice += adjustedPartPrice;
    calculationDetails.push({
      partName,
      count,
      diameter: diameterKey,
      partType,
      priceRange,
      basePartPrice,
      partPrice: adjustedPartPrice,
      adjustmentLabel: adjustments.length ? adjustments.join(", ") : "Bez úpravy",
    });
  }

  const materialAddition = round2(totalPrice * OVERHEAD_MATERIAL_RATE);
  const repairWithoutVat = round2(totalPrice + materialAddition);
  const dismantling = repairWithoutVat <= 50000 ? 2500 : 3000;
  const priceWithoutVat = round2(repairWithoutVat + dismantling);
  const vatAmount = round2(priceWithoutVat * 0.21);
  const priceWithVat = round2(priceWithoutVat + vatAmount);

  return {
    priceWithoutVat,
    priceWithVat,
    calculationDetails,
    totalBeforeMaterial: totalPrice,
    materialAddition,
    repairWithoutVat,
    dismantling,
    vatAmount,
  };
}

function round2(value) {
  return Math.round(value * 100) / 100;
}

function formatCzk(value) {
  return `${value.toLocaleString("cs-CZ", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} Kč`;
}

function partOptionsHtml(selected) {
  return PART_OPTIONS.map(
    (option) =>
      `<option value="${option.value}" ${option.value === selected ? "selected" : ""}>${option.label}</option>`,
  ).join("");
}

function defaultDiameterLabel() {
  return `Výchozí (${selectedDiameter()} mm)`;
}

function diameterOptionsHtml(selected = "") {
  const defaultOption = `<option value="" ${selected === "" ? "selected" : ""}>${defaultDiameterLabel()}</option>`;
  const rest = ["20", "30", "40"]
    .map(
      (diameter) =>
        `<option value="${diameter}" ${selected === diameter ? "selected" : ""}>${diameter} mm</option>`,
    )
    .join("");
  return defaultOption + rest;
}

function updateDefaultDiameterLabels() {
  document.querySelectorAll(".part-diameter option[value='']").forEach((option) => {
    option.textContent = defaultDiameterLabel();
  });
  document.querySelectorAll(".part-diameter").forEach((select) => {
    if (select.value === "") {
      const trigger = select.closest(".pdr-select")?.querySelector(".pdr-select-trigger");
      if (trigger) {
        trigger.textContent = defaultDiameterLabel();
        trigger.setAttribute("aria-label", `Průměr: ${defaultDiameterLabel()}`);
      }
    }
  });
}

function closeSelectMenus(except = null) {
  document.querySelectorAll(".pdr-select.open").forEach((select) => {
    if (select !== except) {
      select.classList.remove("open");
      select.querySelector(".pdr-select-trigger")?.setAttribute("aria-expanded", "false");
    }
  });
}

function enhanceSelect(select) {
  const wrapper = document.createElement("div");
  wrapper.className = "pdr-select";
  select.parentNode.insertBefore(wrapper, select);
  wrapper.appendChild(select);
  select.classList.add("pdr-native-select");
  select.tabIndex = -1;
  select.setAttribute("aria-hidden", "true");

  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.className = "pdr-select-trigger";
  trigger.textContent = select.options[select.selectedIndex]?.textContent || "";
  trigger.setAttribute("aria-haspopup", "listbox");
  trigger.setAttribute("aria-expanded", "false");
  trigger.setAttribute(
    "aria-label",
    `${select.closest(".field")?.querySelector("span")?.textContent || "Výběr"}: ${trigger.textContent}`,
  );

  const menu = document.createElement("div");
  menu.className = "pdr-select-menu";
  menu.setAttribute("role", "listbox");
  menu.id = `pdr-select-menu-${document.querySelectorAll(".pdr-select-menu").length + 1}`;
  trigger.setAttribute("aria-controls", menu.id);

  Array.from(select.options).forEach((option) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "pdr-select-option";
    item.textContent = option.textContent;
    item.dataset.value = option.value;
    item.setAttribute("role", "option");
    item.setAttribute("aria-selected", String(option.selected));
    item.addEventListener("click", () => {
      select.value = option.value;
      trigger.textContent = option.textContent;
      trigger.setAttribute(
        "aria-label",
        `${select.closest(".field")?.querySelector("span")?.textContent || "Výběr"}: ${option.textContent}`,
      );
      menu.querySelectorAll(".pdr-select-option").forEach((menuOption) => {
        menuOption.setAttribute("aria-selected", String(menuOption === item));
      });
      wrapper.classList.remove("open");
      trigger.setAttribute("aria-expanded", "false");
      select.dispatchEvent(new Event("change", { bubbles: true }));
      trigger.focus();
    });
    menu.appendChild(item);
  });

  trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    const willOpen = !wrapper.classList.contains("open");
    closeSelectMenus(wrapper);
    wrapper.classList.toggle("open", willOpen);
    trigger.setAttribute("aria-expanded", String(willOpen));
  });

  trigger.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeSelectMenus();
      return;
    }

    if (["ArrowDown", "ArrowUp", "Enter", " "].includes(event.key)) {
      event.preventDefault();
      closeSelectMenus(wrapper);
      wrapper.classList.add("open");
      trigger.setAttribute("aria-expanded", "true");
      const options = Array.from(menu.querySelectorAll(".pdr-select-option"));
      const selectedOption = options.find((option) => option.getAttribute("aria-selected") === "true");
      (selectedOption || options[0])?.focus();
    }
  });

  menu.querySelectorAll(".pdr-select-option").forEach((item, index, items) => {
    item.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeSelectMenus();
        trigger.focus();
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        items[(index + 1) % items.length]?.focus();
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        items[(index - 1 + items.length) % items.length]?.focus();
      } else if (event.key === "Home") {
        event.preventDefault();
        items[0]?.focus();
      } else if (event.key === "End") {
        event.preventDefault();
        items[items.length - 1]?.focus();
      }
    });
  });

  wrapper.append(trigger, menu);
}

function addPartRow(partName = "Kapota motoru", count = "") {
  const list = document.getElementById("parts-list");
  const row = document.createElement("tr");
  row.className = "part-row";
  row.innerHTML = `
    <td>
      <label class="field">
        <span class="part-label">${PART_OPTIONS.find((option) => option.value === partName)?.label || partName}</span>
        <select class="part-name" aria-label="Díl">${partOptionsHtml(partName)}</select>
      </label>
      <button type="button" class="btn btn-ghost remove-part" aria-label="Odebrat díl">Odebrat</button>
    </td>
    <td>
      <input class="part-count" type="number" min="1" step="1" value="${count}" placeholder="0" aria-label="Počet důlků">
    </td>
    <td>
      <button type="button" class="diameter-cycle" aria-label="Rozměr důlků">0</button>
      <select class="part-diameter" aria-hidden="true" tabindex="-1">${diameterOptionsHtml()}</select>
    </td>
    <td>
      <label class="damage-flag" title="Díl z hliníku">
        <input class="part-alu" type="checkbox" aria-label="Alu">
        <span>✓</span>
      </label>
    </td>
    <td>
      <label class="damage-flag" title="Poškozený lak">
        <input class="part-lacquer" type="checkbox" aria-label="Lak">
        <span>✓</span>
      </label>
    </td>
  `;
  list.appendChild(row);
  row.querySelector(".remove-part").addEventListener("click", () => {
    if (list.children.length === 1) {
      return;
    }
    row.remove();
    updateRemoveButtons();
    updateSelectedPartsCount();
    renderResult();
  });
  row.querySelector(".part-name").addEventListener("change", renderResult);
  row.querySelector(".part-diameter").addEventListener("change", renderResult);
  row.querySelector(".part-count").addEventListener("input", () => {
    const count = row.querySelector(".part-count");
    const diameter = row.querySelector(".part-diameter");

    if (count.value && Number.parseInt(count.value, 10) > 0 && !diameter.value) {
      diameter.value = "20";
      row.querySelector(".diameter-cycle").textContent = "20 mm";
    }

    updatePartRowState(row);
    renderResult();
  });
  row.querySelector(".diameter-cycle").addEventListener("click", () => {
    const select = row.querySelector(".part-diameter");
    const values = ["", "20", "30", "40"];
    const currentIndex = values.indexOf(select.value);
    const nextValue = values[(currentIndex + 1) % values.length];
    select.value = nextValue;
    row.querySelector(".diameter-cycle").textContent = nextValue ? `${nextValue} mm` : "0";
    updatePartRowState(row);
    renderResult();
  });
  updateRemoveButtons();
  updatePartRowState(row);
  updateSelectedPartsCount();
}

function updatePartRowState(row) {
  const count = row.querySelector(".part-count");
  const diameter = row.querySelector(".part-diameter");
  const diameterButton = row.querySelector(".diameter-cycle");

  count.classList.toggle("has-value", Boolean(count.value));
  diameterButton.classList.toggle("is-selected", Boolean(diameter.value));
}

function updateRemoveButtons() {
  const rows = document.querySelectorAll(".part-row");
  rows.forEach((row) => {
    row.querySelector(".remove-part").disabled = rows.length === 1;
  });
}

function updateSelectedPartsCount() {
  const count = document.querySelectorAll(".part-row").length;
  const label = count === 1 ? "díl" : count >= 2 && count <= 4 ? "díly" : "dílů";
  const countElement = document.getElementById("selected-count");
  if (countElement) {
    countElement.textContent = `${count} ${label}`;
  }
}

function collectDamageParts() {
  return Array.from(document.querySelectorAll(".part-row")).map((row) => ({
    partName: row.querySelector(".part-name").value,
    count: Number.parseInt(row.querySelector(".part-count").value, 10),
    diameter: row.querySelector(".part-diameter").value || "",
    isAluminium: row.querySelector(".part-alu").checked,
    needsPainting: row.querySelector(".part-lacquer").checked,
  }));
}

function selectedDiameter() {
  const checked = document.querySelector('input[name="diameter"]:checked');
  return checked ? checked.value : "20";
}

function renderResult() {
  const prices = calculatePdrPrice(collectDamageParts());
  const empty = document.getElementById("result-empty");
  const content = document.getElementById("result-content");
  const tbody = document.getElementById("result-rows");

  if (prices.calculationDetails.length === 0) {
    empty.hidden = false;
    content.hidden = true;
    return;
  }

  empty.hidden = true;
  content.hidden = false;
  tbody.innerHTML = prices.calculationDetails
    .map(
      (detail) => `
        <tr>
          <td>${detail.partName}</td>
          <td>${detail.count}</td>
          <td>${detail.diameter} mm</td>
          <td class="adjustment-cell">${
            detail.adjustmentLabel === "Bez úpravy" ? "" : detail.adjustmentLabel
          }</td>
          <td class="num">${formatCzk(detail.partPrice)}</td>
        </tr>
      `,
    )
    .join("");

  const hasAdjustments = prices.calculationDetails.some(
    (detail) => detail.adjustmentLabel !== "Bez úpravy",
  );
  document.getElementById("adjustment-header").hidden = !hasAdjustments;
  tbody.querySelectorAll(".adjustment-cell").forEach((cell) => {
    cell.hidden = !hasAdjustments;
  });

  document.getElementById("sum-before-material").textContent = formatCzk(prices.totalBeforeMaterial);
  document.getElementById("sum-material").textContent = formatCzk(prices.materialAddition);
  document.getElementById("dismantling-label").textContent = "Demontáž/montáž";
  document.getElementById("sum-dismantling").textContent = formatCzk(prices.dismantling);
  document.getElementById("sum-without-vat").textContent = formatCzk(prices.priceWithoutVat);
  document.getElementById("sum-vat").textContent = formatCzk(prices.vatAmount);
  document.getElementById("sum-with-vat").textContent = formatCzk(prices.priceWithVat);
  document.getElementById("print-meta").textContent =
    `Datum výpočtu: ${new Date().toLocaleDateString("cs-CZ")}`;
}

function resetDamageForm() {
  document.querySelectorAll(".part-row").forEach((row) => {
    row.querySelector(".part-count").value = "";
    row.querySelector(".part-diameter").value = "";
    row.querySelector(".diameter-cycle").textContent = "0";
    row.querySelector(".part-alu").checked = false;
    row.querySelector(".part-lacquer").checked = false;
    updatePartRowState(row);
  });

  renderResult();
}

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", () => closeSelectMenus());
  PART_OPTIONS.forEach((option) => addPartRow(option.value));

  document.querySelectorAll(".part-choice").forEach((button) => {
    button.addEventListener("click", () => {
      addPartRow(button.dataset.part);
      renderResult();
    });
  });

  document.getElementById("pdr-form").addEventListener("submit", (event) => {
    event.preventDefault();
    renderResult();
  });

  document.getElementById("reset-form").addEventListener("click", resetDamageForm);

  document.querySelectorAll('input[name="diameter"]').forEach((input) => {
    input.addEventListener("change", () => {
      updateDefaultDiameterLabels();
      renderResult();
    });
  });

  document.getElementById("print-result").addEventListener("click", () => {
    window.print();
  });

  renderResult();
});
