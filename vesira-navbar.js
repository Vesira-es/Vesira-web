(() => {
  "use strict";

  const HOST_ID = "vesiraNavbar";
  const NAV_ID = "vesiraGlobalNav";
  const CART_ID = "vesiraOpenCart";
  const CART_COUNT_ID = "vesiraCartCount";
  const MENU_ID = "vesiraOpenMenu";
  const DRAWER_ID = "vesiraMenuDrawer";
  const BACKDROP_ID = "vesiraMenuBackdrop";
  const CLOSE_ID = "vesiraCloseMenu";

  // ============================================================
  // ESTILOS DEL NAVBAR
  // ============================================================

  if (!document.getElementById("vesiraNavbarStyles")) {
    const style = document.createElement("style");

    style.id = "vesiraNavbarStyles";

    style.textContent = `
      #${HOST_ID} {
        display: contents;
      }

      .vesira-global-nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 74px;
        z-index: 4000;

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0 30px;

        background: rgba(10,10,10,.78);
        border-bottom: 1px solid rgba(255,255,255,.08);

        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);

        color: #fff;
        box-sizing: border-box;
      }

      /* IZQUIERDA */

      .vesira-nav-left {
        display: flex;
        align-items: center;
        gap: 12px;
        min-width: 0;
      }

      .vesira-logo-link {
        display: flex;
        align-items: center;
        min-width: 0;
        text-decoration: none;
      }

      .vesira-logo {
        width: 108px;
        height: auto;
        display: block;
      }

      .vesira-nav-eyewear {
        color: #8d8d8d;
        font-size: 9px;
        line-height: 1;
        letter-spacing: .18em;
        text-transform: uppercase;
        white-space: nowrap;
        font-family: "Outfit", Arial, sans-serif;
      }

      /* BOTONES */

      .vesira-navbar-actions {
        display: flex;
        align-items: center;
        gap: 3px;
      }

      .vesira-nav-button {
        position: relative;

        width: 40px;
        height: 40px;

        padding: 0;
        border: 0;
        border-radius: 50%;

        background: transparent;
        color: #fff;

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;

        transition:
          background .2s ease,
          transform .2s ease;
      }

      .vesira-nav-button:hover {
        background: #151515;
        transform: translateY(-1px);
      }

      .vesira-nav-button .material-symbols-outlined {
        font-size: 21px;
        line-height: 1;
      }

      /* CONTADOR CARRITO */

      .vesira-cart-count {
        position: absolute;

        top: 1px;
        right: -2px;

        min-width: 17px;
        height: 17px;

        padding: 0 4px;

        display: none;
        align-items: center;
        justify-content: center;

        border-radius: 999px;

        background: #fff;
        color: #0a0a0a;

        font-family: "Outfit", Arial, sans-serif;

        font-size: 8px;
        font-weight: 700;

        line-height: 17px;
        letter-spacing: 0;

        box-shadow: 0 3px 12px rgba(0,0,0,.28);

        pointer-events: none;
      }

      .vesira-cart-count.bump {
        animation: vesiraCartBump .34s ease;
      }

      @keyframes vesiraCartBump {
        0% {
          transform: scale(1);
        }

        35% {
          transform: scale(1.32);
        }

        65% {
          transform: scale(.94);
        }

        100% {
          transform: scale(1);
        }
      }

      /* FONDO DEL MENÚ */

      .vesira-menu-backdrop {
        position: fixed;
        inset: 0;

        z-index: 4100;

        background: rgba(0,0,0,.48);

        opacity: 0;
        visibility: hidden;
        pointer-events: none;

        transition:
          opacity .28s ease,
          visibility .28s ease;
      }

      .vesira-menu-backdrop.open {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
      }

      /* MENÚ LATERAL */

      .vesira-menu-drawer {
        position: fixed;

        top: 0;
        right: 0;

        width: min(360px,84vw);
        height: 100dvh;

        z-index: 4200;

        padding: 112px 34px 36px;

        background: #111;

        border-left: 1px solid rgba(255,255,255,.10);

        box-shadow: -24px 0 70px rgba(0,0,0,.34);

        transform: translateX(100%);

        transition:
          transform .46s cubic-bezier(.2,.8,.2,1);

        display: flex;
        flex-direction: column;

        box-sizing: border-box;
      }

      .vesira-menu-drawer.open {
        transform: translateX(0);
      }

      /* CERRAR */

      .vesira-menu-close {
        position: absolute;

        top: 20px;
        right: 20px;

        width: 40px;
        height: 40px;

        padding: 0;

        border: 0;
        border-radius: 50%;

        background: transparent;
        color: #fff;

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;
      }

      .vesira-menu-close:hover {
        background: #191919;
      }

      .vesira-menu-close .material-symbols-outlined {
        font-size: 22px;
      }

      /* ENLACES */

      .vesira-menu-links {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        gap: 8px;

        margin-top: 8px;
      }

      .vesira-menu-link {
        color: #fff;

        font-family:
          "Bricolage Grotesque",
          Arial,
          sans-serif;

        font-size: clamp(54px,7vw,82px);

        font-weight: 400;
        line-height: .86;

        letter-spacing: -.045em;

        text-transform: uppercase;
        text-decoration: none;

        padding: 2px 0;

        transition:
          transform .25s ease,
          opacity .25s ease;
      }

      .vesira-menu-link:hover {
        transform: translateX(8px);
        opacity: .68;
      }

      .vesira-menu-link.hidden {
        display: none;
      }

      /* MÓVIL */

      @media (max-width: 700px) {

        .vesira-global-nav {
          height: 68px;
          padding: 0 18px;
        }

        .vesira-logo {
          width: 94px;
        }

        .vesira-nav-left {
          gap: 9px;
        }

        .vesira-nav-eyewear {
          font-size: 8px;
        }

        .vesira-nav-button {
          width: 35px;
          height: 35px;
        }

        .vesira-cart-count {
          top: -1px;
          right: -3px;

          min-width: 16px;
          height: 16px;

          font-size: 7.5px;
          line-height: 16px;
        }

        .vesira-menu-drawer {
          width: min(340px,88vw);
          padding: 100px 24px 30px;
        }

        .vesira-menu-link {
          font-size: 58px;
        }
      }

      @media (max-width: 380px) {

        .vesira-logo {
          width: 90px;
        }

        .vesira-nav-eyewear {
          font-size: 7px;
          letter-spacing: .13em;
        }
      }
    `;

    document.head.appendChild(style);
  }

  // ============================================================
  // CARRITO
  // ============================================================

  function getCart() {
    try {
      const cart = JSON.parse(
        localStorage.getItem("vesiraCarrito") || "[]"
      );

      return Array.isArray(cart) ? cart : [];

    } catch {
      return [];
    }
  }

  function getCartUnits() {
    return getCart().reduce(
      (sum, item) =>
        sum + Math.max(
          0,
          Number(item?.cantidad || 0)
        ),
      0
    );
  }

  function updateBadge() {
    const badge =
      document.getElementById(CART_COUNT_ID);

    if (!badge) return;

    const total = getCartUnits();

    if (total <= 0) {
      badge.style.display = "none";
      badge.textContent = "0";
      return;
    }

    badge.textContent =
      total > 99
        ? "99+"
        : String(total);

    badge.style.display = "flex";
  }

  function bumpBadge() {
    const badge =
      document.getElementById(CART_COUNT_ID);

    if (!badge) return;

    badge.classList.remove("bump");

    void badge.offsetWidth;

    badge.classList.add("bump");
  }

  // ============================================================
  // MENÚ
  // ============================================================

  function openMenu() {
    const drawer =
      document.getElementById(DRAWER_ID);

    const backdrop =
      document.getElementById(BACKDROP_ID);

    if (!drawer || !backdrop) return;

    drawer.classList.add("open");
    backdrop.classList.add("open");

    drawer.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    const drawer =
      document.getElementById(DRAWER_ID);

    const backdrop =
      document.getElementById(BACKDROP_ID);

    if (!drawer || !backdrop) return;

    drawer.classList.remove("open");
    backdrop.classList.remove("open");

    drawer.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.style.overflow = "";
  }

  // ============================================================
  // CREAR CONTENEDOR
  // ============================================================

  function getOrCreateHost() {

    let host =
      document.getElementById(HOST_ID);

    if (!host) {

      host =
        document.createElement("div");

      host.id = HOST_ID;

      document.body.insertBefore(
        host,
        document.body.firstChild
      );
    }

    return host;
  }

  // ============================================================
  // CREAR NAVBAR
  // ============================================================

  function buildNavbar() {

    // Evita crear dos navbars
    if (
      document.getElementById(NAV_ID)
    ) {
      return;
    }

    const host =
      getOrCreateHost();

    host.innerHTML = `

      <nav
        class="vesira-global-nav"
        id="${NAV_ID}"
        aria-label="Navegación principal"
      >

        <!-- IZQUIERDA -->

        <div class="vesira-nav-left">

          <a
            class="vesira-logo-link"
            href="index.html"
            aria-label="Ir al inicio"
          >

            <img
              src="img/logo2.png"
              class="vesira-logo"
              alt="Vesira"
            >

          </a>

          <span class="vesira-nav-eyewear">
            EYEWEAR
          </span>

        </div>


        <!-- DERECHA -->

        <div class="vesira-navbar-actions">

          <!-- CARRITO -->

          <button
            class="vesira-nav-button"
            id="${CART_ID}"
            type="button"
            aria-label="Carrito"
            title="Carrito"
          >

            <span class="material-symbols-outlined">
              shopping_bag
            </span>

            <span
              class="vesira-cart-count"
              id="${CART_COUNT_ID}"
              aria-hidden="true"
            >
              0
            </span>

          </button>


          <!-- MENÚ -->

          <button
            class="vesira-nav-button"
            id="${MENU_ID}"
            type="button"
            aria-label="Abrir menú"
            title="Menú"
          >

            <span class="material-symbols-outlined">
              menu
            </span>

          </button>

        </div>

      </nav>


      <!-- OSCURECER FONDO -->

      <div
        class="vesira-menu-backdrop"
        id="${BACKDROP_ID}"
      ></div>


      <!-- MENÚ LATERAL -->

      <aside
        class="vesira-menu-drawer"
        id="${DRAWER_ID}"
        aria-hidden="true"
      >

        <!-- BOTÓN CERRAR -->

        <button
          class="vesira-menu-close"
          id="${CLOSE_ID}"
          type="button"
          aria-label="Cerrar menú"
          title="Cerrar"
        >

          <span class="material-symbols-outlined">
            close
          </span>

        </button>


        <!-- ENLACES -->

        <nav
          class="vesira-menu-links"
          aria-label="Menú"
        >

          <a
            class="vesira-menu-link"
            href="index.html"
            id="vesiraMenuInicio"
          >
            Inicio
          </a>

          <a
            class="vesira-menu-link"
            href="contacto.html"
          >
            Contacto
          </a>

        </nav>

      </aside>
    `;
  }

  // ============================================================
  // EVENTOS
  // ============================================================

  function bindEvents() {

    const cartButton =
      document.getElementById(CART_ID);

    const menuButton =
      document.getElementById(MENU_ID);

    const closeButton =
      document.getElementById(CLOSE_ID);

    const backdrop =
      document.getElementById(BACKDROP_ID);


    // CARRITO

    if (
      cartButton &&
      !cartButton.dataset.bound
    ) {

      cartButton.dataset.bound = "1";

      cartButton.addEventListener(
        "click",
        () => {
          window.location.href =
            "carrito.html";
        }
      );
    }


    // ABRIR MENÚ

    if (
      menuButton &&
      !menuButton.dataset.bound
    ) {

      menuButton.dataset.bound = "1";

      menuButton.addEventListener(
        "click",
        openMenu
      );
    }


    // CERRAR MENÚ

    if (
      closeButton &&
      !closeButton.dataset.bound
    ) {

      closeButton.dataset.bound = "1";

      closeButton.addEventListener(
        "click",
        closeMenu
      );
    }


    // CERRAR HACIENDO CLICK FUERA

    if (
      backdrop &&
      !backdrop.dataset.bound
    ) {

      backdrop.dataset.bound = "1";

      backdrop.addEventListener(
        "click",
        closeMenu
      );
    }


    // ESC PARA CERRAR

    if (
      !document.body.dataset
        .vesiraEscapeBound
    ) {

      document.body.dataset
        .vesiraEscapeBound = "1";

      document.addEventListener(
        "keydown",
        event => {

          if (event.key === "Escape") {
            closeMenu();
          }

        }
      );
    }


    // OCULTAR "INICIO" CUANDO YA ESTAMOS EN INICIO

    const currentFile =
      window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    if (
      currentFile === "" ||
      currentFile === "index.html" ||
      currentFile.startsWith("index_")
    ) {

      document
        .getElementById("vesiraMenuInicio")
        ?.classList
        .add("hidden");
    }
  }

  // ============================================================
  // INICIALIZACIÓN
  // ============================================================

  function init() {

    buildNavbar();

    bindEvents();

    updateBadge();

    window.dispatchEvent(
      new CustomEvent(
        "vesiraNavbarReady"
      )
    );
  }

  // ============================================================
  // ACTUALIZACIÓN DEL CARRITO
  // ============================================================

  window.addEventListener(
    "storage",
    updateBadge
  );

  window.addEventListener(
    "vesiraCartUpdated",
    event => {

      updateBadge();

      if (
        event?.detail?.bump
      ) {
        bumpBadge();
      }
    }
  );


  // ============================================================
  // API PÚBLICA
  // ============================================================

  window.vesiraNavbar = {

    getCart,
    getCartUnits,
    updateBadge,
    bumpBadge,
    openMenu,
    closeMenu,
    init

  };


  // ============================================================
  // ARRANQUE
  // ============================================================

  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      init,
      { once: true }
    );

  } else {

    init();

  }

})();