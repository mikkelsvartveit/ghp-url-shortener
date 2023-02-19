import entries from "./entries.json" assert { type: "json" };

const path = window.location.pathname;

if (path in entries) {
  window.location.replace(entries[path]);
} else {
  window.location.replace("not-found.html");
}
