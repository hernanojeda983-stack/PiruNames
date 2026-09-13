/* =====================================
   PIRUNAMES
   GENERADOR DE NOMBRES
===================================== */


/* =====================================
   DATOS
===================================== */

const data = {

  personal: {
    first: [
      "Alex",
      "Milo",
      "Leo",
      "Nico",
      "Luca",
      "Max",
      "Ian",
      "Noah",
      "Eli",
      "Kai",
      "Dani",
      "Sam"
    ],

    second: [
      "Nova",
      "Storm",
      "Sky",
      "Wave",
      "Light",
      "Soul",
      "Star",
      "Moon",
      "Fire",
      "Dream"
    ]
  },


  gamer: {
    first: [
      "Shadow",
      "Ghost",
      "Dark",
      "Night",
      "Cyber",
      "Venom",
      "Zero",
      "Frost",
      "Blaze",
      "Rogue",
      "Phantom",
      "Hunter",
      "Viper",
      "Wolf"
    ],

    second: [
      "X",
      "Prime",
      "Legend",
      "Force",
      "Strike",
      "Zone",
      "Core",
      "King",
      "Rush",
      "Storm",
      "Pro"
    ]
  },


  social: {
    first: [
      "Its",
      "Hey",
      "Im",
      "Real",
      "Only",
      "Just",
      "The",
      "Mr",
      "Miss"
    ],

    second: [
      "Nova",
      "Milo",
      "Luna",
      "Vibe",
      "Wave",
      "Soul",
      "Mood",
      "Star",
      "Sky",
      "Dream"
    ]
  },


  business: {
    first: [
      "Nova",
      "Piru",
      "Urban",
      "Smart",
      "Prime",
      "Digital",
      "Nexa",
      "Vita",
      "Max",
      "Ultra"
    ],

    second: [
      "Tech",
      "Connect",
      "Store",
      "Hub",
      "Market",
      "Digital",
      "Solutions",
      "Studio",
      "Shop"
    ]
  },


  pet: {
    first: [
      "Milo",
      "Luna",
      "Coco",
      "Nala",
      "Toby",
      "Max",
      "Simba",
      "Kira",
      "Rocky",
      "Thor",
      "Loki",
      "Doki"
    ],

    second: [
      "Blue",
      "Moon",
      "Star",
      "Snow",
      "Cloud",
      "Sunny",
      "Bear",
      "Storm",
      "Baby",
      "King"
    ]
  },


  fantasy: {
    first: [
      "Aero",
      "Eryx",
      "Kael",
      "Zarek",
      "Arion",
      "Drax",
      "Eland",
      "Riven",
      "Vael",
      "Zyra",
      "Nyx",
      "Auron"
    ],

    second: [
      "Drake",
      "Storm",
      "Shadow",
      "Flame",
      "Moon",
      "Blade",
      "Knight",
      "Wolf",
      "Dragon",
      "Lord"
    ]
  },


  nickname: {
    first: [
      "Piru",
      "Milo",
      "Nico",
      "Gordo",
      "Flaco",
      "Loco",
      "Chino",
      "Rulo",
      "Toto",
      "Mono",
      "Pela",
      "Facha"
    ],

    second: [
      "Boss",
      "King",
      "Crack",
      "Pro",
      "Master",
      "Loko",
      "Star",
      "Legend"
    ]
  },


  aesthetic: {
    first: [
      "Luna",
      "Nova",
      "Aura",
      "Elys",
      "Nira",
      "Ayla",
      "Mira",
      "Lyra",
      "Nox",
      "Aeris"
    ],

    second: [
      "Moon",
      "Velvet",
      "Dream",
      "Bloom",
      "Cloud",
      "Rose",
      "Soul",
      "Mist",
      "Sky",
      "Glow"
    ]
  }

};


/* =====================================
   VARIABLES
===================================== */

let currentResults = [];

let favorites =
  JSON.parse(
    localStorage.getItem(
      "pirunames_favorites"
    )
  ) || [];


/* =====================================
   UTILIDADES
===================================== */

function randomItem(array) {

  return array[
    Math.floor(
      Math.random() * array.length
    )
  ];

}


function capitalize(text) {

  if (!text) return "";

  return text.charAt(0).toUpperCase()
    + text.slice(1);

}


function randomNumber(max) {

  return Math.floor(
    Math.random() * max
  );

}


