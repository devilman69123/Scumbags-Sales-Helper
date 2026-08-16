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
    quickCopy: [
      {
        id: "advert",
        label: "Advert",
        text: "/advertisement ❦ LA NOVA Restaurant ❦ A House of Respect and Tradition. Step inside and share a glass of wine, where every meal is served with heritage and dignity. Now Open in Little Italy, just outside City Center on the corner of 13th! | Jobs Available for $15,000 per 30 min worked! | Upon Full-Time employment, you will obtain company clothing and unique company car!",
      },
    ],
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
    quickCopy: [
      {
        id: "advert",
        label: "Advert",
        text: "/advertisement ✧ Bisarno Attachment Store ✧ Step into New York’s finest weapon attachment hub, right beside the deli across the street at the motel. Browse premium modifications. FAFL license & attachment stamp required. Now hiring, no experience needed! Employment comes with a unique company car! ✧",
      },
      {
        id: "gov-form",
        label: "Gov Form",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSf78LOyjb4BBFe9Lk-HEn2qaVu79-B0AlUUjGVrlt8YVsBC-w/viewform",
        prefillGovForm: true,
      },
    ],
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
    orderIdentifier: "",
    paid: "",
    search: "",
    paidManual: false,
  },
  bisarnos: {
    quantities: Object.create(null),
    customer: "",
    customerLicense: "",
    couponCode: "",
    orderIdentifier: "",
    paid: "",
    search: "",
    paidManual: false,
    openCategories: new Set(),
  },
};

let activeStoreId = "lanova";
const BISARNOS_PASSCODE = "8008";
let bisarnosUnlocked = false;

const els = {
  brandMark: document.getElementById("brand-mark"),
  quickCopy: document.getElementById("quick-copy"),
  quickCopyHint: document.getElementById("quick-copy-hint"),
  saleDetailsHint: document.getElementById("sale-details-hint"),
  employee: document.getElementById("employee"),
  customerField: document.getElementById("customer-field"),
  customer: document.getElementById("customer"),
  licenseField: document.getElementById("license-field"),
  customerLicense: document.getElementById("customer-license"),
  couponField: document.getElementById("coupon-field"),
  couponCode: document.getElementById("coupon-code"),
  orderIdentifier: document.getElementById("order-identifier"),
  paid: document.getElementById("paid"),
  paidLabel: document.getElementById("paid-label"),
  autoTotal: document.getElementById("auto-total"),
  itemCount: document.getElementById("item-count"),
  copyBtn: document.getElementById("copy-btn"),
  holdSaleBtn: document.getElementById("hold-sale-btn"),
  prefillGovFormBtn: document.getElementById("prefill-gov-form-btn"),
  clearBtn: document.getElementById("clear-btn"),
  status: document.getElementById("status"),
  preview: document.getElementById("preview"),
  menu: document.getElementById("menu"),
  menuTitle: document.getElementById("menu-title"),
  search: document.getElementById("menu-search"),
  photoClipboard: document.getElementById("photo-clipboard"),
  bisarnosSide: document.getElementById("bisarnos-side"),
  quickConfirm: document.getElementById("quick-confirm"),
  quickConfirmToggle: document.getElementById("quick-confirm-toggle"),
  quickConfirmBody: document.getElementById("quick-confirm-body"),
  licenseGuide: document.getElementById("license-guide"),
  inventoryStock: document.getElementById("inventory-stock"),
  inventoryCaseGrid: document.getElementById("inventory-case-grid"),
  inventoryCaseAssignmentTitle: document.getElementById(
    "inventory-case-assignment-title",
  ),
  inventoryCaseAssignmentList: document.getElementById(
    "inventory-case-assignment-list",
  ),
  photoPasteZone: document.getElementById("photo-paste-zone"),
  choosePhotosBtn: document.getElementById("choose-photos-btn"),
  photoInput: document.getElementById("photo-input"),
  photoList: document.getElementById("photo-list"),
  clearPhotosBtn: document.getElementById("clear-photos-btn"),
  heldSalesPanel: document.getElementById("held-sales-panel"),
  heldSalesCount: document.getElementById("held-sales-count"),
  heldSalesList: document.getElementById("held-sales-list"),
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

function getLinesTotal(lines) {
  return lines.reduce((sum, line) => {
    const unit = getItemUnitPrice(line.item, line.mode);
    if (unit == null) return sum;
    return sum + unit * line.qty;
  }, 0);
}

function getAutoSubtotal() {
  return getLinesTotal(getSelectedLines());
}

function getCouponDiscount(subtotal = getAutoSubtotal()) {
  if (
    activeStoreId !== "bisarnos" ||
    !isKnownCouponCode(els.couponCode.value)
  ) {
    return 0;
  }
  return Math.round(subtotal * 0.1 * 100) / 100;
}

function getAutoTotal() {
  const subtotal = getAutoSubtotal();
  return subtotal - getCouponDiscount(subtotal);
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
    const output = [
      `Employee: ${name}`,
      `Customer: ${customer}`,
      `Paid: ${formatMoney(override)}`,
    ];
    const couponCode = els.couponCode.value.trim();
    if (couponCode) {
      const discount = getCouponDiscount();
      const discountText = discount ? ` (-${formatMoney(discount)})` : "";
      output.push(`Coupon: ${couponCode}${discountText}`);
    }
    output.push(`Attachments: ${attachments}`);
    return output.join("\n");
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
  const discount = getCouponDiscount();
  const count = lines.reduce((n, line) => n + line.qty, 0);
  const store = activeStore();
  const override = parsePaid(els.paid.value);

  els.autoTotal.textContent = `${formatMoney(auto)}${
    discount ? ` (-${formatMoney(discount)})` : ""
  }`;
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
    state.couponCode = "";
    els.customer.value = "";
    els.customerLicense.value = "";
    els.couponCode.value = "";
  }
  state.orderIdentifier = "";
  els.orderIdentifier.value = "";
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
    state.couponCode = els.couponCode.value;
  }
  state.orderIdentifier = els.orderIdentifier.value;
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
  els.saleDetailsHint.classList.toggle("hidden", !isBisarnos);
  els.customerField.classList.toggle("hidden", !isBisarnos);
  els.licenseField.classList.toggle("hidden", !isBisarnos);
  els.couponField.classList.toggle("hidden", !isBisarnos);
  els.bisarnosSide.classList.remove("hidden");
  els.photoClipboard.classList.toggle("hidden", !isBisarnos);
  els.quickConfirm.classList.toggle("hidden", !isBisarnos);
  els.prefillGovFormBtn.classList.toggle("hidden", !isBisarnos);
  els.licenseGuide.classList.toggle("hidden", !isBisarnos);
  els.inventoryStock.classList.toggle("hidden", !isBisarnos);
  renderQuickCopy();
  renderPhotoClipboard();
  renderHeldSales();

  els.storeButtons.forEach((btn) => {
    const selected = btn.dataset.store === activeStoreId;
    btn.classList.toggle("active", selected);
    btn.setAttribute("aria-selected", selected ? "true" : "false");
  });
}

function renderQuickCopy() {
  const buttons = activeStore().quickCopy || [];
  els.quickCopy.innerHTML = "";
  const hasCopyButtons = buttons.some((entry) => entry.text);
  els.quickCopyHint.classList.toggle("hidden", !hasCopyButtons);
  buttons.forEach((entry) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quick-copy-btn";
    button.textContent = entry.label;
    button.addEventListener("click", () => {
      if (entry.url) openQuickLink(entry);
      else copyQuickText(entry);
    });
    els.quickCopy.appendChild(button);
  });

  const extrasWrap = document.createElement("div");
  extrasWrap.className = "extras-menu-wrap";
  const extrasButton = document.createElement("button");
  extrasButton.type = "button";
  extrasButton.className = "quick-copy-btn extras-toggle";
  extrasButton.textContent = "Extras";
  extrasButton.setAttribute("aria-expanded", "false");

  const extrasMenu = document.createElement("div");
  extrasMenu.className = "extras-dropdown hidden";
  [
    ["Map", openMapTool],
    ["Shipment Timer", openShipmentTimer],
    ["Trade Prices", openTradePrices],
    ["Under Table Sales", openUnderTableSales, "bisarnos"],
    ["Notes", openNotesTool],
    ["Photo Dump", openPhotoDumpTool],
    ["Rules", openRulesTool],
  ].forEach(([label, handler, requiresStore]) => {
    if (requiresStore === "bisarnos" && !(activeStoreId === "bisarnos" && bisarnosUnlocked)) {
      return;
    }
    const option = document.createElement("button");
    option.type = "button";
    option.className = "extras-option";
    option.textContent = label;
    option.addEventListener("click", () => {
      extrasMenu.classList.add("hidden");
      extrasButton.setAttribute("aria-expanded", "false");
      handler();
    });
    extrasMenu.appendChild(option);
  });

  extrasButton.addEventListener("click", (event) => {
    event.stopPropagation();
    const opening = extrasMenu.classList.contains("hidden");
    document
      .querySelectorAll(".extras-dropdown")
      .forEach((menu) => menu.classList.add("hidden"));
    extrasMenu.classList.toggle("hidden", !opening);
    extrasButton.setAttribute("aria-expanded", String(opening));
  });
  extrasWrap.append(extrasButton, extrasMenu);
  els.quickCopy.appendChild(extrasWrap);

  if (localStorage.getItem(SHIPMENT_TIMER_MINIMIZED_KEY) === "true") {
    const timerStack = document.createElement("div");
    timerStack.className = "minimized-timers";
    getShipmentTimers().forEach((timer) => {
      const minimizedTimer = document.createElement("button");
      minimizedTimer.type = "button";
      minimizedTimer.className = "minimized-timer";
      minimizedTimer.setAttribute("aria-label", `Restore ${timer.label} timer`);
      const label = document.createElement("span");
      label.className = "minimized-timer-label";
      label.textContent = timer.label;
      const time = document.createElement("span");
      time.className = "minimized-timer-time";
      time.dataset.shipmentTimerDisplay = timer.id;
      minimizedTimer.append(label, time);
      minimizedTimer.addEventListener("click", () => {
        stopShipmentBells();
        openShipmentTimer();
      });
      timerStack.appendChild(minimizedTimer);
    });
    if (timerStack.childElementCount > 0) {
      els.quickCopy.appendChild(timerStack);
      ensureShipmentTimerInterval();
      updateShipmentTimers();
    }
  }
}

const SHIPMENT_TIMER_KEY = "scumbags-shipment-timer-end";
const SHIPMENT_TIMERS_KEY = "scumbags-shipment-timers";
const SHIPMENT_TIMER_MINIMIZED_KEY = "scumbags-shipment-timer-minimized";
const MAX_SHIPMENT_TIMERS = 4;
let extraToolWindow = null;
let extraToolTitle = null;
let extraToolBody = null;
let extraToolMinimize = null;
let shipmentTimerInterval = null;
let shipmentTimers = null;
const finishedShipmentTimerIds = new Set();
const ringingShipmentTimerIds = new Set();
let bellRepeatInterval = null;
let bellStopTimeout = null;
let shipmentAudioContext = null;

