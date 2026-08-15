const EMPLOYEE_KEY = "scumbags-sale-tracker-employee";
const ACTIVE_STORE_KEY = "scumbags-sale-tracker-store";

const STORES = {
  lanova: {
    id: "lanova",
    label: "La Nova",
    brandMark: "LA NOVA",
    menuTitle: "Menu",
    theme: "lanova",
    paidOptional: false,
    paidLabel: "Paid by customer",
    paidPlaceholder: "Enter amount paid",
    menu: [
      {
        category: "Antipasti",
        items: [
          { id: "gabagool", name: "Gabagool", price: 30 },
          { id: "pane-toscano", name: "Pane Toscano", price: 15 },
          {
            id: "gabagool-bites",
            name: "Gabagool Bites and Cheese Platter",
            price: 25,
          },
        ],
      },
      {
        category: "Bevande",
        items: [
          { id: "corbizzi", name: "Corbizzi Brunello", price: 25000 },
          { id: "marlow", name: "Marlow White Wine", price: 150 },
          { id: "spiced-wine", name: "Vintaged Spiced Wine", price: 450 },
          { id: "scotch", name: "Scotch", price: 20 },
        ],
      },
      {
        category: "Piatto Principale",
        items: [
          { id: "pizza", name: "Italian Pizza", price: 45 },
          { id: "fettuccine", name: "Fettuccine Alfredo", price: 45 },
          { id: "penne", name: "Penne Marinara", price: 45 },
          { id: "spaghetti", name: "Spaghetti and Meatballs", price: 50 },
          { id: "burger", name: "Double Cheeseburger", price: 35 },
          { id: "sirloin", name: "Sirloin Steak", price: 50 },
          { id: "tomahawk", name: "Tomahawk Steak", price: 60 },
          { id: "oscar", name: "Chicken Lobster Oscar", price: 65 },
        ],
      },
      {
        category: "Sigari",
        items: [
          { id: "cigars", name: "Box of Cigars", price: null, soldOut: true },
        ],
      },
      {
        category: "Specialità",
        items: [
          {
            id: "pasto-todaro",
            name: "Pasto Todaro",
            price: 1000,
            note: "Includes all starters, mains, and pairings. Limited to one per customer.",
          },
          {
            id: "tuscan-table",
            name: "Tuscan Table",
            price: 800,
            note: "Pane Toscano, Gabagool, cheese, and Italian Pizza. Paired with five Marlow Whites.",
          },
        ],
      },
      {
        category: "Dessert",
        items: [{ id: "apple-pie", name: "Signature Apple Pie", price: 45 }],
      },
    ],
  },
  bisarnos: {
    id: "bisarnos",
    label: "Bisarnos",
    brandMark: "BISARNOS ATTACHMENTS",
    menuTitle: "Catalog",
    theme: "bisarnos",
    paidOptional: false,
    hasPricingModes: true,
    paidLabel: "Paid by customer",
    paidPlaceholder: "Enter amount paid",
    menu: [
      {
        category: "Magazine / Kits",
        items: [
          {
            id: "mini14-mag-kit",
            name: "Mini-14 Magazine Kit",
            single: 1300,
            shipment: 2400,
          },
          {
            id: "type100-40-mag",
            name: "40-Round Extended Magazine (Type 100/44)",
            single: 2350,
            shipment: 4500,
          },
          {
            id: "akm74-45-mag",
            name: "45-Round 5.45x39mm AKM-74 Magazine",
            single: 4100,
            shipment: 8000,
          },
          {
            id: "akm-545-mag-kit",
            name: "AKM 5.45x39mm Magazine Conversion Kit",
            single: 1100,
            shipment: 2000,
          },
          {
            id: "uzi-mag-kit",
            name: "UZI Mag Conversion Kit",
            single: 1700,
            shipment: 3200,
          },
          {
            id: "pm-25-mag",
            name: "25-Round Extended Magazine - PM",
            single: 1100,
            shipment: 2000,
          },
          {
            id: "cz75-18-mag",
            name: "18 Round Extended Mag CZ75",
            single: 700,
            shipment: 1200,
          },
          {
            id: "vp70-30-mag",
            name: "30 Round Mag VP70",
            single: 2600,
            shipment: 5000,
          },
        ],
      },
      {
        category: "Weapon Sights / Slide Kits",
        items: [
          {
            id: "susat",
            name: "SUSAT (2 - 4x)",
            single: 1100,
            shipment: 2000,
          },
          {
            id: "acog-ta01",
            name: "Trijicon ACOG TA01 (4x)",
            single: 1100,
            shipment: 2000,
          },
          {
            id: "farview",
            name: "Farview (2-12x)",
            single: 1100,
            shipment: 2000,
          },
          {
            id: "walther-scope",
            name: "Walther Scope (1.5x)",
            single: 600,
            shipment: 1000,
          },
          {
            id: "m1911-slide-kit",
            name: "Colt M1911A1 Slide Kit",
            single: 1100,
            shipment: 2000,
          },
          {
            id: "fal-18-para-barrel",
            name: "18 in. Para Barrel - FN FAL",
            single: 1100,
            shipment: 2000,
          },
          {
            id: "p226-slide-kit",
            name: "SIG Sauer P226 Slide Kit",
            single: 700,
            shipment: 1200,
          },
          {
            id: "deagle-slide-kit",
            name: "Desert Eagle Slide Kit",
            single: 1100,
            shipment: 2000,
          },
        ],
      },
      {
        category: "Weapon Barrels / Suppressor / Receivers",
        items: [
          {
            id: "benelli-7-tube",
            name: "7-Round Tube (Benelli M3)",
            single: 3700,
            shipment: 7200,
          },
          {
            id: "benelli-12-tube",
            name: "12-Round Tube (Benelli M3)",
            single: 5100,
            shipment: 10000,
          },
          {
            id: "mini14-barrel-kit",
            name: "Mini-14 Barrel Kit",
            single: 1300,
            shipment: 2400,
          },
          {
            id: "m16a2-barrel-kit",
            name: "Colt M16A2 Barrel Kit",
            single: 1700,
            shipment: 3200,
          },
          {
            id: "p38-carbine-barrel",
            name: "Carbine Barrel - Walther P38",
            single: 600,
            shipment: 1000,
          },
          {
            id: "pbs1-suppressor",
            name: "PBS-1 Suppressor",
            single: 2100,
            shipment: 4000,
          },
          {
            id: "light-suppressor",
            name: "Light Supressor",
            single: 1350,
            shipment: 2500,
          },
          {
            id: "m16a2-receiver-kit",
            name: "Colt M16A2 Receiver Kit",
            single: 1700,
            shipment: 3200,
          },
        ],
      },
    ],
  },
};