/* =====================================
   GENERAR NOMBRE
===================================== */

function createName(category, style) {

  const categoryData =
    data[category] || data.personal;


  let first =
    randomItem(categoryData.first);

  let second =
    randomItem(categoryData.second);


  let name =
    first + second;


  /* ESTILOS */

  if (style === "cool") {

    const options = [
      first + "X" + second,
      first + "_" + second,
      first + second + "X",
      "Its" + first + second
    ];

    name = randomItem(options);

  }


  if (style === "dark") {

    const darkPrefixes = [
      "Dark",
      "Night",
      "Void",
      "Shadow",
      "Black"
    ];

    name =
      randomItem(darkPrefixes)
      + second;

  }


  if (style === "aesthetic") {

    const symbols = [
      "x",
      "_",
      ".",
      "xo"
    ];

    name =
      first
      + randomItem(symbols)
      + second;

  }


  if (style === "elegant") {

    const elegantPrefixes = [
      "The",
      "Sir",
      "Lady",
      "Mr",
      "Royal"
    ];

    name =
      randomItem(elegantPrefixes)
      + first
      + second;

  }


  if (style === "funny") {

    const funny = [
      "Don" + first,
      first + "XD",
      first + "NoDuerme",
      "El" + first,
      first + "Jajaja"
    ];

    name = randomItem(funny);

  }


  if (style === "short") {

    name =
      (
        first.slice(0, 3)
        +
        second.slice(0, 3)
      );

  }


  if (
    style === "random"
    && Math.random() > .6
  ) {

    const randomSymbols = [
      "X",
      "7",
      "99",
      "_",
      "."
    ];

    name += randomItem(randomSymbols);

  }


  return capitalize(name);

}


/* =====================================
   GENERAR LISTA
===================================== */

function generateNames() {

  const category =
    document.getElementById(
      "category"
    ).value;


  const style =
    document.getElementById(
      "style"
    ).value;


  const amount =
    Number(
      document.getElementById(
        "amount"
      ).value
    );


  const names = [];

  let attempts = 0;


  while (
    names.length < amount
    &&
    attempts < amount * 20
  ) {

    const name =
      createName(
        category,
        style
      );


    if (
      !names.includes(name)
    ) {

      names.push(name);

    }


    attempts++;

  }


  currentResults = names;


  document
    .getElementById(
      "resultsSection"
    )
    .classList.remove("hidden");


  document
    .getElementById(
      "favoritesSection"
    )
    .classList.add("hidden");


  document
    .getElementById(
      "resultSearch"
    ).value = "";


  renderResults(
    currentResults
  );


  document
    .getElementById(
      "resultsSection"
    )
    .scrollIntoView({
      behavior: "smooth"
    });

}


/* =====================================
   MOSTRAR RESULTADOS
===================================== */

function renderResults(names) {

  const container =
    document.getElementById(
      "results"
    );


  if (!names.length) {

    container.innerHTML = `
      <div class="empty">
        😕 No encontramos nombres.
        <br>
        Probá otra búsqueda.
      </div>
    `;

    return;

  }


  container.innerHTML =
    names.map(name => {

      const isFavorite =
        favorites.includes(name);


      return `

        <article
          class="name-card"
        >

          <div
            class="name-text"
          >
            ${escapeHTML(name)}
          </div>


          <div
            class="card-actions"
          >

            <button
              class="copy"
              onclick="copyName('${escapeAttribute(name)}')"
            >
              📋 Copiar
            </button>


            <button
              onclick="toggleFavorite('${escapeAttribute(name)}')"
            >
              ${isFavorite ? "❤️" : "♡"}
            </button>


            <button
              onclick="shareName('${escapeAttribute(name)}')"
            >
              📤
            </button>

          </div>

        </article>

      `;

    }).join("");

}


/* =====================================
   BUSCAR
===================================== */

function searchResults() {

  const query =
    document
      .getElementById(
        "resultSearch"
      )
      .value
      .toLowerCase()
      .trim();


  const filtered =
    currentResults.filter(
      name =>
        name
          .toLowerCase()
          .includes(query)
    );


  renderResults(filtered);

}


/* =====================================
   FAVORITOS
===================================== */

function toggleFavorite(name) {

  const index =
    favorites.indexOf(name);


  if (index === -1) {

    favorites.push(name);

    showToast(
      "❤️ Nombre guardado"
    );

  } else {

    favorites.splice(
      index,
      1
    );

    showToast(
      "Nombre eliminado"
    );

  }


  saveFavorites();

  renderResults(
    currentResults
  );

}