function getExtraToolWindow() {
  if (extraToolWindow) return extraToolWindow;
  extraToolWindow = document.createElement("section");
  extraToolWindow.className = "extra-tool-window hidden";
  extraToolWindow.setAttribute("role", "dialog");

  const header = document.createElement("header");
  header.className = "extra-tool-header";
  extraToolTitle = document.createElement("strong");
  const headerActions = document.createElement("div");
  headerActions.className = "extra-tool-header-actions";
  extraToolMinimize = document.createElement("button");
  extraToolMinimize.type = "button";
  extraToolMinimize.className = "extra-tool-minimize hidden";
  extraToolMinimize.setAttribute("aria-label", "Minimize shipment timer");
  extraToolMinimize.textContent = "—";
  extraToolMinimize.addEventListener("click", () => {
    localStorage.setItem(SHIPMENT_TIMER_MINIMIZED_KEY, "true");
    extraToolWindow.classList.add("hidden");
    renderQuickCopy();
  });
  const close = document.createElement("button");
  close.type = "button";
  close.className = "extra-tool-close";
  close.setAttribute("aria-label", "Close extra tool");
  close.textContent = "✕";
  close.addEventListener("click", () => extraToolWindow.classList.add("hidden"));
  headerActions.append(extraToolMinimize, close);
  header.append(extraToolTitle, headerActions);

  extraToolBody = document.createElement("div");
  extraToolBody.className = "extra-tool-body";
  extraToolWindow.append(header, extraToolBody);
  document.body.appendChild(extraToolWindow);

  let dragging = false;
  let offsetX = 0;
  let offsetY = 0;
  header.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    if (event.target.closest("button")) return;
    dragging = true;
    const rect = extraToolWindow.getBoundingClientRect();
    offsetX = event.clientX - rect.left;
    offsetY = event.clientY - rect.top;
    extraToolWindow.style.transform = "none";
    extraToolWindow.style.left = `${rect.left}px`;
    extraToolWindow.style.top = `${rect.top}px`;
    header.setPointerCapture(event.pointerId);
    event.preventDefault();
  });
  header.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    const left = Math.max(
      8,
      Math.min(
        event.clientX - offsetX,
        window.innerWidth - extraToolWindow.offsetWidth - 8,
      ),
    );
    const top = Math.max(
      8,
      Math.min(
        event.clientY - offsetY,
        window.innerHeight - extraToolWindow.offsetHeight - 8,
      ),
    );
    extraToolWindow.style.left = `${left}px`;
    extraToolWindow.style.top = `${top}px`;
  });
  const stopDrag = (event) => {
    dragging = false;
    try {
      header.releasePointerCapture(event.pointerId);
    } catch {}
  };
  header.addEventListener("pointerup", stopDrag);
  header.addEventListener("pointercancel", stopDrag);

  return extraToolWindow;
}

function openExtraTool(title) {
  const windowEl = getExtraToolWindow();
  extraToolTitle.textContent = title;
  extraToolBody.innerHTML = "";
  extraToolBody.onpaste = null;
  extraToolBody.classList.toggle("trade-prices", title === "Trade Prices");
  extraToolBody.classList.toggle(
    "under-table-body",
    title === "Under Table Sales",
  );
  extraToolBody.classList.toggle("notes-board-body", title === "Notes");
  extraToolBody.classList.toggle("photo-dump-body", title === "Photo Dump");
  extraToolBody.classList.toggle("rules-tool-body", title === "Rules");
  windowEl.classList.toggle("map-viewer", title === "Map");
  windowEl.classList.toggle("trade-prices-window", title === "Trade Prices");
  windowEl.classList.toggle(
    "under-table-window",
    title === "Under Table Sales",
  );
  windowEl.classList.toggle("notes-board-window", title === "Notes");
  windowEl.classList.toggle("photo-dump-window", title === "Photo Dump");
  windowEl.classList.toggle("rules-tool-window", title === "Rules");
  extraToolMinimize.classList.toggle("hidden", title !== "Shipment Timer");
  windowEl.style.transform = "";
  windowEl.style.left = "";
  windowEl.style.top = "";
  windowEl.classList.remove("hidden");
  return extraToolBody;
}

function openMapTool() {
  const body = openExtraTool("Map");
  const maps = [
    { src: "assets/map-city.png", label: "City locations map" },
    { src: "assets/map-tunnels.png", label: "Tunnel entrances map" },
    { src: "assets/map-stashes.png", label: "Stash locations map" },
  ];
  let activeIndex = 0;

  const viewer = document.createElement("div");
  viewer.className = "map-carousel";
  const image = document.createElement("img");
  image.className = "map-carousel-image";

  const controls = document.createElement("div");
  controls.className = "map-carousel-controls";
  const previous = document.createElement("button");
  previous.type = "button";
  previous.className = "map-carousel-arrow";
  previous.setAttribute("aria-label", "Previous map");
  previous.textContent = "←";
  const caption = document.createElement("span");
  const next = document.createElement("button");
  next.type = "button";
  next.className = "map-carousel-arrow";
  next.setAttribute("aria-label", "Next map");
  next.textContent = "→";

  const showMap = (index) => {
    activeIndex = (index + maps.length) % maps.length;
    image.src = maps[activeIndex].src;
    image.alt = maps[activeIndex].label;
    caption.textContent = `${maps[activeIndex].label} · ${activeIndex + 1}/${maps.length}`;
  };
  previous.addEventListener("click", () => showMap(activeIndex - 1));
  next.addEventListener("click", () => showMap(activeIndex + 1));

  controls.append(previous, caption, next);
  viewer.append(image, controls);
  body.appendChild(viewer);
  showMap(0);
}

function openTradePrices() {
  const body = openExtraTool("Trade Prices");
  const sections = [
    {
      title: "Buy Price (Before Laundry)",
      rows: [
        ["M", "$4,000"],
        ["C", "$6,500"],
        ["Q", "$4,000"],
        ["H", "$4,000"],
        ["L", "$4,250"],
        ["W", "$5,000"],
      ],
    },
    {
      title: "Sell/Trade Price",
      rows: [
        ["1C", "$6,500"],
        ["4C", "5W"],
        ["2C", "3L"],
        ["2C", "3H"],
        ["2C", "3Q"],
        ["2C", "3M + $400"],
      ],
    },
    {
      title: "NPC Sell Price (After Laundry)",
      rows: [
        ["M", "$5,600"],
        ["Q", "$6,000"],
        ["H", "$6,000"],
        ["C", "$8,600"],
        ["W", "$6,800"],
        ["L", "$6,000"],
      ],
    },
  ];

  sections.forEach((sectionData) => {
    const section = document.createElement("section");
    section.className = "trade-price-section";
    const title = document.createElement("h3");
    title.textContent = sectionData.title;
    section.appendChild(title);
    sectionData.rows.forEach(([item, price]) => {
      const row = document.createElement("div");
      row.className = "trade-price-row";
      const itemEl = document.createElement("strong");
      itemEl.textContent = item;
      const priceEl = document.createElement("span");
      priceEl.textContent = price;
      row.append(itemEl, priceEl);
      section.appendChild(row);
    });
    body.appendChild(section);
  });
}

function openUnderTableSales() {
  const body = openExtraTool("Under Table Sales");
  const prices = [
    ["64 round drum", "$27,500"],
    ["100 round beta-c mag (UZI)", "$35,000"],
    ["80 round parabellum", "$30,000"],
    ["50 round casket", "$20,000"],
    ["100 round beta-c M16A2", "$35,000"],
    ["M249 Bipod", "$2,500"],
    ["10 round .40 Smith & Wesson", "$5,000"],
    ["30 round standard mag (ARs)", "$10,000"],
    ["30 round 7.62x39", "$10,000"],
    ["75 round NATO drum", "$25,000"],
    ["10 round 9x53mmR", "$5,000"],
  ];

  const markup = document.createElement("section");
  markup.className = "under-table-section under-table-markup";
  const markupTitle = document.createElement("h3");
  markupTitle.textContent = "Default markup";
  const markupText = document.createElement("p");
  markupText.textContent =
    "Any attachments sold under the table get a default markup of $2,000 per shipment and $1,250 per single.";
  const noRequirements = document.createElement("strong");
  noRequirements.textContent = "No license, no stamp.";
  markup.append(markupTitle, markupText, noRequirements);

  const pitch = document.createElement("section");
  pitch.className = "under-table-section";
  const pitchTitle = document.createElement("h3");
  pitchTitle.textContent = "Attachment pitch";
  const pitchText = document.createElement("p");
  pitchText.textContent =
    "Looking for off the catalogue attachments? Or attachments with no stamp or license? Not a problem, look no farther I can help you out with just about anything you need, just let me know what I can do for you.";
  pitch.append(pitchTitle, pitchText);

  const sheet = document.createElement("section");
  sheet.className = "under-table-section";
  const sheetHeader = document.createElement("div");
  sheetHeader.className = "under-table-sheet-header";
  const sheetTitle = document.createElement("h3");
  sheetTitle.textContent = "Illegal attachment sales sheet";
  const shipmentOnly = document.createElement("strong");
  shipmentOnly.textContent = "SHIPMENTS ONLY!!";
  sheetHeader.append(sheetTitle, shipmentOnly);
  sheet.appendChild(sheetHeader);

  const list = document.createElement("div");
  list.className = "under-table-price-list";
  prices.forEach(([item, price]) => {
    const row = document.createElement("div");
    row.className = "under-table-price-row";
    const itemEl = document.createElement("span");
    itemEl.textContent = item;
    const priceEl = document.createElement("strong");
    priceEl.textContent = price;
    row.append(itemEl, priceEl);
    list.appendChild(row);
  });
  sheet.appendChild(list);
  body.append(markup, pitch, sheet);
}

const NOTES_STORAGE_KEY = "scumbags-helper-notes";
const NOTE_COLORS = ["#f8e58b", "#f3b8c8", "#a9d9ef", "#bfe3ae", "#f6c68b"];
let helperNotes = null;

function normalizeNoteColor(value) {
  return NOTE_COLORS.includes(value) ? value : NOTE_COLORS[0];
}

function getHelperNotes() {
  if (helperNotes) return helperNotes;
  try {
    const saved = JSON.parse(localStorage.getItem(NOTES_STORAGE_KEY) || "[]");
    helperNotes = Array.isArray(saved)
      ? saved
          .filter((note) => note && note.id)
          .map((note) => ({
            id: String(note.id),
            label: String(note.label || ""),
            color: normalizeNoteColor(note.color),
            text: String(note.text || ""),
            createdAt: Number(note.createdAt) || Date.now(),
          }))
      : [];
  } catch {
    helperNotes = [];
  }
  return helperNotes;
}

function saveHelperNotes() {
  localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(getHelperNotes()));
}