const storeState = {
  lanova: {
    quantities: Object.create(null),
    paid: "",
    search: "",
    paidManual: false,
  },
  bisarnos: {
    quantities: Object.create(null),
    customer: "",
    customerLicense: "",
    paid: "",
    search: "",
    paidManual: false,
    openCategories: new Set(),
  },
};

let activeStoreId = "lanova";
const BISARNOS_PASSCODE = "1111";
let bisarnosUnlocked = false;

const els = {
  brandMark: document.getElementById("brand-mark"),
  employee: document.getElementById("employee"),
  customerField: document.getElementById("customer-field"),
  customer: document.getElementById("customer"),
  licenseField: document.getElementById("license-field"),
  customerLicense: document.getElementById("customer-license"),
  paid: document.getElementById("paid"),
  paidLabel: document.getElementById("paid-label"),
  autoTotal: document.getElementById("auto-total"),
  itemCount: document.getElementById("item-count"),
  copyBtn: document.getElementById("copy-btn"),
  clearBtn: document.getElementById("clear-btn"),
  status: document.getElementById("status"),
  preview: document.getElementById("preview"),
  menu: document.getElementById("menu"),
  menuTitle: document.getElementById("menu-title"),
  search: document.getElementById("menu-search"),
  photoClipboard: document.getElementById("photo-clipboard"),
  photoPasteZone: document.getElementById("photo-paste-zone"),
  choosePhotosBtn: document.getElementById("choose-photos-btn"),
  photoInput: document.getElementById("photo-input"),
  photoList: document.getElementById("photo-list"),
  clearPhotosBtn: document.getElementById("clear-photos-btn"),
  photoLightbox: document.getElementById("photo-lightbox"),
  photoLightboxImage: document.getElementById("photo-lightbox-image"),
  photoLightboxClose: document.getElementById("photo-lightbox-close"),
  bisarnosLock: document.getElementById("bisarnos-lock"),
  bisarnosLockForm: document.getElementById("bisarnos-lock-form"),
  bisarnosPasscode: document.getElementById("bisarnos-passcode"),
  bisarnosLockError: document.getElementById("bisarnos-lock-error"),
  bisarnosLockCancel: document.getElementById("bisarnos-lock-cancel"),
  storeButtons: Array.from(document.querySelectorAll(".store-btn")),
};

function activeStore() {
  return STORES[activeStoreId];
}

function activeState() {
  return storeState[activeStoreId];
}

function formatMoney(amount) {
  if (!Number.isFinite(amount)) return "$0";
  const rounded = Math.round(amount * 100) / 100;
  const hasCents = Math.abs(rounded % 1) > 0;
  return (
    "$" +
    rounded.toLocaleString("en-US", {
      minimumFractionDigits: hasCents ? 2 : 0,
      maximumFractionDigits: 2,
    })
  );
}