/* =====================================
   GUARDAR FAVORITOS
===================================== */

function saveFavorites() {

  localStorage.setItem(
    "pirunames_favorites",
    JSON.stringify(favorites)
  );


  updateFavoriteCount();

}


/* =====================================
   CONTADOR
===================================== */

function updateFavoriteCount() {

  document
    .getElementById(
      "favoriteCount"
    )
    .textContent =
      favorites.length;

}


/* =====================================
   ABRIR FAVORITOS
===================================== */

function openFavorites() {

  const section =
    document.getElementById(
      "favoritesSection"
    );


  document
    .getElementById(
      "resultsSection"
    )
    .classList.add("hidden");


  section.classList.remove(
    "hidden"
  );


  renderFavorites();


  section.scrollIntoView({
    behavior: "smooth"
  });

}


/* =====================================
   MOSTRAR FAVORITOS
===================================== */

function renderFavorites() {

  const container =
    document.getElementById(
      "favorites"
    );


  if (!favorites.length) {

    container.innerHTML = `
      <div class="empty">
        ❤️ Todavía no tenés favoritos.
        <br>
        Generá nombres y guardá
        los que más te gusten.
      </div>
    `;

    return;

  }


  container.innerHTML =
    favorites.map(name => {

      return `

        <article
          class="name-card"
        >

          <div
            class="name-text"
          >
            ${escapeHTML(name)}
          </div>


          <div
            class="card-actions"
          >

            <button
              class="copy"
              onclick="copyName('${escapeAttribute(name)}')"
            >
              📋 Copiar
            </button>


            <button
              onclick="toggleFavorite('${escapeAttribute(name)}')"
            >
              🗑️
            </button>


            <button
              onclick="shareName('${escapeAttribute(name)}')"
            >
              📤
            </button>

          </div>

        </article>

      `;

    }).join("");

}


/* =====================================
   VACIAR FAVORITOS
===================================== */

function clearFavorites() {

  if (!favorites.length) {

    showToast(
      "No hay favoritos para borrar"
    );

    return;

  }


  const confirmDelete =
    confirm(
      "¿Querés borrar todos tus favoritos?"
    );


  if (!confirmDelete) return;


  favorites = [];

  saveFavorites();

  renderFavorites();

  renderResults(
    currentResults
  );


  showToast(
    "🗑️ Favoritos eliminados"
  );

}


/* =====================================
   COPIAR
===================================== */

async function copyName(name) {

  try {

    await navigator.clipboard.writeText(
      name
    );

    showToast(
      "📋 Nombre copiado"
    );

  } catch {

    const textarea =
      document.createElement(
        "textarea"
      );

    textarea.value = name;

    document.body.appendChild(
      textarea
    );

    textarea.select();

    document.execCommand(
      "copy"
    );

    textarea.remove();

    showToast(
      "📋 Nombre copiado"
    );

  }

}


/* =====================================
   COMPARTIR
===================================== */

async function shareName(name) {

  const text =
    `Mirá este nombre que encontré en PiruNames: ${name}`;


  if (
    navigator.share
  ) {

    try {

      await navigator.share({
        title: "PiruNames",
        text: text
      });

    } catch {

      /* Cancelado */

    }

  } else {

    await copyName(name);

    showToast(
      "📋 Copiado para compartir"
    );

  }

}


/* =====================================
   TOAST
===================================== */

function showToast(message) {

  const toast =
    document.getElementById(
      "toast"
    );


  toast.textContent =
    message;


  toast.classList.add(
    "show"
  );


  clearTimeout(
    window.toastTimer
  );


  window.toastTimer =
    setTimeout(() => {

      toast.classList.remove(
        "show"
      );

    }, 1800);

}


/* =====================================
   SEGURIDAD HTML
===================================== */

function escapeHTML(text) {

  return String(text)
    .replace(
      /[&<>"']/g,
      character => {

        return {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;"
        }[character];

      }
    );

}


function escapeAttribute(text) {

  return String(text)
    .replace(
      /\\/g,
      "\\\\"
    )
    .replace(
      /'/g,
      "\\'"
    );

}


/* =====================================
   INICIO
===================================== */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    updateFavoriteCount();

  }
);