function addHelperNote() {
  const note = {
    id: `note-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    label: "",
    color: NOTE_COLORS[getHelperNotes().length % NOTE_COLORS.length],
    text: "",
    createdAt: Date.now(),
  };
  getHelperNotes().push(note);
  saveHelperNotes();
  renderNotesBoard(note.id);
}

function removeHelperNote(noteId) {
  helperNotes = getHelperNotes().filter((note) => note.id !== noteId);
  saveHelperNotes();
  renderNotesBoard();
}

function renderNotesBoard(focusNoteId = "") {
  if (!extraToolBody || extraToolTitle?.textContent !== "Notes") return;
  extraToolBody.innerHTML = "";

  const toolbar = document.createElement("div");
  toolbar.className = "notes-board-toolbar";
  const count = document.createElement("span");
  const notes = getHelperNotes();
  count.textContent = `${notes.length} note${notes.length === 1 ? "" : "s"}`;
  const add = document.createElement("button");
  add.type = "button";
  add.className = "notes-add";
  add.setAttribute("aria-label", "Add note");
  add.textContent = "+";
  add.addEventListener("click", addHelperNote);
  toolbar.append(count, add);

  const grid = document.createElement("div");
  grid.className = "notes-grid";
  notes
    .slice()
    .sort((a, b) => a.createdAt - b.createdAt)
    .forEach((note, index) => {
      const card = document.createElement("article");
      card.className = "post-it-note";
      card.style.background = note.color;
      card.style.transform = index % 2 === 0 ? "rotate(-0.5deg)" : "rotate(0.6deg)";

      const header = document.createElement("div");
      header.className = "post-it-header";
      const label = document.createElement("input");
      label.type = "text";
      label.maxLength = 40;
      label.placeholder = "Label";
      label.value = note.label;
      label.setAttribute("aria-label", "Note label");
      const swatches = document.createElement("div");
      swatches.className = "post-it-swatches";
      NOTE_COLORS.forEach((color) => {
        const swatch = document.createElement("button");
        swatch.type = "button";
        swatch.className = "post-it-swatch";
        swatch.style.background = color;
        swatch.title = "Set note colour";
        swatch.setAttribute("aria-label", "Set note colour");
        if (color === note.color) swatch.classList.add("active");
        swatch.addEventListener("click", () => {
          note.color = color;
          card.style.background = color;
          swatches
            .querySelectorAll(".post-it-swatch")
            .forEach((el) => el.classList.toggle("active", el === swatch));
          saveHelperNotes();
        });
        swatches.appendChild(swatch);
      });
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "post-it-remove";
      remove.setAttribute("aria-label", "Remove note");
      remove.textContent = "✕";
      remove.addEventListener("click", () => removeHelperNote(note.id));
      header.append(label, remove);

      const text = document.createElement("textarea");
      text.maxLength = 1000;
      text.placeholder = "Write a note…";
      text.value = note.text;
      text.setAttribute("aria-label", "Note text");

      label.addEventListener("input", () => {
        note.label = label.value;
        saveHelperNotes();
      });
      text.addEventListener("input", () => {
        note.text = text.value;
        saveHelperNotes();
      });

      card.append(header, swatches, text);
      grid.appendChild(card);
      if (note.id === focusNoteId) {
        requestAnimationFrame(() => label.focus());
      }
    });

  if (notes.length === 0) {
    const empty = document.createElement("p");
    empty.className = "notes-empty";
    empty.textContent = "Click + to add your first note.";
    grid.appendChild(empty);
  }

  extraToolBody.append(toolbar, grid);
}

function openNotesTool() {
  openExtraTool("Notes");
  renderNotesBoard();
}

const PHOTO_DUMP_STORE_NAME = "photo-dump";
let photoDumpRecords = null;
let photoDumpObjectUrls = [];

async function runPhotoDumpTransaction(mode, operation) {
  const db = await openPhotoDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(PHOTO_DUMP_STORE_NAME, mode);
    const store = transaction.objectStore(PHOTO_DUMP_STORE_NAME);
    const request = operation(store);
    let result;
    request.onsuccess = () => {
      result = request.result;
    };
    request.onerror = () => reject(request.error);
    transaction.oncomplete = () => {
      db.close();
      resolve(result);
    };
    transaction.onerror = () => {
      db.close();
      reject(transaction.error);
    };
    transaction.onabort = () => {
      db.close();
      reject(transaction.error);
    };
  });
}

async function loadPhotoDump() {
  if (photoDumpRecords) return;
  photoDumpRecords = await runPhotoDumpTransaction("readonly", (store) =>
    store.getAll(),
  );
}

async function addPhotoDumpImages(files) {
  const images = Array.from(files || []).filter((file) =>
    file.type.startsWith("image/"),
  );
  if (images.length === 0) return;

  try {
    await loadPhotoDump();
    for (const image of images) {
      const record = {
        id: makePhotoId(),
        label: "",
        blob: image,
        createdAt: Date.now(),
      };
      await runPhotoDumpTransaction("readwrite", (store) => store.put(record));
      photoDumpRecords.push(record);
    }
    renderPhotoDump();
  } catch {
    setStatus("Could not save the Photo Dump image.", true);
  }
}

async function updatePhotoDumpLabel(record, label) {
  record.label = label;
  try {
    await runPhotoDumpTransaction("readwrite", (store) => store.put(record));
  } catch {
    setStatus("Could not save the photo label.", true);
  }
}

async function removePhotoDumpImage(id) {
  try {
    await runPhotoDumpTransaction("readwrite", (store) => store.delete(id));
    photoDumpRecords = (photoDumpRecords || []).filter(
      (record) => record.id !== id,
    );
    renderPhotoDump();
  } catch {
    setStatus("Could not remove the Photo Dump image.", true);
  }
}

function renderPhotoDump() {
  if (!extraToolBody || extraToolTitle?.textContent !== "Photo Dump") return;
  photoDumpObjectUrls.forEach((url) => URL.revokeObjectURL(url));
  photoDumpObjectUrls = [];
  extraToolBody.innerHTML = "";

  const toolbar = document.createElement("div");
  toolbar.className = "photo-dump-toolbar";
  const records = (photoDumpRecords || [])
    .slice()
    .sort((a, b) => a.createdAt - b.createdAt);
  const count = document.createElement("span");
  count.textContent = `${records.length} photo${records.length === 1 ? "" : "s"} · Paste anywhere in this window`;

  const upload = document.createElement("label");
  upload.className = "photo-dump-upload";
  upload.textContent = "Upload";
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.multiple = true;
  fileInput.addEventListener("change", () =>
    addPhotoDumpImages(fileInput.files),
  );
  upload.appendChild(fileInput);
  toolbar.append(count, upload);

  const grid = document.createElement("div");
  grid.className = "photo-dump-grid";
  records.forEach((record) => {
    const card = document.createElement("article");
    card.className = "photo-dump-card";

    const header = document.createElement("div");
    header.className = "photo-dump-card-header";
    const label = document.createElement("input");
    label.type = "text";
    label.maxLength = 50;
    label.placeholder = "Label";
    label.value = record.label || "";
    label.setAttribute("aria-label", "Photo label");
    label.addEventListener("input", () =>
      updatePhotoDumpLabel(record, label.value),
    );

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "photo-dump-remove";
    remove.setAttribute("aria-label", "Remove photo");
    remove.textContent = "✕";
    remove.addEventListener("click", () => removePhotoDumpImage(record.id));
    header.append(label, remove);

    const url = URL.createObjectURL(record.blob);
    photoDumpObjectUrls.push(url);
    const image = document.createElement("img");
    image.src = url;
    image.alt = record.label || "Photo Dump image";
    image.draggable = false;
    image.title = "Click to enlarge";
    image.addEventListener("click", () => openPhotoLightbox(url));
    card.append(header, image);
    grid.appendChild(card);
  });

  if (records.length === 0) {
    const empty = document.createElement("p");
    empty.className = "photo-dump-empty";
    empty.textContent = "Paste a photo here or click Upload.";
    grid.appendChild(empty);
  }

  extraToolBody.append(toolbar, grid);
}

async function openPhotoDumpTool() {
  const body = openExtraTool("Photo Dump");
  body.onpaste = (event) => {
    const images = Array.from(event.clipboardData?.files || []).filter((file) =>
      file.type.startsWith("image/"),
    );
    if (images.length === 0) return;
    event.preventDefault();
    addPhotoDumpImages(images);
  };
  try {
    await loadPhotoDump();
    renderPhotoDump();
  } catch {
    body.innerHTML =
      '<p class="photo-dump-empty">Photo Dump storage is unavailable in this browser.</p>';
  }
}

function openRulesTool() {
  const body = openExtraTool("Rules");
  const documents = Array.isArray(window.DIVERGE_RULES)
    ? window.DIVERGE_RULES
    : [];
  let activeTopic = "";

  const form = document.createElement("form");
  form.className = "rules-search-form";
  const input = document.createElement("input");
  input.type = "search";
  input.placeholder = "Search rules, e.g. FearRP or mugging";
  input.setAttribute("aria-label", "Search rules");
  const search = document.createElement("button");
  search.type = "submit";
  search.textContent = "Search";
  form.append(input, search);

  const note = document.createElement("p");
  note.className = "rules-search-note";
  note.textContent = "Searches the rule text only. Results appear below.";

  const filters = document.createElement("div");
  filters.className = "rules-topic-links";
  const topicButtons = [];
  const allButton = document.createElement("button");
  allButton.type = "button";
  allButton.textContent = "All rules";
  allButton.classList.add("active");
  filters.appendChild(allButton);
  topicButtons.push({ button: allButton, title: "" });

  documents.forEach((ruleDoc) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = ruleDoc.title
      .replace("1990's Mafia Roleplay: ", "")
      .replace("Diverge Networks: ", "");
    filters.appendChild(button);
    topicButtons.push({ button, title: ruleDoc.title });
  });

  const summary = document.createElement("p");
  summary.className = "rules-results-summary";
  const results = document.createElement("div");
  results.className = "rules-results";

  const appendHighlightedText = (element, text, tokens) => {
    const pattern = new RegExp(
      `(${tokens
        .map((token) => token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
        .join("|")})`,
      "gi",
    );
    String(text)
      .split(pattern)
      .filter(Boolean)
      .forEach((part) => {
        if (tokens.some((token) => part.toLowerCase() === token)) {
          const mark = document.createElement("mark");
          mark.textContent = part;
          element.appendChild(mark);
        } else {
          element.appendChild(document.createTextNode(part));
        }
      });
  };

  const renderResults = () => {
    results.innerHTML = "";
    const query = input.value.trim().toLowerCase();
    const tokens = [...new Set(query.split(/\s+/).filter(Boolean))];

    if (documents.length === 0) {
      summary.textContent = "";
      results.innerHTML =
        '<p class="rules-empty">The local rules data could not be loaded.</p>';
      return;
    }
    if (tokens.length === 0) {
      summary.textContent = "";
      results.innerHTML =
        '<p class="rules-empty">Type a keyword or phrase to look up a rule.</p>';
      return;
    }

    const matches = [];
    documents
      .filter((ruleDoc) => !activeTopic || ruleDoc.title === activeTopic)
      .forEach((ruleDoc) => {
        ruleDoc.sections.forEach((section) => {
          section.paragraphs.forEach((paragraph) => {
            const haystack =
              `${ruleDoc.title} ${section.heading} ${paragraph}`.toLowerCase();
            if (tokens.every((token) => haystack.includes(token))) {
              matches.push({ ruleDoc, section, paragraph });
            }
          });
        });
      });

    const shown = matches.slice(0, 60);
    summary.textContent =
      matches.length === 0
        ? "No matching rules found."
        : `${matches.length} matching rule passage${matches.length === 1 ? "" : "s"}${matches.length > shown.length ? ` · showing first ${shown.length}` : ""}`;

    shown.forEach(({ ruleDoc, section, paragraph }) => {
      const card = document.createElement("article");
      card.className = "rules-result";
      const heading = document.createElement("div");
      heading.className = "rules-result-heading";
      const topic = document.createElement("strong");
      topic.textContent = ruleDoc.title;
      const sectionName = document.createElement("span");
      sectionName.textContent = section.heading;
      heading.append(topic, sectionName);

      const text = document.createElement("p");
      appendHighlightedText(text, paragraph, tokens);

      const source = document.createElement("a");
      source.href = ruleDoc.sourceUrl;
      source.rel = "noopener noreferrer";
      source.textContent = "Official source";
      source.addEventListener("click", (event) => {
        event.preventDefault();
        window.open(
          ruleDoc.sourceUrl,
          "diverge-rules",
          "popup=yes,width=1040,height=780,resizable=yes,scrollbars=yes",
        );
      });
      card.append(heading, text, source);
      results.appendChild(card);
    });
  };

  topicButtons.forEach(({ button, title }) => {
    button.addEventListener("click", () => {
      activeTopic = title;
      topicButtons.forEach((entry) =>
        entry.button.classList.toggle("active", entry.title === activeTopic),
      );
      renderResults();
      input.focus();
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderResults();
  });
  input.addEventListener("input", renderResults);

  body.append(form, note, filters, summary, results);
  renderResults();
  requestAnimationFrame(() => input.focus());
}

function formatTimerRemaining(milliseconds) {
  const totalSeconds = Math.max(0, Math.ceil(milliseconds / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function getShipmentTimers() {
  if (shipmentTimers) return shipmentTimers;
  try {
    const saved = JSON.parse(localStorage.getItem(SHIPMENT_TIMERS_KEY) || "[]");
    shipmentTimers = Array.isArray(saved)
      ? saved
          .filter((timer) => timer && timer.id && Number(timer.end))
          .slice(0, MAX_SHIPMENT_TIMERS)
          .map((timer, index) => ({
            id: String(timer.id),
            label: String(timer.label || `Shipment ${index + 1}`).slice(0, 30),
            end: Number(timer.end),
          }))
      : [];
  } catch {
    shipmentTimers = [];
  }

  // Old single-timer format.
  const legacyEnd = Number(localStorage.getItem(SHIPMENT_TIMER_KEY)) || 0;
  if (shipmentTimers.length === 0 && legacyEnd > Date.now()) {
    shipmentTimers.push({
      id: `shipment-${Date.now()}`,
      label: "Shipment 1",
      end: legacyEnd,
    });
  }
  localStorage.removeItem(SHIPMENT_TIMER_KEY);
  saveShipmentTimers();
  return shipmentTimers;
}

function saveShipmentTimers() {
  if (!shipmentTimers) return;
  localStorage.setItem(SHIPMENT_TIMERS_KEY, JSON.stringify(shipmentTimers));
}

function updateShipmentTimers() {
  const now = Date.now();
  getShipmentTimers().forEach((timer) => {
    const remaining = timer.end - now;
    document
      .querySelectorAll("[data-shipment-timer-display]")
      .forEach((display) => {
        if (display.dataset.shipmentTimerDisplay !== timer.id) return;
        display.textContent =
          remaining > 0 ? formatTimerRemaining(remaining) : "00:00";
        display.classList.toggle("finished", remaining <= 0);
        display.closest(".minimized-timer, .shipment-timer-row")?.classList.toggle(
          "finished",
          remaining <= 0,
        );
      });

    if (remaining <= 0 && !finishedShipmentTimerIds.has(timer.id)) {
      finishedShipmentTimerIds.add(timer.id);
      startShipmentBell(timer.id);
      setStatus(`${timer.label} timer finished.`);
    }
  });
}

function prepareShipmentBell() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;
  if (!shipmentAudioContext) shipmentAudioContext = new AudioContextClass();
  if (shipmentAudioContext.state === "suspended") {
    shipmentAudioContext.resume().catch(() => {});
  }
}

function playShipmentBell() {
  if (!shipmentAudioContext || shipmentAudioContext.state !== "running") return;
  const start = shipmentAudioContext.currentTime;
  [880, 1174.66, 1567.98].forEach((frequency, index) => {
    const oscillator = shipmentAudioContext.createOscillator();
    const gain = shipmentAudioContext.createGain();
    oscillator.type = index === 0 ? "sine" : "triangle";
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0.0001, start + index * 0.11);
    gain.gain.exponentialRampToValueAtTime(0.16, start + index * 0.11 + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + index * 0.11 + 0.55);
    oscillator.connect(gain);
    gain.connect(shipmentAudioContext.destination);
    oscillator.start(start + index * 0.11);
    oscillator.stop(start + index * 0.11 + 0.58);
  });
}

function startShipmentBell(timerId) {
  ringingShipmentTimerIds.add(timerId);
  playShipmentBell();
  if (!bellRepeatInterval) {
    bellRepeatInterval = window.setInterval(playShipmentBell, 1200);
  }
  if (bellStopTimeout) window.clearTimeout(bellStopTimeout);
  bellStopTimeout = window.setTimeout(stopShipmentBells, 10000);
  renderShipmentBellControl();
}

function stopShipmentBells() {
  ringingShipmentTimerIds.clear();
  if (bellRepeatInterval) window.clearInterval(bellRepeatInterval);
  if (bellStopTimeout) window.clearTimeout(bellStopTimeout);
  bellRepeatInterval = null;
  bellStopTimeout = null;
  renderShipmentBellControl();
}

function renderShipmentBellControl() {
  document.querySelectorAll("[data-stop-shipment-bells]").forEach((button) => {
    button.classList.toggle("hidden", ringingShipmentTimerIds.size === 0);
  });
}

function ensureShipmentTimerInterval() {
  if (!shipmentTimerInterval) {
    shipmentTimerInterval = window.setInterval(updateShipmentTimers, 1000);
  }
}

function startShipmentTimer(label, minutes) {
  const requested = Number(minutes);
  if (!Number.isFinite(requested) || requested <= 0) {
    setStatus("Enter a shipment timer between 1 and 180 minutes.", true);
    return;
  }
  const timers = getShipmentTimers();
  if (timers.length >= MAX_SHIPMENT_TIMERS) {
    setStatus("A maximum of 4 shipment timers can run at once.", true);
    return;
  }
  const duration = Math.max(1, Math.min(180, requested));
  prepareShipmentBell();
  const timer = {
    id: `shipment-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    label:
      String(label || "").trim().slice(0, 30) ||
      `Shipment ${timers.length + 1}`,
    end: Date.now() + duration * 60 * 1000,
  };
  timers.push(timer);
  finishedShipmentTimerIds.delete(timer.id);
  saveShipmentTimers();
  renderShipmentTimerManager();
  renderQuickCopy();
  updateShipmentTimers();
  setStatus(`${timer.label} timer started for ${duration} minutes.`);
}

function removeShipmentTimer(timerId) {
  shipmentTimers = getShipmentTimers().filter((timer) => timer.id !== timerId);
  finishedShipmentTimerIds.delete(timerId);
  ringingShipmentTimerIds.delete(timerId);
  if (ringingShipmentTimerIds.size === 0) stopShipmentBells();
  saveShipmentTimers();
  renderShipmentTimerManager();
  renderQuickCopy();
  updateShipmentTimers();
}

function openShipmentTimer() {
  localStorage.removeItem(SHIPMENT_TIMER_MINIMIZED_KEY);
  renderQuickCopy();
  openExtraTool("Shipment Timer");
  renderShipmentTimerManager();
  ensureShipmentTimerInterval();
  updateShipmentTimers();
}

function renderShipmentTimerManager() {
  if (!extraToolBody || extraToolTitle?.textContent !== "Shipment Timer") return;
  const body = extraToolBody;
  body.innerHTML = "";

  const timerList = document.createElement("div");
  timerList.className = "shipment-timer-list";
  const timers = getShipmentTimers();
  timers.forEach((timer) => {
    const row = document.createElement("article");
    row.className = "shipment-timer-row";
    const label = document.createElement("strong");
    label.textContent = timer.label;
    const display = document.createElement("span");
    display.className = "shipment-timer-row-time";
    display.dataset.shipmentTimerDisplay = timer.id;
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "shipment-timer-remove";
    remove.textContent = "Remove";
    remove.addEventListener("click", () => removeShipmentTimer(timer.id));
    row.append(label, display, remove);
    timerList.appendChild(row);
  });
  if (timers.length === 0) {
    const empty = document.createElement("p");
    empty.className = "shipment-timer-empty";
    empty.textContent = "No shipment timers running.";
    timerList.appendChild(empty);
  }

  const count = document.createElement("p");
  count.className = "shipment-timer-count";
  count.textContent = `${timers.length}/${MAX_SHIPMENT_TIMERS} timers`;

  const form = document.createElement("div");
  form.className = "shipment-timer-form";
  const labelInput = document.createElement("input");
  labelInput.type = "text";
  labelInput.maxLength = 30;
  labelInput.placeholder = `Label (e.g. Gun shipment)`;
  const durationInput = document.createElement("input");
  durationInput.type = "number";
  durationInput.min = "1";
  durationInput.max = "180";
  durationInput.placeholder = "Minutes";
  const presets = document.createElement("div");
  presets.className = "shipment-timer-presets";
  [5, 10, 15, 20, 30].forEach((minutes) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = `${minutes} min`;
    button.addEventListener("click", () => {
      durationInput.value = String(minutes);
    });
    presets.appendChild(button);
  });

  const start = document.createElement("button");
  start.type = "button";
  start.className = "shipment-timer-start";
  start.textContent = "Start";
  start.disabled = timers.length >= MAX_SHIPMENT_TIMERS;
  start.addEventListener("click", () =>
    startShipmentTimer(labelInput.value, durationInput.value),
  );
  durationInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      startShipmentTimer(labelInput.value, durationInput.value);
    }
  });

  const fields = document.createElement("div");
  fields.className = "shipment-timer-fields";
  fields.append(labelInput, durationInput, start);
  form.append(fields, presets);

  const stopBell = document.createElement("button");
  stopBell.type = "button";
  stopBell.className = "shipment-bell-stop hidden";
  stopBell.dataset.stopShipmentBells = "";
  stopBell.textContent = "Stop bell";
  stopBell.addEventListener("click", stopShipmentBells);

  body.append(timerList, count, form, stopBell);
  renderShipmentBellControl();
  updateShipmentTimers();
}