function formatMoneyWithCents(amount) {
  if (!Number.isFinite(amount)) return "$0.00";
  return (
    "$" +
    amount.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
}

function parsePaid(value) {
  const cleaned = String(value || "")
    .replace(/\$/g, "")
    .replace(/,/g, "")
    .trim();
  if (!cleaned) return null;
  const num = Number(cleaned);
  return Number.isFinite(num) ? num : null;
}

function allItems(store = activeStore()) {
  return store.menu.flatMap((group) => group.items);
}

const MODE_LABELS = { single: "Single", shipment: "Shipment" };

function itemModes(store = activeStore()) {
  return store.hasPricingModes ? ["single", "shipment"] : [null];
}

function qtyKey(itemId, mode) {
  return mode ? `${itemId}::${mode}` : itemId;
}

function getQty(itemId, mode) {
  return activeState().quantities[qtyKey(itemId, mode)] || 0;
}

function getItemUnitPrice(item, mode) {
  if (item.soldOut) return null;

  const value = mode ? item[mode] : item.price;
  return Number.isFinite(value) ? value : null;
}

function getSelectedLines() {
  const lines = [];
  allItems().forEach((item) => {
    itemModes().forEach((mode) => {
      const qty = getQty(item.id, mode);
      if (qty > 0) lines.push({ item, mode, qty });
    });
  });
  return lines;
}

function getAutoTotal() {
  return getSelectedLines().reduce((sum, line) => {
    const unit = getItemUnitPrice(line.item, line.mode);
    if (unit == null) return sum;
    return sum + unit * line.qty;
  }, 0);
}

function formatPaidInput(amount) {
  if (!Number.isFinite(amount) || amount <= 0) return "";
  const rounded = Math.round(amount * 100) / 100;
  const hasCents = Math.abs(rounded % 1) > 0;
  return rounded.toLocaleString("en-US", {
    minimumFractionDigits: hasCents ? 2 : 0,
    maximumFractionDigits: 2,
  });
}

function syncPaidFromAuto() {
  const state = activeState();
  const auto = getAutoTotal();
  if (state.paidManual && auto > 0) return;

  if (auto <= 0) state.paidManual = false;
  const next = formatPaidInput(auto);
  els.paid.value = next;
  state.paid = next;
}

function getFinalTotal() {
  return parsePaid(els.paid.value);
}

function buildLogText() {
  const name = els.employee.value.trim();
  const lines = getSelectedLines();
  if (!name || lines.length === 0) return "";

  const store = activeStore();
  const customer = els.customer.value.trim();
  const override = parsePaid(els.paid.value);
  if (!store.paidOptional && override == null) return "";

  if (store.id === "bisarnos") {
    const attachments = lines
      .map(
        (line) =>
          `x${line.qty} ${line.item.name} ${MODE_LABELS[line.mode]}`,
      )
      .join(", ");
    return [
      `Employee: ${name}`,
      `Customer: ${customer}`,
      `Paid: ${formatMoneyWithCents(override)}`,
      `Attachments: ${attachments}`,
    ].join("\n");
  }

  const itemLines = lines.map((line) => {
    const label = line.mode
      ? `${line.item.name} (${MODE_LABELS[line.mode]})`
      : line.item.name;
    return `${label} x ${line.qty}`;
  });
  return [name, ...itemLines, `Paid: ${formatMoney(getFinalTotal())}`].join(
    "\n",
  );
}

function updatePreview() {
  const name = els.employee.value.trim();
  const lines = getSelectedLines();
  const auto = getAutoTotal();
  const count = lines.reduce((n, line) => n + line.qty, 0);
  const store = activeStore();
  const override = parsePaid(els.paid.value);

  els.autoTotal.textContent = formatMoney(auto);
  els.itemCount.textContent = String(count);

  const text = buildLogText();
  if (!text) {
    if (!name && lines.length === 0) {
      els.preview.textContent = "Enter your name and select items…";
    } else if (!name) {
      els.preview.textContent = "Enter your name to finish the log…";
    } else if (lines.length === 0) {
      els.preview.textContent = "Select at least one item…";
    } else if (!store.paidOptional && override == null) {
      els.preview.textContent = "Enter the paid amount to finish the log…";
    } else {
      els.preview.textContent = "Finish the sale details…";
    }
    return;
  }

  els.preview.textContent = text;
}

function setStatus(message, isError = false) {
  els.status.textContent = message;
  els.status.classList.toggle("error", isError);
}

function setQty(id, mode, next) {
  const item = allItems().find((entry) => entry.id === id);
  if (!item || item.soldOut) return;

  const quantities = activeState().quantities;
  const key = qtyKey(id, mode);
  const value = Math.max(0, Math.min(99, next));
  if (value === 0) delete quantities[key];
  else quantities[key] = value;

  const row = els.menu.querySelector(`[data-id="${id}"]`);
  if (row) {
    const stepper = row.querySelector(`.qty[data-key="${key}"]`);
    if (stepper) {
      stepper.querySelector(".qty-value").textContent = String(value);
      stepper.querySelector(".qty-minus").disabled = value === 0;
    }
    const rowTotal = itemModes().reduce(
      (sum, entry) => sum + getQty(id, entry),
      0,
    );
    row.classList.toggle("active", rowTotal > 0);
  }

  syncPaidFromAuto();
  updatePreview();
}

function renderMenu(filter = activeState().search) {
  const query = filter.trim().toLowerCase();
  const modes = itemModes();
  const collapsible = activeStore().id === "bisarnos";
  els.menu.innerHTML = "";

  activeStore().menu.forEach((group) => {
    const items = group.items.filter((item) => {
      if (!query) return true;
      return (
        item.name.toLowerCase().includes(query) ||
        group.category.toLowerCase().includes(query)
      );
    });
    if (items.length === 0) return;

    const section = document.createElement("section");
    section.className = "category";
    const categoryItems = document.createElement("div");
    categoryItems.className =
      "category-items" +
      (activeStore().id === "lanova" ? " category-items-lanova" : "");

    if (collapsible) {
      const isOpen =
        Boolean(query) || activeState().openCategories.has(group.category);
      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "category-toggle";
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.innerHTML = `
        <span>${group.category}</span>
        <span class="category-count">${group.items.length}</span>
        <span class="category-chevron" aria-hidden="true">⌄</span>
      `;
      section.classList.toggle("collapsed", !isOpen);
      categoryItems.hidden = !isOpen;
      toggle.addEventListener("click", () => {
        const nextOpen = toggle.getAttribute("aria-expanded") !== "true";
        toggle.setAttribute("aria-expanded", String(nextOpen));
        section.classList.toggle("collapsed", !nextOpen);
        categoryItems.hidden = !nextOpen;
        if (nextOpen) activeState().openCategories.add(group.category);
        else activeState().openCategories.delete(group.category);
      });
      section.appendChild(toggle);
    } else {
      section.innerHTML = `<h3>${group.category}</h3>`;
    }

    items.forEach((item) => {
      const rowTotal = modes.reduce(
        (sum, mode) => sum + getQty(item.id, mode),
        0,
      );
      const row = document.createElement("div");
      row.className =
        "item" +
        (rowTotal > 0 ? " active" : "") +
        (item.soldOut ? " sold-out" : "");
      row.dataset.id = item.id;

      const steppers = modes
        .map((mode) => {
          const qty = getQty(item.id, mode);
          const unitPrice = getItemUnitPrice(item, mode);
          const priceLabel = item.soldOut
            ? "Sold out"
            : unitPrice == null
              ? "Set in Paid"
              : formatMoney(unitPrice);
          const modeLabel = mode ? MODE_LABELS[mode] : null;
          const ariaName = modeLabel
            ? `${modeLabel} ${item.name}`
            : item.name;
          const labelHtml = modeLabel
            ? `<span class="qty-tag">${modeLabel}</span>`
            : "";

          return `
            <div class="qty-line${modeLabel ? "" : " qty-line-simple"}">
              ${labelHtml}
              <span class="qty-price">${priceLabel}</span>
              <div class="qty" data-key="${qtyKey(item.id, mode)}">
                <button type="button" class="qty-minus" data-mode="${mode || ""}" aria-label="Decrease ${ariaName}" ${
                  item.soldOut || qty === 0 ? "disabled" : ""
                }>−</button>
                <span class="qty-value">${qty}</span>
                <button type="button" class="qty-plus" data-mode="${mode || ""}" aria-label="Increase ${ariaName}" ${
                  item.soldOut ? "disabled" : ""
                }>+</button>
              </div>
            </div>
          `;
        })
        .join("");

      row.innerHTML = `
        <div class="item-info">
          <p class="item-name">${item.name}${
            item.soldOut ? '<span class="badge">Sold out</span>' : ""
          }</p>
          ${
            item.note
              ? `<p class="item-note">${item.note}</p>`
              : ""
          }
        </div>
        <div class="qty-group">${steppers}</div>
      `;

      row.querySelectorAll(".qty-minus").forEach((btn) => {
        btn.addEventListener("click", () => {
          const mode = btn.dataset.mode || null;
          setQty(item.id, mode, getQty(item.id, mode) - 1);
        });
      });
      row.querySelectorAll(".qty-plus").forEach((btn) => {
        btn.addEventListener("click", () => {
          const mode = btn.dataset.mode || null;
          setQty(item.id, mode, getQty(item.id, mode) + 1);
        });
      });

      categoryItems.appendChild(row);
    });

    section.appendChild(categoryItems);
    els.menu.appendChild(section);
  });
}

function clearSale() {
  const state = activeState();
  Object.keys(state.quantities).forEach((key) => delete state.quantities[key]);
  if (activeStoreId === "bisarnos") {
    state.customer = "";
    state.customerLicense = "";
    els.customer.value = "";
    els.customerLicense.value = "";
  }
  state.paid = "";
  state.paidManual = false;
  els.paid.value = "";
  renderMenu(state.search);
  updatePreview();
  setStatus("Sale cleared. Your name was kept.");
}

async function copyLog() {
  const store = activeStore();
  if (!els.employee.value.trim()) {
    setStatus("Add your name before copying.", true);
    els.employee.focus();
    return;
  }
  if (store.id === "bisarnos" && !els.customer.value.trim()) {
    setStatus("Add the customer's name before copying.", true);
    els.customer.focus();
    return;
  }
  if (getSelectedLines().length === 0) {
    setStatus("Select at least one item.", true);
    return;
  }
  if (!store.paidOptional && parsePaid(els.paid.value) == null) {
    setStatus("Enter the paid amount before copying.", true);
    els.paid.focus();
    return;
  }

  const text = buildLogText();
  if (!text) {
    setStatus("Could not build the log.", true);
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    clearSale();
    setStatus("Copied — paste into #sales-ledger.");
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.left = "-9999px";
    document.body.appendChild(area);
    area.select();
    try {
      document.execCommand("copy");
      clearSale();
      setStatus("Copied — paste into #sales-ledger.");
    } catch {
      setStatus("Could not copy. Select the preview and copy manually.", true);
    } finally {
      document.body.removeChild(area);
    }
  }
}

function persistActiveStoreUi() {
  const state = activeState();
  if (activeStoreId === "bisarnos") {
    state.customer = els.customer.value;
    state.customerLicense = els.customerLicense.value;
  }
  state.paid = els.paid.value;
  state.search = els.search.value;
}

function applyStoreChrome() {
  const store = activeStore();
  document.body.dataset.theme = store.theme;
  els.brandMark.textContent = store.brandMark;
  els.menuTitle.textContent = store.menuTitle;
  els.paidLabel.textContent = store.paidLabel;
  els.paid.placeholder = store.paidPlaceholder;
  const isBisarnos = store.id === "bisarnos";
  els.customerField.classList.toggle("hidden", !isBisarnos);
  els.licenseField.classList.toggle("hidden", !isBisarnos);
  els.photoClipboard.classList.toggle("hidden", !isBisarnos);

  els.storeButtons.forEach((btn) => {
    const selected = btn.dataset.store === activeStoreId;
    btn.classList.toggle("active", selected);
    btn.setAttribute("aria-selected", selected ? "true" : "false");
  });
}

function openBisarnosLock() {
  els.bisarnosLockError.textContent = "";
  els.bisarnosPasscode.value = "";
  els.bisarnosLock.hidden = false;
  els.bisarnosLock.classList.remove("hidden");
  requestAnimationFrame(() => els.bisarnosPasscode.focus());
}

function closeBisarnosLock() {
  els.bisarnosLock.hidden = true;
  els.bisarnosLock.classList.add("hidden");
  els.bisarnosPasscode.value = "";
  els.bisarnosLockError.textContent = "";
}

function switchStore(storeId) {
  if (!STORES[storeId] || storeId === activeStoreId) return;

  if (storeId === "bisarnos" && !bisarnosUnlocked) {
    openBisarnosLock();
    return;
  }

  persistActiveStoreUi();
  activeStoreId = storeId;
  localStorage.setItem(ACTIVE_STORE_KEY, storeId);

  const state = activeState();
  els.customer.value = state.customer || "";
  els.customerLicense.value = state.customerLicense || "";
  els.paid.value = state.paid;
  els.search.value = state.search;

  applyStoreChrome();
  renderMenu(state.search);
  updatePreview();
  setStatus("");
}

function loadEmployee() {
  const saved = localStorage.getItem(EMPLOYEE_KEY);
  if (saved) els.employee.value = saved;
}

function saveEmployee() {
  localStorage.setItem(EMPLOYEE_KEY, els.employee.value.trim());
}

function loadInitialStore() {
  // Bisarnos stays locked until the passcode is entered this session.
  const saved = localStorage.getItem(ACTIVE_STORE_KEY);
  if (saved && STORES[saved] && saved !== "bisarnos") activeStoreId = saved;
}

const PHOTO_DB_NAME = "scumbags-sale-tracker";
const PHOTO_STORE_NAME = "bisarnos-photos";
let photoRecords = [];
let photoObjectUrls = [];

function openPhotoDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(PHOTO_DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(PHOTO_STORE_NAME)) {
        db.createObjectStore(PHOTO_STORE_NAME, { keyPath: "id" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function runPhotoTransaction(mode, operation) {
  const db = await openPhotoDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(PHOTO_STORE_NAME, mode);
    const store = transaction.objectStore(PHOTO_STORE_NAME);
    const request = operation(store);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
    transaction.oncomplete = () => db.close();
  });
}

function makePhotoId() {
  if (crypto.randomUUID) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function clampPhotoWindow() {
  const rect = els.photoLightbox.getBoundingClientRect();
  const maxLeft = Math.max(8, window.innerWidth - rect.width - 8);
  const maxTop = Math.max(8, window.innerHeight - rect.height - 8);
  const left = Math.min(Math.max(rect.left, 8), maxLeft);
  const top = Math.min(Math.max(rect.top, 8), maxTop);
  els.photoLightbox.style.left = `${left}px`;
  els.photoLightbox.style.top = `${top}px`;
}

function openPhotoLightbox(url) {
  els.photoLightboxImage.src = url;
  els.photoLightbox.hidden = false;
  els.photoLightbox.classList.remove("hidden");

  const width = els.photoLightbox.offsetWidth;
  els.photoLightbox.style.left = `${Math.max(8, window.innerWidth - width - 24)}px`;
  els.photoLightbox.style.top = "90px";
  clampPhotoWindow();
}

function closePhotoLightbox() {
  els.photoLightbox.hidden = true;
  els.photoLightbox.classList.add("hidden");
  els.photoLightboxImage.removeAttribute("src");
}

function startPhotoWindowDrag(event) {
  if (event.button !== 0) return;
  if (event.target.closest("button")) return;

  const win = els.photoLightbox;
  const rect = win.getBoundingClientRect();
  // Ignore the native resize grip in the bottom-right corner.
  if (event.clientX > rect.right - 18 && event.clientY > rect.bottom - 18) {
    return;
  }

  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;

  const onMove = (moveEvent) => {
    const maxLeft = window.innerWidth - win.offsetWidth - 8;
    const maxTop = window.innerHeight - win.offsetHeight - 8;
    const left = Math.min(Math.max(moveEvent.clientX - offsetX, 8), maxLeft);
    const top = Math.min(Math.max(moveEvent.clientY - offsetY, 8), maxTop);
    win.style.left = `${left}px`;
    win.style.top = `${top}px`;
  };

  const onUp = () => {
    win.classList.remove("dragging");
    window.removeEventListener("pointermove", onMove);
    window.removeEventListener("pointerup", onUp);
    window.removeEventListener("pointercancel", onUp);
  };

  win.classList.add("dragging");
  window.addEventListener("pointermove", onMove);
  window.addEventListener("pointerup", onUp);
  window.addEventListener("pointercancel", onUp);
  event.preventDefault();
}

let ocrRunning = false;
let ocrWorkerPromise = null;
let ocrPassLabel = "ID";

const LICENSE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-";

function boostContrast(canvas, amount) {
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  const image = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const pixels = image.data;
  for (let i = 0; i < pixels.length; i += 4) {
    const gray =
      pixels[i] * 0.299 + pixels[i + 1] * 0.587 + pixels[i + 2] * 0.114;
    const boosted = Math.min(255, Math.max(0, (gray - 128) * amount + 128));
    pixels[i] = boosted;
    pixels[i + 1] = boosted;
    pixels[i + 2] = boosted;
  }
  ctx.putImageData(image, 0, 0);
  return canvas;
}

function drawScaled(source, sx, sy, sWidth, sHeight, scale, contrast = 0) {
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(sWidth * scale));
  canvas.height = Math.max(1, Math.round(sHeight * scale));
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(
    source,
    sx,
    sy,
    sWidth,
    sHeight,
    0,
    0,
    canvas.width,
    canvas.height,
  );
  return contrast ? boostContrast(canvas, contrast) : canvas;
}

// The whole screenshot is scanned, so the ID can sit anywhere in frame. The
// contrast stretch is what makes the big license text read cleanly.
async function loadOcrSource(blob) {
  const bitmap = await createImageBitmap(blob);
  const scale = Math.min(3, Math.max(1, 2200 / bitmap.width));
  const canvas = drawScaled(
    bitmap,
    0,
    0,
    bitmap.width,
    bitmap.height,
    scale,
    1.6,
  );
  return { bitmap, canvas, scale };
}

// Crops are taken from the untouched original, so zooming never compounds the
// blur of an already-resampled image. Coordinates come in canvas space.
function cropSource(source, bbox, { targetWidth, contrast, pad = 0 }) {
  const x = Math.max(0, bbox.x0 / source.scale - pad);
  const y = Math.max(0, bbox.y0 / source.scale - pad);
  const width = Math.min(
    source.bitmap.width - x,
    (bbox.x1 - bbox.x0) / source.scale + pad * 2,
  );
  const height = Math.min(
    source.bitmap.height - y,
    (bbox.y1 - bbox.y0) / source.scale + pad * 2,
  );
  if (width < 8 || height < 6) return null;
  const zoom = Math.min(8, Math.max(2, targetWidth / width));
  return drawScaled(source.bitmap, x, y, width, height, zoom, contrast);
}

// The card's detail text sits above the license, so the license line anchors
// the crop wherever the ID happens to be on screen.
function cardRegionFromLicense(bbox) {
  const lineWidth = bbox.x1 - bbox.x0;
  const lineHeight = bbox.y1 - bbox.y0;
  return {
    x0: bbox.x0 - lineWidth * 0.35,
    x1: bbox.x0 + lineWidth * 2.9,
    y0: bbox.y1 - lineHeight * 14,
    y1: bbox.y1 + lineHeight * 0.6,
  };
}

async function getOcrWorker() {
  if (!ocrWorkerPromise) {
    ocrWorkerPromise = Tesseract.createWorker("eng", 1, {
      logger(message) {
        if (message.status === "recognizing text") {
          const progress = Math.round((message.progress || 0) * 100);
          setStatus(`Reading ${ocrPassLabel}… ${progress}%`);
        }
      },
    });
  }
  return ocrWorkerPromise;
}

async function runOcr(image, { psm, whitelist = "", blocks = false }) {
  const worker = await getOcrWorker();
  await worker.setParameters({
    tessedit_pageseg_mode: psm,
    tessedit_char_whitelist: whitelist,
  });
  const { data } = await worker.recognize(image, {}, { text: true, blocks });
  return data;
}

function collectLines(data) {
  const lines = [];
  (data.blocks || []).forEach((block) =>
    (block.paragraphs || []).forEach((paragraph) =>
      (paragraph.lines || []).forEach((line) =>
        lines.push({ text: line.text || "", bbox: line.bbox }),
      ),
    ),
  );
  return lines;
}

// Lines that look like they could hold a license code, best guess first.
function rankLicenseLines(lines) {
  const usable = lines.filter((line) => line.bbox);
  const ranked = usable
    .map((line) => {
      const text = line.text.toUpperCase();
      let score = 0;
      if (/\bF[A-Z0-9]{1,5}\s*[-–—]/.test(text)) score += 6;
      if (/[-–—]/.test(text)) score += 2;
      if (/\d{3,}/.test(text)) score += 3;
      if (/\bF/.test(text)) score += 1;
      if (/LICEN[CS]E|ID\b|SSN/.test(text)) score += 2;
      return { ...line, score };
    })
    .filter((line) => line.score >= 4)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  if (ranked.length > 0) return ranked;

  // The first pass can be too garbled to rank, so fall back to re-reading the
  // biggest lines on the page — the license is usually printed large.
  return usable
    .sort(
      (a, b) =>
        (b.bbox.y1 - b.bbox.y0) * (b.bbox.x1 - b.bbox.x0) -
        (a.bbox.y1 - a.bbox.y0) * (a.bbox.x1 - a.bbox.x0),
    )
    .slice(0, 8);
}

function extractCustomerName(text) {
  const labels =
    /\b(?:nationality|english|age|sex|male|female|blood type|eye color|height|weight|ssn|license)\b/i;
  const tidy = (value) => {
    let cleaned = value
      .replace(/[“”]/g, '"')
      .replace(/[‘’]/g, "'")
      .replace(/[^A-Za-zÀ-ÖØ-öø-ÿ'". -]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[.\s-]+|[.\s-]+$/g, "")
      .trim();

    // A nickname's opening or closing quote is easily lost; put it back rather
    // than leaving a lopsided "Tony Meat" Peace.
    if ((cleaned.match(/"/g) || []).length === 1) {
      cleaned = cleaned
        .replace(/(^|\s)([A-Za-zÀ-ÖØ-öø-ÿ'-]+)"/, '$1"$2"')
        .replace(/"([A-Za-zÀ-ÖØ-öø-ÿ'-]+)(\s|$)/, '"$1"$2');
    }

    // Trim stray one-character reads that OCR picks up around the text.
    const parts = cleaned.split(" ");
    while (parts.length > 2 && /^[A-Za-z"']$/.test(parts[parts.length - 1])) {
      parts.pop();
    }
    while (parts.length > 2 && /^[A-Za-z"']$/.test(parts[0])) parts.shift();
    return parts.join(" ").trim();
  };
  const letterCount = (value) => (value.match(/[A-Za-z]/g) || []).length;

  const lines = text
    .split(/\r?\n/)
    .map((line) => line.replace(/[|[\]{}]/g, " ").replace(/\s+/g, " ").trim())
    .filter(Boolean);

  for (let index = 0; index < lines.length; index += 1) {
    if (!/\bname\b/i.test(lines[index])) continue;
    // The card prints "Name" as a heading with the value on the next line,
    // but some layouts keep both on one line.
    const sameLine = tidy(
      lines[index].replace(/^.*?\bname\b\s*[:\-]?\s*/i, "").split(labels)[0],
    );
    const nextLine = tidy((lines[index + 1] || "").split(labels)[0]);
    const candidate = letterCount(sameLine) >= 3 ? sameLine : nextLine;
    if (letterCount(candidate) >= 3 && !labels.test(candidate)) {
      return candidate;
    }
  }
  return "";
}

const OCR_DIGIT_FIXES = {
  O: "0",
  Q: "0",
  D: "0",
  I: "1",
  L: "1",
  T: "7",
  Z: "2",
  S: "5",
  B: "8",
  G: "6",
};

// Groups that are mostly numeric are meant to be numeric, so undo the
// letter/digit confusions Tesseract makes on blocky in-game fonts.
function repairDigitGroup(group) {
  const digits = (group.match(/\d/g) || []).length;
  if (digits === 0 || digits < group.length - 2) return group;
  return group.replace(/[A-Z]/g, (char) => OCR_DIGIT_FIXES[char] || char);
}

function countDigits(value) {
  return (value.match(/\d/g) || []).length;
}

// A finished code has its digit block plus a short trailing group, which is
// how we know not to swallow the next word on the line.
function looksLikeWholeLicense(run) {
  return (
    countDigits(run) >= 5 && !run.endsWith("-") && /-[A-Z0-9]{1,3}$/.test(run)
  );
}

function tidyLicense(run) {
  return run
    .replace(/-{2,}/g, "-")
    .replace(/^-+|-+$/g, "")
    .split("-")
    .map((group, index) => (index === 0 ? group : repairDigitGroup(group)))
    .join("-");
}

// Squeezing out spaces can glue a neighbouring word onto the code, so keep the
// shortest prefix that already reads as a finished license.
function trimToLicense(run) {
  const groups = run.split("-");
  for (let count = 2; count <= groups.length; count += 1) {
    const prefix = groups.slice(0, count).join("-");
    if (looksLikeWholeLicense(prefix)) return prefix;
  }
  return run;
}

// OCR sometimes breaks one code across several tokens ("FAFL-1-204 164- -A"),
// so glue tokens back on until the code looks complete.
function rebuildLicenseFromTokens(tokens, startIndex) {
  let run = tidyLicense(tokens[startIndex]);
  let index = startIndex;
  while (
    !looksLikeWholeLicense(run) &&
    index + 1 < tokens.length &&
    index - startIndex < 3
  ) {
    index += 1;
    run = tidyLicense(run + tokens[index]);
  }
  return trimToLicense(run);
}

function extractLicenseNumber(text) {
  const cleaned = text
    .replace(/[|[\]{}()]/g, " ")
    // OCR often splits the prefix, e.g. "F A V L-3-196441-A".
    .replace(/\b((?:[A-Za-z]\s+){1,5}[A-Za-z])(?=\s*[-—–])/g, (chunk) =>
      chunk.replace(/\s+/g, ""),
    )
    // Normalise dash variants and spacing around them.
    .replace(/[—–‑‒−]/g, "-")
    .replace(/\s*-\s*/g, "-")
    // Rebuild licenses whose hyphens were lost entirely.
    .replace(
      /\bF([A-Z]{1,4})\s+([A-Z0-9]{1,3})\s+([A-Z0-9]{3,8})\s+([A-Z0-9]{1,3})\b/gi,
      "F$1-$2-$3-$4",
    )
    .toUpperCase();

  const candidates = [];
  cleaned.split(/\r?\n/).forEach((line) => {
    const tokens = line.split(/\s+/).filter(Boolean);
    tokens.forEach((token, index) => {
      if (!/^-?F/.test(token)) return;
      candidates.push(rebuildLicenseFromTokens(tokens, index));
    });
  });

  const valid = candidates
    .filter((value) => /^F[A-Z0-9]{0,5}(?:-[A-Z0-9]{1,8})+$/.test(value))
    .map((value) => ({ value, digits: countDigits(value) }))
    // Anything shorter is a partial read; a wrong license beats no license
    // only in the sense that it is worse, so those are dropped.
    .filter((entry) => entry.digits >= 5);

  if (valid.length === 0) return "";

  valid.sort((a, b) => b.digits - a.digits || b.value.length - a.value.length);
  return valid[0].value;
}

async function scanPhotoForId(blob) {
  if (ocrRunning) {
    setStatus("An ID scan is already running.", true);
    return;
  }
  if (!window.Tesseract) {
    setStatus("OCR could not load. Check your internet connection.", true);
    return;
  }

  ocrRunning = true;
  setStatus("Scanning photo for customer details…");

  let source = null;

  try {
    source = await loadOcrSource(blob);

    ocrPassLabel = "the whole photo";
    const full = await runOcr(source.canvas, {
      psm: Tesseract.PSM.AUTO,
      blocks: true,
    });
    const lines = collectLines(full);
    let name = extractCustomerName(full.text);
    let license = extractLicenseNumber(full.text);

    // The card's small print rarely survives the full-page pass, so re-read
    // the card itself: cropped from the original and left unsharpened, which
    // is what makes the tiny grey text legible.
    if (!name) {
      const anchor =
        lines.find((line) => extractLicenseNumber(line.text)) ||
        lines.find((line) => /\bname\b/i.test(line.text));
      const region = anchor
        ? cardRegionFromLicense(anchor.bbox)
        : {
            x0: 0,
            y0: 0,
            x1: source.canvas.width * 0.45,
            y1: source.canvas.height * 0.46,
          };
      const card = cropSource(source, region, {
        targetWidth: 2600,
        contrast: 0,
      });
      if (card) {
        ocrPassLabel = "the ID card";
        const cardData = await runOcr(card, {
          psm: Tesseract.PSM.SINGLE_BLOCK,
        });
        name = extractCustomerName(cardData.text);
        license = license || extractLicenseNumber(cardData.text);
      }
    }

    // Zoom into whichever lines look like a license, wherever they sit.
    if (!license) {
      for (const target of rankLicenseLines(lines)) {
        const zoomed = cropSource(source, target.bbox, {
          targetWidth: 1400,
          contrast: 1.6,
          pad: 6,
        });
        if (!zoomed) continue;
        ocrPassLabel = "the license line";
        const zoomText = (
          await runOcr(zoomed, {
            psm: Tesseract.PSM.SINGLE_LINE,
            whitelist: LICENSE_CHARS,
          })
        ).text;
        license = extractLicenseNumber(zoomText);
        if (license) break;
      }
    }

    // Last resort: sparse-text sweep that reads scattered codes anywhere.
    if (!license) {
      ocrPassLabel = "scattered text";
      const sparse = await runOcr(source.canvas, {
        psm: Tesseract.PSM.SPARSE_TEXT,
        whitelist: LICENSE_CHARS,
      });
      license = extractLicenseNumber(sparse.text);
    }

    if (name) {
      els.customer.value = name;
      storeState.bisarnos.customer = name;
    }
    if (license) {
      els.customerLicense.value = license;
      storeState.bisarnos.customerLicense = license;
    }
    updatePreview();

    if (name && license) {
      setStatus("Customer name and license detected.");
    } else if (name || license) {
      const missing = name ? "license" : "name";
      setStatus(`ID scan could not read the customer ${missing}.`, true);
    } else {
      setStatus("Could not read the ID card.", true);
    }
  } catch {
    setStatus("Could not scan this photo.", true);
  } finally {
    if (source) source.bitmap.close();
    ocrRunning = false;
  }
}

function renderPhotoClipboard() {
  photoObjectUrls.forEach((url) => URL.revokeObjectURL(url));
  photoObjectUrls = [];
  els.photoList.innerHTML = "";

  photoRecords
    .slice()
    .sort((a, b) => b.createdAt - a.createdAt)
    .forEach((record) => {
      const url = URL.createObjectURL(record.blob);
      photoObjectUrls.push(url);
      const card = document.createElement("article");
      card.className = "photo-card";
      card.innerHTML = `
        <img src="${url}" alt="Saved sale screenshot" />
        <div class="photo-actions">
          <button type="button" class="photo-action scan-photo">Scan ID</button>
          <button type="button" class="photo-action copy-photo">Copy photo</button>
          <button type="button" class="photo-action remove" aria-label="Remove photo">Remove</button>
        </div>
      `;
      const image = card.querySelector("img");
      image.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        openPhotoLightbox(url);
      });
      card.querySelector(".scan-photo").addEventListener("click", () => {
        scanPhotoForId(record.blob);
      });
      card.querySelector(".copy-photo").addEventListener("click", () => {
        copyPhoto(record.blob);
      });
      card.querySelector(".remove").addEventListener("click", () => {
        removePhoto(record.id);
      });
      els.photoList.appendChild(card);
    });
}

async function loadPhotos() {
  try {
    photoRecords = await runPhotoTransaction("readonly", (store) =>
      store.getAll(),
    );
    renderPhotoClipboard();
  } catch {
    setStatus("Photo storage is unavailable in this browser.", true);
  }
}

async function addPhotos(files) {
  const images = Array.from(files).filter((file) =>
    file.type.startsWith("image/"),
  );
  if (images.length === 0) {
    setStatus("Paste or choose an image file.", true);
    return;
  }

  try {
    for (const file of images) {
      const record = {
        id: makePhotoId(),
        blob: file,
        createdAt: Date.now(),
      };
      await runPhotoTransaction("readwrite", (store) => store.put(record));
      photoRecords.push(record);
    }
    renderPhotoClipboard();
    setStatus(`${images.length} photo${images.length === 1 ? "" : "s"} saved.`);
  } catch {
    setStatus("Could not save the photo on this device.", true);
  }
}

async function removePhoto(id) {
  try {
    await runPhotoTransaction("readwrite", (store) => store.delete(id));
    photoRecords = photoRecords.filter((record) => record.id !== id);
    renderPhotoClipboard();
  } catch {
    setStatus("Could not remove the photo.", true);
  }
}

async function clearPhotos() {
  if (photoRecords.length === 0) return;
  if (!window.confirm("Remove every saved photo from the clipboard?")) return;

  try {
    await runPhotoTransaction("readwrite", (store) => store.clear());
    photoRecords = [];
    renderPhotoClipboard();
    setStatus("Photo clipboard cleared.");
  } catch {
    setStatus("Could not clear the photo clipboard.", true);
  }
}

async function convertPhotoToPng(blob) {
  if (blob.type === "image/png") return blob;
  const bitmap = await createImageBitmap(blob);
  const canvas = document.createElement("canvas");
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;
  canvas.getContext("2d").drawImage(bitmap, 0, 0);
  bitmap.close();
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (png) => (png ? resolve(png) : reject(new Error("PNG conversion failed"))),
      "image/png",
    );
  });
}

async function copyPhoto(blob) {
  try {
    const png = await convertPhotoToPng(blob);
    await navigator.clipboard.write([
      new ClipboardItem({ "image/png": png }),
    ]);
    setStatus("Photo copied — paste it into Discord.");
  } catch {
    setStatus(
      "Could not copy this photo. Try opening the site over HTTPS.",
      true,
    );
  }
}

els.employee.addEventListener("input", () => {
  saveEmployee();
  updatePreview();
  setStatus("");
});

els.customer.addEventListener("input", () => {
  activeState().customer = els.customer.value;
  updatePreview();
  setStatus("");
});

els.customerLicense.addEventListener("input", () => {
  activeState().customerLicense = els.customerLicense.value;
});

els.paid.addEventListener("input", () => {
  const state = activeState();
  state.paid = els.paid.value;
  const paid = parsePaid(els.paid.value);
  const auto = getAutoTotal();
  state.paidManual = !(paid == null || paid === auto);
  updatePreview();
  setStatus("");
});

els.search.addEventListener("input", () => {
  activeState().search = els.search.value;
  renderMenu(els.search.value);
});

els.choosePhotosBtn.addEventListener("click", () => {
  els.photoInput.click();
});

els.photoPasteZone.addEventListener("paste", (event) => {
  const files = Array.from(event.clipboardData?.files || []);
  if (files.some((file) => file.type.startsWith("image/"))) {
    event.preventDefault();
    addPhotos(files);
  }
});

els.photoPasteZone.addEventListener("dragover", (event) => {
  event.preventDefault();
  els.photoPasteZone.classList.add("dragging");
});

els.photoPasteZone.addEventListener("dragleave", () => {
  els.photoPasteZone.classList.remove("dragging");
});

els.photoPasteZone.addEventListener("drop", (event) => {
  event.preventDefault();
  els.photoPasteZone.classList.remove("dragging");
  addPhotos(event.dataTransfer.files);
});

els.photoInput.addEventListener("change", () => {
  addPhotos(els.photoInput.files);
  els.photoInput.value = "";
});

els.clearPhotosBtn.addEventListener("click", clearPhotos);

els.photoLightboxClose.addEventListener("click", closePhotoLightbox);

els.photoLightbox.addEventListener("pointerdown", startPhotoWindowDrag);

window.addEventListener("resize", () => {
  if (!els.photoLightbox.hidden) clampPhotoWindow();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!els.bisarnosLock.hidden) {
    closeBisarnosLock();
    return;
  }
  if (!els.photoLightbox.hidden) closePhotoLightbox();
});

els.copyBtn.addEventListener("click", copyLog);
els.clearBtn.addEventListener("click", () => {
  clearSale();
});

els.storeButtons.forEach((btn) => {
  btn.addEventListener("click", () => switchStore(btn.dataset.store));
});

els.bisarnosLockForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const code = els.bisarnosPasscode.value.trim();
  if (code !== BISARNOS_PASSCODE) {
    els.bisarnosLockError.textContent = "Wrong code.";
    els.bisarnosPasscode.select();
    return;
  }
  bisarnosUnlocked = true;
  closeBisarnosLock();
  switchStore("bisarnos");
});

els.bisarnosLockCancel.addEventListener("click", closeBisarnosLock);

els.bisarnosPasscode.addEventListener("input", () => {
  els.bisarnosLockError.textContent = "";
  els.bisarnosPasscode.value = els.bisarnosPasscode.value
    .replace(/\D/g, "")
    .slice(0, 4);
});

loadEmployee();
loadInitialStore();
applyStoreChrome();
els.customer.value = activeState().customer || "";
els.customerLicense.value = activeState().customerLicense || "";
els.paid.value = activeState().paid;
els.search.value = activeState().search;
renderMenu(activeState().search);
updatePreview();
loadPhotos();
