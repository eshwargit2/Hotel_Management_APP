const EXTRA_HOTELS_KEY = "rhs-extra-hotels";

export function loadExtraHotels() {
  try {
    const raw = localStorage.getItem(EXTRA_HOTELS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveExtraHotel(hotel) {
  const next = [hotel, ...loadExtraHotels()];
  localStorage.setItem(EXTRA_HOTELS_KEY, JSON.stringify(next));
  return next;
}

export function formatPrice(value) {
  const amount = Number(String(value).replace(/[^0-9.]/g, ""));
  if (!amount) {
    return "";
  }

  return `₹${Math.round(amount).toLocaleString("en-IN")}`;
}

export function slugifyName(name) {
  const base = name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return `${base || "hotel"}-${Date.now()}`;
}