document.addEventListener("click", (event) => {
  if (event.target.closest(".extras-menu-wrap")) return;
  document.querySelectorAll(".extras-dropdown").forEach((menu) => {
    menu.classList.add("hidden");
  });
  document.querySelectorAll(".extras-toggle").forEach((button) => {
    button.setAttribute("aria-expanded", "false");
  });
});

function openQuickLink(entry) {
  if (entry.prefillGovForm) {
    openCurrentGovForm();
    return;
  }
  openGovFormWindow(entry.url, entry.label);
}

function openCurrentGovForm() {
  const url = buildGovFormUrl(GOV_FORM_URL, {
    employee: els.employee.value.trim(),
    customer: els.customer.value.trim(),
    license: els.customerLicense.value.trim(),
    paid: els.paid.value.trim(),
    lines: getSelectedLines(),
  });
  openGovFormWindow(url, "Gov Form");
}

function openGovFormWindow(url, label = "Gov Form") {
  const features =
    "popup=yes,width=980,height=900,left=80,top=40,scrollbars=yes,resizable=yes";
  const opened = window.open(url, "bisarnosGovForm", features);
  if (!opened) {
    setStatus(`Could not open ${label}. Allow pop-ups for this site.`, true);
    return;
  }
  opened.focus();
  setStatus(`${label} opened.`);
}

