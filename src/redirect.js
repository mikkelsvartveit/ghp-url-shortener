import entries from "../entries.js";

// Get path after domain.com, trim '/'
const path = window.location.pathname.replace(/^\/+|\/+$/g, "");

if (path in entries) {
  window.location.replace(entries[path]);
} else {
  document.getElementById("not-found").style.display = "block";
}