// Google Form field IDs.
const GOV_FORM_ENTRIES = {
  employee: "366340186",
  customer: "531398986",
  license: "510734277",
  paid: "2058522433",
  items: "133198077",
  notes: "1684576907",
};

const GOV_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf78LOyjb4BBFe9Lk-HEn2qaVu79-B0AlUUjGVrlt8YVsBC-w/viewform";

// Form labels that differ from the catalog.
const GOV_FORM_ITEM_LABELS = {
  "mini14-mag-kit": "Mini 14 Magazine Kit",
  "type100-40-mag": "40 Round Extended Magazine (type 100/44)",
  "akm74-45-mag": "45 Round 5.45x39mm AKM-74 Magazine Kit",
  "uzi-mag-kit": "Uzi Mag Conversion Kit",
  "pm-25-mag": "25 Round Extended Magazine (P226)",
  "cz75-18-mag": "18 Round Extended Magazine (CZ75)",
  "vp70-30-mag": "30 Round Magazine (VP70)",
  susat: "SUSAT 2-4x Scope",
  farview: "Farview 2-12x Scope",
  "walther-scope": "Walther 1.5x Scope",
  "fal-18-para-barrel": "18 in. Para Barrel (FN FAL)",
  "p226-slide-kit": "Sig Sauer P226 Slide Kit",
  "deagle-slide-kit": "Desert Eagle Slide Kit",
  "benelli-7-tube": "7 Round Tube (Benelli M3)",
  "benelli-12-tube": "12 Round Tube (Benelli M3)",
  "mini14-barrel-kit": "Mini 14 Barrel Kit",
  "m16a2-barrel-kit": "Colt M16A2 Barrel Kit",
  "p38-carbine-barrel": "Carbine Barrrel",
  "pbs1-suppressor": "PBS - 1 Supressor",
  "light-suppressor": "Light Supressor",
  "m16a2-receiver-kit": "Colt M16A2 Receiver Kit",
};

function buildGovFormUrl(baseUrl, source = {}) {
  const params = new URLSearchParams();
  params.set("usp", "pp_url");

  const employee = (source.employee || "").trim();
  const customer = (source.customer || "").trim();
  const license = (source.license || "").trim();
  const paid = String(source.paid || "")
    .trim()
    .replace(/,/g, "");
  if (employee) params.set(`entry.${GOV_FORM_ENTRIES.employee}`, employee);
  if (customer) params.set(`entry.${GOV_FORM_ENTRIES.customer}`, customer);
  if (license) params.set(`entry.${GOV_FORM_ENTRIES.license}`, license);
  if (paid) params.set(`entry.${GOV_FORM_ENTRIES.paid}`, paid);

  const lines = source.lines || [];
  const checked = new Set();
  const noteParts = [];
  const unmapped = [];

  lines.forEach((line) => {
    const formLabel = GOV_FORM_ITEM_LABELS[line.item.id];
    if (formLabel) checked.add(formLabel);
    else unmapped.push(line.item.name);

    const extras = [];
    if (line.qty > 1) extras.push(`x${line.qty}`);
    if (line.mode) extras.push(MODE_LABELS[line.mode]);
    if (extras.length) {
      noteParts.push(`${formLabel || line.item.name} (${extras.join(", ")})`);
    }
  });

  checked.forEach((label) => {
    params.append(`entry.${GOV_FORM_ENTRIES.items}`, label);
  });

  if (unmapped.length) {
    noteParts.push(`Not on form checklist: ${unmapped.join(", ")}`);
  }

  if (noteParts.length) {
    params.set(`entry.${GOV_FORM_ENTRIES.notes}`, noteParts.join("; "));
  }

  return `${baseUrl}?${params.toString()}`;
}

function openHeldGovForm(sale) {
  if (heldSaleStoreId(sale) !== "bisarnos") return;
  const url = buildGovFormUrl(GOV_FORM_URL, {
    employee: sale.employee || "",
    customer: sale.customer || "",
    license: sale.customerLicense || "",
    paid: sale.paid || "",
    lines: heldSaleLines(sale),
  });
  openGovFormWindow(url, "Gov Form");
}

async function copyQuickText(entry) {
  try {
    await navigator.clipboard.writeText(entry.text);
    setStatus(`${entry.label} copied.`);
  } catch {
    const area = document.createElement("textarea");
    area.value = entry.text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.left = "-9999px";
    document.body.appendChild(area);
    area.select();
    try {
      document.execCommand("copy");
      setStatus(`${entry.label} copied.`);
    } catch {
      setStatus(`Could not copy ${entry.label}.`, true);
    } finally {
      document.body.removeChild(area);
    }
  }
}

function renderQuickConfirm() {
  els.quickConfirmBody.innerHTML = "";
  STORES.bisarnos.menu.forEach((group) => {
    const column = document.createElement("div");
    column.className = "quick-confirm-cat";

    const title = document.createElement("h4");
    title.className = "quick-confirm-title";
    title.textContent = group.category;
    column.appendChild(title);

    const list = document.createElement("ul");
    list.className = "quick-confirm-items";
    group.items.forEach((item) => {
      const entry = document.createElement("li");
      entry.textContent = item.name;
      if (item.soldOut) entry.classList.add("out");
      list.appendChild(entry);
    });
    column.appendChild(list);

    els.quickConfirmBody.appendChild(column);
  });
}

const INVENTORY_STOCK_KEY = "scumbags-bisarnos-inventory-stock";
const INVENTORY_CASE_CAPACITY = 9;
const INVENTORY_UNLISTED_GROUP = {
  category: "Unlisted",
  items: [
    { id: "unlisted-64-drum", name: "64-Round Drum Magazine" },
    { id: "unlisted-uzi-beta-cmag", name: "100-Round Beta C-Mag (Uzi)" },
    {
      id: "unlisted-80-parabellum-drum",
      name: "80-Round 9x19mm Parabellum Drum Magazine",
    },
    {
      id: "unlisted-50-parabellum-casket",
      name: "50-Round 9x19mm Parabellum Casket Magazine",
    },
    {
      id: "unlisted-m16a2-beta-cmag",
      name: "100-Round Beta C-Mag (Colt M16A2)",
    },
    { id: "unlisted-m249-bipod", name: "Integrated Bipod (FN M249 SAW)" },
    { id: "unlisted-40sw-mag", name: "10-Round .40 S&W Magazine" },
    { id: "unlisted-standard-30-mag", name: "30-Round Standard Magazine" },
    { id: "unlisted-762-30-mag", name: "30-Round 7.62x39mm Magazine" },
    {
      id: "unlisted-nato-75-drum",
      name: "75-Round 5.56x45mm NATO Drum Magazine",
    },
    { id: "unlisted-9x53mmr-mag", name: "10-Round 9x53mmR Magazine" },
  ],
};
const inventoryState = {
  caseLabels: Array(6).fill(""),
  caseItems: Array.from({ length: 6 }, () => []),
};
let selectedInventoryCase = 0;

function inventoryCaseGroups() {
  return [...STORES.bisarnos.menu, INVENTORY_UNLISTED_GROUP];
}

function inventoryCaseItems() {
  return inventoryCaseGroups().flatMap((group) => group.items);
}

function loadInventoryStock() {
  try {
    const saved = JSON.parse(localStorage.getItem(INVENTORY_STOCK_KEY) || "null");
    if (!saved) return;
    if (Array.isArray(saved.caseLabels)) {
      saved.caseLabels.slice(0, 6).forEach((label, index) => {
        inventoryState.caseLabels[index] = String(label || "");
      });
    }
    if (Array.isArray(saved.caseItems)) {
      const validIds = new Set(inventoryCaseItems().map((item) => item.id));
      saved.caseItems.slice(0, 6).forEach((items, index) => {
        if (!Array.isArray(items)) return;
        inventoryState.caseItems[index] = [
          ...new Set(items.filter((id) => validIds.has(id))),
        ].slice(0, INVENTORY_CASE_CAPACITY);
      });
    }
  } catch {
    localStorage.removeItem(INVENTORY_STOCK_KEY);
  }
}

function saveInventoryStock() {
  localStorage.setItem(
    INVENTORY_STOCK_KEY,
    JSON.stringify({
      caseLabels: inventoryState.caseLabels,
      caseItems: inventoryState.caseItems,
    }),
  );
}

function updateInventoryCaseCards() {
  const items = inventoryCaseItems();
  els.inventoryCaseGrid.querySelectorAll("[data-case-card]").forEach((card) => {
    const index = Number(card.dataset.caseCard);
    const assignedIds = inventoryState.caseItems[index] || [];
    const assignedNames = assignedIds
      .map((id) => items.find((item) => item.id === id)?.name)
      .filter(Boolean)
      .slice(0, INVENTORY_CASE_CAPACITY);
    const summary = card.querySelector("[data-case-summary]");
    summary.innerHTML = "";
    if (assignedNames.length === 0) {
      const empty = document.createElement("span");
      empty.textContent = "Empty case";
      summary.appendChild(empty);
    } else {
      assignedNames.forEach((name) => {
        const entry = document.createElement("span");
        entry.textContent = name;
        summary.appendChild(entry);
      });
    }
    card.classList.toggle("selected", index === selectedInventoryCase);
  });
}

function setSelectedInventoryCase(index) {
  selectedInventoryCase = Math.max(0, Math.min(5, Number(index) || 0));
  renderInventoryCaseAssignment();
  updateInventoryCaseCards();
}

function setCaseItemAssigned(caseIndex, itemId, assigned) {
  const items = new Set(inventoryState.caseItems[caseIndex] || []);
  if (assigned && items.size >= INVENTORY_CASE_CAPACITY) return false;
  if (assigned) items.add(itemId);
  else items.delete(itemId);
  inventoryState.caseItems[caseIndex] = [...items];
  saveInventoryStock();
  updateInventoryCaseCards();
  return true;
}

function renderInventoryCaseAssignment() {
  const label =
    inventoryState.caseLabels[selectedInventoryCase].trim() ||
    `Case ${selectedInventoryCase + 1}`;
  els.inventoryCaseAssignmentList.innerHTML = "";
  const assigned = new Set(inventoryState.caseItems[selectedInventoryCase] || []);
  els.inventoryCaseAssignmentTitle.textContent = `Assign items to ${label} (${assigned.size}/${INVENTORY_CASE_CAPACITY})`;

  inventoryCaseGroups().forEach((group) => {
    const section = document.createElement("section");
    section.className = "inventory-case-assignment-group";
    if (group.category === "Unlisted") section.classList.add("unlisted");
    const title = document.createElement("h5");
    title.textContent = group.category;
    section.appendChild(title);

    group.items.forEach((item) => {
      const option = document.createElement("label");
      option.className = "inventory-case-item";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = assigned.has(item.id);
      checkbox.disabled =
        !checkbox.checked && assigned.size >= INVENTORY_CASE_CAPACITY;
      const name = document.createElement("span");
      name.textContent = item.name;
      checkbox.addEventListener("change", () => {
        const changed = setCaseItemAssigned(
          selectedInventoryCase,
          item.id,
          checkbox.checked,
        );
        if (!changed) checkbox.checked = false;
        renderInventoryCaseAssignment();
      });
      option.classList.toggle("assigned", checkbox.checked);
      option.append(checkbox, name);
      section.appendChild(option);
    });
    els.inventoryCaseAssignmentList.appendChild(section);
  });
}

function renderInventoryStock() {
  els.inventoryCaseGrid
    .querySelectorAll("[data-case-index]")
    .forEach((input) => {
      const index = Number(input.dataset.caseIndex);
      input.value = inventoryState.caseLabels[index] || "";
      input.addEventListener("input", () => {
        inventoryState.caseLabels[index] = input.value;
        saveInventoryStock();
        if (index === selectedInventoryCase) renderInventoryCaseAssignment();
      });
    });

  els.inventoryCaseGrid
    .querySelectorAll("[data-case-card]")
    .forEach((card) => {
      const select = () => setSelectedInventoryCase(card.dataset.caseCard);
      card.addEventListener("click", (event) => {
        if (event.target.closest("input")) return;
        select();
      });
      card.addEventListener("keydown", (event) => {
        if (event.target.closest("input")) return;
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        select();
      });
    });
  renderInventoryCaseAssignment();
  updateInventoryCaseCards();
}

function openBisarnosLock() {  els.bisarnosLockError.textContent = "";
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
  els.couponCode.value = state.couponCode || "";
  els.orderIdentifier.value = state.orderIdentifier || "";
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
  const saved = localStorage.getItem(ACTIVE_STORE_KEY);
  if (saved && STORES[saved] && saved !== "bisarnos") activeStoreId = saved;
}

const PHOTO_DB_NAME = "scumbags-sale-tracker";
const PHOTO_STORE_NAME = "bisarnos-photos";
const HELD_SALE_STORE_NAME = "bisarnos-held-sales";
let photoRecords = [];
let photoObjectUrls = [];
let heldSales = [];

function photoStoreId(record) {
  return record.storeId || "bisarnos";
}

function activePhotoRecords() {
  return photoRecords.filter((record) => photoStoreId(record) === activeStoreId);
}

function openPhotoDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(PHOTO_DB_NAME, 3);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(PHOTO_STORE_NAME)) {
        db.createObjectStore(PHOTO_STORE_NAME, { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains(HELD_SALE_STORE_NAME)) {
        db.createObjectStore(HELD_SALE_STORE_NAME, { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains(PHOTO_DUMP_STORE_NAME)) {
        db.createObjectStore(PHOTO_DUMP_STORE_NAME, { keyPath: "id" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function requestPersistentStorage() {
  if (!navigator.storage?.persist) return;
  try {
    await navigator.storage.persist();
  } catch {}
}

async function runPhotoTransaction(mode, operation) {
  const db = await openPhotoDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(PHOTO_STORE_NAME, mode);
    const store = transaction.objectStore(PHOTO_STORE_NAME);
    const request = operation(store);
    let result;
    request.onsuccess = () => {
      result = request.result;
    };
    request.onerror = () => reject(request.error);
    transaction.oncomplete = () => {
      db.close();
      resolve(result);
    };
    transaction.onerror = () => {
      db.close();
      reject(transaction.error);
    };
    transaction.onabort = () => {
      db.close();
      reject(transaction.error);
    };
  });
}

async function runHeldSaleTransaction(mode, operation) {
  const db = await openPhotoDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(HELD_SALE_STORE_NAME, mode);
    const store = transaction.objectStore(HELD_SALE_STORE_NAME);
    const request = operation(store);
    let result;
    request.onsuccess = () => {
      result = request.result;
    };
    request.onerror = () => reject(request.error);
    transaction.oncomplete = () => {
      db.close();
      resolve(result);
    };
    transaction.onerror = () => {
      db.close();
      reject(transaction.error);
    };
    transaction.onabort = () => {
      db.close();
      reject(transaction.error);
    };
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
const COUPON_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const COUPON_CODES = new Set([
  "A424681190546792361",
  "B294407129869230295",
  "C415213934834762662",
  "D324452593454395396",
  "E821522828072349762",
  "F272166749284946528",
  "G807888948267449297",
  "H897523223090582032",
  "I254394663776942021",
  "J646744753705459551",
  "K455840943898621514",
  "L151913881034032396",
  "M667935301164022509",
  "N707612942921015284",
  "O623533731041280332",
  "P814277853443640134",
  "Q754032469302508680",
  "R430069189566681245",
  "S239442469427513550",
  "T394011540664805696",
]);

function normalizeCouponToken(value) {
  return String(value || "")
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .replace(/O/g, "0")
    .replace(/[IL]/g, "1")
    .replace(/S/g, "5")
    .replace(/B/g, "8")
    .replace(/Z/g, "2");
}

function tidyCouponCode(value) {
  return String(value || "")
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");
}

function isKnownCouponCode(value) {
  return COUPON_CODES.has(tidyCouponCode(value));
}

function extractCouponCode(text) {
  const cleaned = String(text || "").toUpperCase();
  if (!cleaned) return "";

  for (const code of COUPON_CODES) {
    if (cleaned.includes(code)) return code;
  }

  const candidates = cleaned.match(/[A-T][0-9OILSBZ]{18}/g) || [];
  for (const candidate of candidates) {
    const tidy = tidyCouponCode(candidate);
    if (COUPON_CODES.has(tidy)) return tidy;
  }

  const compact = cleaned.replace(/[^A-Z0-9]/g, "");
  for (const code of COUPON_CODES) {
    if (compact.includes(code)) return code;
  }

  const fuzzy = compact.match(/[A-T][0-9OILSBZ]{18}/g) || [];
  for (const candidate of fuzzy) {
    const prefix = candidate[0];
    const body = normalizeCouponToken(candidate.slice(1));
    const rebuilt = `${prefix}${body}`;
    if (COUPON_CODES.has(rebuilt)) return rebuilt;
    for (const code of COUPON_CODES) {
      if (code[0] !== prefix) continue;
      const target = code.slice(1);
      let mismatches = 0;
      for (let i = 0; i < 18; i += 1) {
        if (body[i] !== target[i]) mismatches += 1;
        if (mismatches > 1) break;
      }
      if (mismatches <= 1) return code;
    }
  }

  return "";
}

function applyCouponCode(code, { announce = true } = {}) {
  const tidy = tidyCouponCode(code);
  if (!tidy) return false;
  els.couponCode.value = tidy;
  storeState.bisarnos.couponCode = tidy;
  syncPaidFromAuto();
  updatePreview();
  if (announce) {
    if (isKnownCouponCode(tidy)) {
      setStatus("Coupon code accepted.");
    } else {
      setStatus("Coupon code entered, but it is not on the valid list.", true);
    }
  }
  return true;
}

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

    // Balance nickname quotes.
    if ((cleaned.match(/"/g) || []).length === 1) {
      cleaned = cleaned
        .replace(/(^|\s)([A-Za-zÀ-ÖØ-öø-ÿ'-]+)"/, '$1"$2"')
        .replace(/"([A-Za-zÀ-ÖØ-öø-ÿ'-]+)(\s|$)/, '"$1"$2');
    }

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
    const sameLine = tidy(
      lines[index].replace(/^.*?\bname\b\s*[:\-]?\s*/i, "").split(labels)[0],
    );
    const nextLine = tidy((lines[index + 1] || "").split(labels)[0]);
    const candidate = letterCount(sameLine) >= 3 ? sameLine : nextLine;
    if (letterCount(candidate) >= 3 && !labels.test(candidate)) {
      return candidate;
    }
  }

  // Fallback when the Name heading is unreadable.
  for (let index = 1; index < lines.length; index += 1) {
    if (!/\b(?:nationality|english)\b/i.test(lines[index])) continue;
    const candidate = tidy(lines[index - 1].split(labels)[0]);
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

// Fix OCR mixups in digit groups.
function repairDigitGroup(group) {
  const digits = (group.match(/\d/g) || []).length;
  if (digits === 0 || digits < group.length - 2) return group;
  return group.replace(/[A-Z]/g, (char) => OCR_DIGIT_FIXES[char] || char);
}

function countDigits(value) {
  return (value.match(/\d/g) || []).length;
}

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

function trimToLicense(run) {
  const groups = run.split("-");
  for (let count = 2; count <= groups.length; count += 1) {
    const prefix = groups.slice(0, count).join("-");
    if (looksLikeWholeLicense(prefix)) return prefix;
  }
  return run;
}

// Rejoin split license tokens.
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
    .replace(/\b((?:[A-Za-z]\s+){1,5}[A-Za-z])(?=\s*[-—–])/g, (chunk) =>
      chunk.replace(/\s+/g, ""),
    )
    .replace(/[—–‑‒−]/g, "-")
    .replace(/\s*-\s*/g, "-")
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

  const CANONICAL_LICENSE = /^F[A-Z]{3}-[0-9]-[0-9]{6}-[A-Z]$/;
  const ACCEPTABLE_LICENSE = /^F[A-Z]{2,4}-[A-Z0-9]{1,2}-[0-9]{5,7}-[A-Z0-9]{1,2}$/;

  const scored = candidates
    .map((value) => value.trim())
    .filter((value) => ACCEPTABLE_LICENSE.test(value))
    .map((value) => ({
      value,
      canonical: CANONICAL_LICENSE.test(value) ? 1 : 0,
      digits: countDigits(value),
    }));

  if (scored.length === 0) {
    // Lenient fallback still requires the full six-digit block.
    const lenient = candidates
      .map((value) => value.trim())
      .filter(
        (value) =>
          /^F[A-Z0-9]{1,5}(?:-[A-Z0-9]{1,8})+$/.test(value) &&
          /[0-9]{6}/.test(value),
      )
      .map((value) => ({ value, digits: countDigits(value) }));

    if (lenient.length === 0) return "";
    lenient.sort(
      (a, b) => b.digits - a.digits || b.value.length - a.value.length,
    );
    return lenient[0].value;
  }

  scored.sort(
    (a, b) =>
      b.canonical - a.canonical ||
      b.digits - a.digits ||
      b.value.length - a.value.length,
  );
  return scored[0].value;
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

    // Try the ID card crop.
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

    // Try likely license lines.
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

    // Last OCR fallback.
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

async function scanPhotoForCoupon(blob) {
  if (ocrRunning) {
    setStatus("A scan is already running.", true);
    return;
  }
  if (!window.Tesseract) {
    setStatus("OCR could not load. Check your internet connection.", true);
    return;
  }

  ocrRunning = true;
  setStatus("Scanning photo for coupon code…");

  let source = null;

  try {
    source = await loadOcrSource(blob);

    ocrPassLabel = "the coupon photo";
    const full = await runOcr(source.canvas, {
      psm: Tesseract.PSM.AUTO,
      whitelist: COUPON_CHARS,
    });
    let coupon = extractCouponCode(full.text);

    if (!coupon) {
      const bands = [
        { x0: 0.05, y0: 0.5, x1: 0.95, y1: 0.98 },
        { x0: 0.05, y0: 0.72, x1: 0.95, y1: 0.95 },
      ];
      for (const band of bands) {
        const region = {
          x0: source.canvas.width * band.x0,
          y0: source.canvas.height * band.y0,
          x1: source.canvas.width * band.x1,
          y1: source.canvas.height * band.y1,
        };
        const crop = cropSource(source, region, {
          targetWidth: 2000,
          contrast: 1.4,
          pad: 4,
        });
        if (!crop) continue;
        ocrPassLabel = "the coupon banner";
        const banner = await runOcr(crop, {
          psm: Tesseract.PSM.SINGLE_LINE,
          whitelist: COUPON_CHARS,
        });
        coupon = extractCouponCode(banner.text);
        if (coupon) break;
      }
    }

    if (!coupon) {
      ocrPassLabel = "scattered coupon text";
      const sparse = await runOcr(source.canvas, {
        psm: Tesseract.PSM.SPARSE_TEXT,
        whitelist: COUPON_CHARS,
      });
      coupon = extractCouponCode(sparse.text);
    }

    if (!coupon) {
      ocrPassLabel = "coupon line";
      const line = await runOcr(source.canvas, {
        psm: Tesseract.PSM.SINGLE_LINE,
        whitelist: COUPON_CHARS,
      });
      coupon = extractCouponCode(line.text);
    }

    if (coupon) {
      applyCouponCode(coupon);
    } else {
      setStatus("Could not find a valid coupon code in this photo.", true);
    }
  } catch {
    setStatus("Could not scan this photo for a coupon.", true);
  } finally {
    if (source) source.bitmap.close();
    ocrRunning = false;
  }
}

function renderPhotoClipboard() {
  photoObjectUrls.forEach((url) => URL.revokeObjectURL(url));
  photoObjectUrls = [];
  els.photoList.innerHTML = "";

  activePhotoRecords()
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
          ${
            activeStoreId === "bisarnos"
              ? '<button type="button" class="photo-action scan-photo">Scan ID</button><button type="button" class="photo-action scan-coupon">Scan coupon</button>'
              : ""
          }
          <button type="button" class="photo-action copy-photo">Copy photo</button>
          <button type="button" class="photo-action remove" aria-label="Remove photo">Remove</button>
        </div>
      `;
      const image = card.querySelector("img");
      image.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        openPhotoLightbox(url);
      });
      card.querySelector(".scan-photo")?.addEventListener("click", () => {
        scanPhotoForId(record.blob);
      });
      card.querySelector(".scan-coupon")?.addEventListener("click", () => {
        scanPhotoForCoupon(record.blob);
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
  if (activeStoreId !== "bisarnos") return;
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
        storeId: activeStoreId,
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
  const currentPhotos = activePhotoRecords();
  if (currentPhotos.length === 0) return;
  if (!window.confirm("Remove every saved photo from the clipboard?")) return;

  try {
    for (const record of currentPhotos) {
      await runPhotoTransaction("readwrite", (store) => store.delete(record.id));
    }
    const currentIds = new Set(currentPhotos.map((record) => record.id));
    photoRecords = photoRecords.filter((record) => !currentIds.has(record.id));
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

let heldPhotoObjectUrls = [];

function heldSaleStoreId(sale) {
  return sale.storeId || "bisarnos";
}

function heldSaleLines(sale) {
  const store = STORES[heldSaleStoreId(sale)] || STORES.bisarnos;
  const items = allItems(store);
  return Object.entries(sale.quantities || {})
    .map(([key, qty]) => {
      const [itemId, mode] = key.split("::");
      const item = items.find((entry) => entry.id === itemId);
      return item && qty > 0 ? { item, mode, qty } : null;
    })
    .filter(Boolean);
}

function buildHeldSaleLog(sale) {
  const lines = heldSaleLines(sale);
  const paid = parsePaid(sale.paid);
  if (!sale.employee || lines.length === 0 || paid == null) return "";

  if (heldSaleStoreId(sale) === "lanova") {
    const items = lines.map((line) => `${line.item.name} x ${line.qty}`);
    return [
      sale.employee,
      ...items,
      `Paid: ${formatMoney(paid)}`,
    ].join("\n");
  }

  const attachments = lines
    .map((line) => `x${line.qty} ${line.item.name} ${MODE_LABELS[line.mode]}`)
    .join(", ");
  const subtotal = getLinesTotal(lines);
  const couponCode = tidyCouponCode(sale.couponCode);
  const discount =
    couponCode && isKnownCouponCode(couponCode)
      ? Math.round(subtotal * 0.1 * 100) / 100
      : 0;
  return [
    `Employee: ${sale.employee}`,
    `Customer: ${sale.customer || ""}`,
    `Paid: ${formatMoney(paid)}`,
    ...(couponCode
      ? [
          `Coupon: ${couponCode}${
            discount ? ` (-${formatMoney(discount)})` : ""
          }`,
        ]
      : []),
    `Attachments: ${attachments}`,
  ].join("\n");
}

async function copyText(text, successMessage) {
  try {
    await navigator.clipboard.writeText(text);
    setStatus(successMessage);
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
      setStatus(successMessage);
    } catch {
      setStatus("Could not copy this held sale.", true);
    } finally {
      area.remove();
    }
  }
}

let heldHoverEl = null;
let heldWindowEl = null;
let heldWindowBody = null;

function buildHeldPreviewNode(sale) {
  const wrap = document.createElement("div");

  const title = document.createElement("div");
  title.className = "held-preview-title";
  title.textContent =
    sale.orderIdentifier ||
    (heldSaleStoreId(sale) === "bisarnos"
      ? sale.customer || "Unnamed customer"
      : "La Nova order");
  wrap.appendChild(title);

  const list = document.createElement("ul");
  list.className = "held-preview-list";
  const lines = heldSaleLines(sale);
  if (lines.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No items yet";
    list.appendChild(li);
  } else {
    lines.forEach((line) => {
      const li = document.createElement("li");
      const nameEl = document.createElement("span");
      nameEl.textContent = line.item.name;
      const qtyEl = document.createElement("span");
      qtyEl.textContent = `× ${line.qty}`;
      li.append(nameEl, qtyEl);
      list.appendChild(li);
    });
  }
  wrap.appendChild(list);

  const paid = parsePaid(sale.paid);
  if (paid != null) {
    const paidEl = document.createElement("div");
    paidEl.className = "held-preview-paid";
    paidEl.textContent = `Paid: ${formatMoney(paid)}`;
    wrap.appendChild(paidEl);
  }
  return wrap;
}

function getHeldHoverEl() {
  if (!heldHoverEl) {
    heldHoverEl = document.createElement("div");
    heldHoverEl.className = "held-preview hidden";
    document.body.appendChild(heldHoverEl);
  }
  return heldHoverEl;
}

function showHeldHoverPreview(sale, card) {
  const el = getHeldHoverEl();
  el.innerHTML = "";
  el.appendChild(buildHeldPreviewNode(sale));
  el.classList.remove("hidden");

  const rect = card.getBoundingClientRect();
  el.style.top = `${Math.max(8, Math.min(rect.top, window.innerHeight - el.offsetHeight - 8))}px`;
  let left = rect.left - el.offsetWidth - 12;
  if (left < 8) left = Math.min(rect.right + 12, window.innerWidth - el.offsetWidth - 8);
  el.style.left = `${left}px`;
}

function hideHeldHoverPreview() {
  if (heldHoverEl) heldHoverEl.classList.add("hidden");
}

function closeHeldOrderWindow() {
  if (heldWindowEl) heldWindowEl.classList.add("hidden");
}

function getHeldOrderWindow() {
  if (heldWindowEl) return heldWindowEl;

  heldWindowEl = document.createElement("div");
  heldWindowEl.className = "held-window hidden";

  const bar = document.createElement("div");
  bar.className = "held-window-bar";
  const barTitle = document.createElement("span");
  barTitle.textContent = "Held order";
  const close = document.createElement("button");
  close.type = "button";
  close.className = "held-window-close";
  close.setAttribute("aria-label", "Close held order");
  close.textContent = "✕";
  close.addEventListener("click", closeHeldOrderWindow);
  bar.append(barTitle, close);

  heldWindowBody = document.createElement("div");
  heldWindowBody.className = "held-window-body";
  heldWindowEl.append(bar, heldWindowBody);
  document.body.appendChild(heldWindowEl);

  let dragging = false;
  let offsetX = 0;
  let offsetY = 0;
  bar.addEventListener("pointerdown", (event) => {
    if (event.target === close) return;
    dragging = true;
    const rect = heldWindowEl.getBoundingClientRect();
    offsetX = event.clientX - rect.left;
    offsetY = event.clientY - rect.top;
    bar.setPointerCapture(event.pointerId);
  });
  bar.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    const left = Math.max(
      8,
      Math.min(event.clientX - offsetX, window.innerWidth - heldWindowEl.offsetWidth - 8),
    );
    const top = Math.max(
      8,
      Math.min(event.clientY - offsetY, window.innerHeight - heldWindowEl.offsetHeight - 8),
    );
    heldWindowEl.style.left = `${left}px`;
    heldWindowEl.style.top = `${top}px`;
  });
  const stopDrag = (event) => {
    dragging = false;
    try {
      bar.releasePointerCapture(event.pointerId);
    } catch {}
  };
  bar.addEventListener("pointerup", stopDrag);
  bar.addEventListener("pointercancel", stopDrag);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeHeldOrderWindow();
  });
  document.addEventListener(
    "pointerdown",
    (event) => {
      if (!heldWindowEl || heldWindowEl.classList.contains("hidden")) return;
      if (!heldWindowEl.contains(event.target)) closeHeldOrderWindow();
    },
    true,
  );

  return heldWindowEl;
}

function openHeldOrderWindow(sale, x, y) {
  hideHeldHoverPreview();
  const el = getHeldOrderWindow();
  heldWindowBody.innerHTML = "";
  heldWindowBody.appendChild(buildHeldPreviewNode(sale));
  el.classList.remove("hidden");

  el.style.left = "0px";
  el.style.top = "0px";
  const left = Math.max(8, Math.min(x, window.innerWidth - el.offsetWidth - 8));
  const top = Math.max(8, Math.min(y, window.innerHeight - el.offsetHeight - 8));
  el.style.left = `${left}px`;
  el.style.top = `${top}px`;
}

function renderHeldSales() {
  const storeSales = heldSales.filter(
    (sale) => heldSaleStoreId(sale) === activeStoreId,
  );
  heldPhotoObjectUrls.forEach((url) => URL.revokeObjectURL(url));
  heldPhotoObjectUrls = [];
  els.heldSalesList.innerHTML = "";
  els.heldSalesCount.textContent = String(storeSales.length);

  if (storeSales.length === 0) {
    const empty = document.createElement("p");
    empty.className = "held-sales-empty";
    empty.textContent = "No sales on hold.";
    els.heldSalesList.appendChild(empty);
    return;
  }

  storeSales
    .slice()
    .sort((a, b) => b.createdAt - a.createdAt)
    .forEach((sale) => {
      const card = document.createElement("article");
      card.className = "held-sale-card";

      if (sale.photos?.length) {
        const url = URL.createObjectURL(sale.photos[0].blob);
        heldPhotoObjectUrls.push(url);
        const image = document.createElement("img");
        image.src = url;
        image.alt = `Held sale for ${sale.customer || "customer"}`;
        image.className = "held-sale-thumb";
        image.addEventListener("contextmenu", (event) => {
          event.preventDefault();
          openPhotoLightbox(url);
        });
        card.appendChild(image);
      }

      const info = document.createElement("div");
      info.className = "held-sale-info";
      const name = document.createElement("strong");
      name.textContent =
        sale.orderIdentifier ||
        (heldSaleStoreId(sale) === "bisarnos"
          ? sale.customer || "Unnamed customer"
          : "La Nova order");
      const details = document.createElement("span");
      const itemCount = heldSaleLines(sale).reduce((sum, line) => sum + line.qty, 0);
      const itemSummary = `${itemCount} item${itemCount === 1 ? "" : "s"}`;
      details.textContent =
        heldSaleStoreId(sale) === "bisarnos"
          ? `${itemSummary} · ${sale.photos?.length || 0} photo${
              sale.photos?.length === 1 ? "" : "s"
            }`
          : `${itemSummary} · ${formatMoney(parsePaid(sale.paid) || 0)}`;
      info.append(name, details);
      card.appendChild(info);

      const actions = document.createElement("div");
      actions.className = "held-sale-actions";
      const actionData = [
        ["Title", () => renameHeldSale(sale)],
        ["Resume", () => resumeHeldSale(sale)],
        [
          "Copy log",
          () => {
            const text = buildHeldSaleLog(sale);
            if (!text) {
              setStatus("Resume this sale to finish its details.", true);
              return;
            }
            copyText(text, "Held sale log copied.");
          },
        ],
      ];
      if (sale.photos?.length) {
        actionData.push(["Copy photo", () => copyPhoto(sale.photos[0].blob)]);
      }
      if (heldSaleStoreId(sale) === "bisarnos") {
        actionData.push(["Gov Form", () => openHeldGovForm(sale)]);
      }
      actionData.push(["Remove", () => removeHeldSale(sale.id)]);

      actionData.forEach(([label, handler]) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = `held-sale-action${label === "Remove" ? " remove" : ""}`;
        button.textContent = label;
        button.addEventListener("click", handler);
        actions.appendChild(button);
      });
      card.appendChild(actions);

      if (heldSaleStoreId(sale) === "lanova") {
        card.classList.add("has-preview");
        card.addEventListener("mouseenter", () =>
          showHeldHoverPreview(sale, card),
        );
        card.addEventListener("mouseleave", hideHeldHoverPreview);
        card.addEventListener("contextmenu", (event) => {
          event.preventDefault();
          openHeldOrderWindow(sale, event.clientX, event.clientY);
        });
      }

      els.heldSalesList.appendChild(card);
    });
}

async function loadHeldSales() {
  try {
    heldSales = await runHeldSaleTransaction("readonly", (store) => store.getAll());
    renderHeldSales();
  } catch {
    setStatus("Held-sale storage is unavailable in this browser.", true);
  }
}

async function holdCurrentSale() {
  const state = activeState();
  const isBisarnos = activeStoreId === "bisarnos";
  const orderPhotos = isBisarnos ? activePhotoRecords() : [];
  const hasDetails =
    Object.keys(state.quantities).length > 0 ||
    els.orderIdentifier.value.trim() ||
    els.paid.value.trim() ||
    orderPhotos.length > 0 ||
    (isBisarnos &&
      (els.customer.value.trim() ||
        els.customerLicense.value.trim() ||
        els.couponCode.value.trim()));
  if (!hasDetails) {
    setStatus("Add order details before holding it.", true);
    return;
  }

  const sale = {
    id: makePhotoId(),
    storeId: activeStoreId,
    createdAt: Date.now(),
    employee: els.employee.value.trim(),
    orderIdentifier: els.orderIdentifier.value.trim(),
    customer: isBisarnos ? els.customer.value.trim() : "",
    customerLicense: isBisarnos ? els.customerLicense.value.trim() : "",
    couponCode: isBisarnos ? els.couponCode.value.trim() : "",
    paid: els.paid.value,
    paidManual: state.paidManual,
    quantities: { ...state.quantities },
    photos: orderPhotos.map((record) => ({ ...record })),
  };

  try {
    await runHeldSaleTransaction("readwrite", (store) => store.put(sale));
    for (const photo of orderPhotos) {
      await runPhotoTransaction("readwrite", (store) => store.delete(photo.id));
    }
    heldSales.push(sale);
    const heldPhotoIds = new Set(orderPhotos.map((record) => record.id));
    photoRecords = photoRecords.filter((record) => !heldPhotoIds.has(record.id));
    renderPhotoClipboard();
    clearSale();
    renderHeldSales();
    setStatus("Order held. Ready for the next customer.");
  } catch {
    setStatus("Could not hold this sale.", true);
  }
}

async function resumeHeldSale(sale) {
  const storeId = heldSaleStoreId(sale);
  if (storeId !== activeStoreId) return;
  const state = storeState[storeId];
  const isBisarnos = storeId === "bisarnos";
  const currentPhotos = isBisarnos ? activePhotoRecords() : [];
  const resumePhotos = isBisarnos ? sale.photos || [] : [];
  const currentHasData =
    Object.keys(state.quantities).length > 0 ||
    els.orderIdentifier.value.trim() ||
    els.paid.value.trim() ||
    currentPhotos.length > 0 ||
    (isBisarnos &&
      (els.customer.value.trim() ||
        els.customerLicense.value.trim() ||
        els.couponCode.value.trim()));
  if (
    currentHasData &&
    !window.confirm("Replace the current sale with this held sale?")
  ) {
    return;
  }

  try {
    for (const photo of currentPhotos) {
      await runPhotoTransaction("readwrite", (store) => store.delete(photo.id));
    }
    for (const photo of resumePhotos) {
      await runPhotoTransaction("readwrite", (store) => store.put(photo));
    }
    await runHeldSaleTransaction("readwrite", (store) => store.delete(sale.id));

    Object.keys(state.quantities).forEach((key) => delete state.quantities[key]);
    Object.assign(state.quantities, sale.quantities || {});
    state.paid = sale.paid || "";
    state.paidManual = Boolean(sale.paidManual);
    state.orderIdentifier = sale.orderIdentifier || "";
    els.paid.value = state.paid;
    els.orderIdentifier.value = state.orderIdentifier;
    if (isBisarnos) {
      state.customer = sale.customer || "";
      state.customerLicense = sale.customerLicense || "";
      state.couponCode = sale.couponCode || "";
      els.customer.value = state.customer;
      els.customerLicense.value = state.customerLicense;
      els.couponCode.value = state.couponCode;
    }
    if (sale.employee) {
      els.employee.value = sale.employee;
      saveEmployee();
    }
    const currentPhotoIds = new Set(currentPhotos.map((record) => record.id));
    photoRecords = photoRecords.filter(
      (record) => !currentPhotoIds.has(record.id),
    );
    photoRecords.push(
      ...resumePhotos.map((record) => ({
        ...record,
        storeId,
      })),
    );
    renderPhotoClipboard();
    heldSales = heldSales.filter((entry) => entry.id !== sale.id);
    renderMenu(state.search);
    renderHeldSales();
    updatePreview();
    setStatus("Held sale restored.");
  } catch {
    setStatus("Could not restore this held sale.", true);
  }
}

async function removeHeldSale(id) {
  if (!window.confirm("Remove this held sale and its saved photos?")) return;
  try {
    await runHeldSaleTransaction("readwrite", (store) => store.delete(id));
    heldSales = heldSales.filter((sale) => sale.id !== id);
    renderHeldSales();
    setStatus("Held sale removed.");
  } catch {
    setStatus("Could not remove this held sale.", true);
  }
}

async function renameHeldSale(sale) {
  const fallbackTitle =
    heldSaleStoreId(sale) === "bisarnos"
      ? sale.customer || "Unnamed customer"
      : "La Nova order";
  const nextTitle = window.prompt(
    "Enter a title for this held order:",
    sale.orderIdentifier || fallbackTitle,
  );
  if (nextTitle == null) return;

  sale.orderIdentifier = nextTitle.trim();
  try {
    await runHeldSaleTransaction("readwrite", (store) => store.put(sale));
    renderHeldSales();
    setStatus(
      sale.orderIdentifier
        ? "Held order title updated."
        : "Held order title reset.",
    );
  } catch {
    setStatus("Could not update this held order title.", true);
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

els.couponCode.addEventListener("input", () => {
  const tidy = tidyCouponCode(els.couponCode.value);
  if (els.couponCode.value !== tidy) {
    const start = els.couponCode.selectionStart;
    const end = els.couponCode.selectionEnd;
    els.couponCode.value = tidy;
    if (typeof start === "number" && typeof end === "number") {
      els.couponCode.setSelectionRange(start, end);
    }
  }
  activeState().couponCode = els.couponCode.value;
  syncPaidFromAuto();
  updatePreview();
  if (!els.couponCode.value) {
    setStatus("");
  } else if (isKnownCouponCode(els.couponCode.value)) {
    setStatus("Coupon code accepted.");
  } else {
    setStatus("Coupon code not recognised yet.", true);
  }
});

els.orderIdentifier.addEventListener("input", () => {
  activeState().orderIdentifier = els.orderIdentifier.value;
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

els.quickConfirmToggle.addEventListener("click", () => {
  const open = els.quickConfirmToggle.getAttribute("aria-expanded") !== "true";
  els.quickConfirmToggle.setAttribute("aria-expanded", String(open));
  els.quickConfirmBody.hidden = !open;
});

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
els.holdSaleBtn.addEventListener("click", holdCurrentSale);
els.prefillGovFormBtn.addEventListener("click", openCurrentGovForm);
els.clearBtn.addEventListener("click", () => {
  clearSale();
});

els.storeButtons.forEach((btn) => {
  btn.addEventListener("click", () => switchStore(btn.dataset.store));
});

function tryUnlockBisarnos() {
  const code = els.bisarnosPasscode.value.trim();
  if (code.length < 4) return false;
  if (code !== BISARNOS_PASSCODE) {
    els.bisarnosLockError.textContent = "Wrong code.";
    els.bisarnosPasscode.select();
    return false;
  }
  bisarnosUnlocked = true;
  closeBisarnosLock();
  switchStore("bisarnos");
  return true;
}

els.bisarnosLockForm.addEventListener("submit", (event) => {
  event.preventDefault();
  tryUnlockBisarnos();
});

els.bisarnosLockCancel.addEventListener("click", closeBisarnosLock);

els.bisarnosPasscode.addEventListener("input", () => {
  els.bisarnosLockError.textContent = "";
  els.bisarnosPasscode.value = els.bisarnosPasscode.value
    .replace(/\D/g, "")
    .slice(0, 4);
  if (els.bisarnosPasscode.value.length === 4) {
    tryUnlockBisarnos();
  }
});

loadEmployee();
loadInitialStore();
loadInventoryStock();
requestPersistentStorage();
applyStoreChrome();
renderQuickConfirm();
renderInventoryStock();
els.customer.value = activeState().customer || "";
els.customerLicense.value = activeState().customerLicense || "";
els.couponCode.value = activeState().couponCode || "";
els.orderIdentifier.value = activeState().orderIdentifier || "";
els.paid.value = activeState().paid;
els.search.value = activeState().search;
renderMenu(activeState().search);
updatePreview();
loadPhotos();
loadHeldSales();
