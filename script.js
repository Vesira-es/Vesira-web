console.log("SCRIPT.JS EMPEZÓ");

const normal = document.querySelector(".normal");
const buscar = document.querySelector(".buscar");
const iconos = document.querySelector(".iconos");
const IA = document.getElementById("botonIA");

let iaActiva = false;


document.getElementById("abrirBusqueda").addEventListener("click",()=>{

    normal.style.display = "none";
    iconos.style.display = "none";
    buscar.style.display = "flex";

    buscar.querySelector("input").focus();

});


document.getElementById("cerrarBusqueda").addEventListener("click",()=>{

    buscar.style.display = "none";
    normal.style.display = "flex";
    iconos.style.display = "flex";

});



const input = document.querySelector(".buscar input");
IA.addEventListener("click",()=>{

    iaActiva = !iaActiva;

    if(iaActiva){

        IA.classList.add("IA-activa");
        input.placeholder = "Pregúntale a la IA";

    } else {

        IA.classList.remove("IA-activa");
        input.placeholder = "¿Qué estás buscando?";

    }

});

const intro = document.querySelector(".intro");
const navbar = document.querySelector(".barra-navegacion");

setTimeout(()=>{

    intro.style.display = "none";

    navbar.style.opacity = "1";
    navbar.style.transform = "translateY(0)";

},1500);


// COLECCIONES
const slides = document.querySelectorAll(".slide");
const flechaIzquierda = document.querySelector(".flecha-izquierda");
const flechaDerecha = document.querySelector(".flecha-derecha");
let actual = 0;
let animando = false;

function cambiarSlide(direccion = 1){

    if(animando) return;

    animando = true;

    const anterior = slides[actual];

    actual += direccion;

    if(actual < 0){
        actual = slides.length - 1;
    }

    if(actual >= slides.length){
        actual = 0;
    }

    const siguiente = slides[actual];

    // Preparamos la siguiente
    siguiente.classList.add("activa");
    siguiente.style.transition = "none";
    siguiente.style.transform = "translateX(100%)";

    anterior.style.zIndex = 3;
    siguiente.style.zIndex = 2;

    requestAnimationFrame(()=>{

        siguiente.style.transition = "";

        anterior.style.transform = "translateX(-100%)";
        siguiente.style.transform = "translateX(0)";

    });

    anterior.addEventListener("transitionend",(e)=>{

        if(e.propertyName !== "transform") return;

        anterior.classList.remove("activa");

        anterior.style.transform = "";
        anterior.style.zIndex = "";

        siguiente.style.transform = "";
        siguiente.style.zIndex = "";

        animando = false;

    },{
        once:true
    });

}

setInterval(cambiarSlide,4000);
flechaDerecha.addEventListener("click",()=>{

    cambiarSlide(1);

});

flechaIzquierda.addEventListener("click",()=>{

    cambiarSlide(-1);

});
// FIN COLECCIONES

// SELECTOR MARCA Y MODELO

const selectorMarca = document.getElementById("selectorMarca");
const selectorModelo = document.getElementById("selectorModelo");

const cabeceraMarca = selectorMarca.querySelector(".selector-marca-cabecera");
const cabeceraModelo = selectorModelo.querySelector(".selector-modelo-cabecera");

const textoMarca = document.getElementById("textoMarca");
const textoModelo = document.getElementById("textoModelo");

const listaMarcas = selectorMarca.querySelector(".selector-marca-opciones");
const listaModelos = selectorModelo.querySelector(".selector-modelo-opciones");


// ABRIR / CERRAR MARCA
console.log("LLEGUÉ AL SELECTOR");
cabeceraMarca.addEventListener("click", () => {

    selectorMarca.classList.toggle("abierto");

});


// ABRIR / CERRAR MODELO

cabeceraModelo.addEventListener("click", () => {

    if (selectorModelo.classList.contains("desactivado")) return;

    selectorModelo.classList.toggle("abierto");

});


// CARGAR MARCAS DESDE SUPABASE

async function cargarMarcas() {

    const { data, error } = await supabaseClient
        .from("Marcas")
        .select("id, nombre")
        .eq("activo", true)
        .order("nombre");

    if (error) {

        console.error("Error cargando marcas:", error);

        return;
    }

    listaMarcas.innerHTML = "";

    data.forEach(marca => {

        const opcion = document.createElement("div");

        opcion.className = "opcion-marca";

        opcion.textContent = marca.nombre;

        opcion.addEventListener("click", () => {

            textoMarca.textContent = marca.nombre;

            localStorage.setItem("marca", marca.nombre);
            localStorage.setItem("marca_id", marca.id);

            selectorMarca.classList.remove("abierto");

            selectorModelo.classList.remove("desactivado");

            textoModelo.textContent = "Modelo";

            localStorage.removeItem("modelo");
            localStorage.removeItem("modelo_id");

            listaModelos.innerHTML = "";

            cargarModelos(marca.id);

        });

        listaMarcas.appendChild(opcion);

    });

}


// CARGAR MODELOS DESDE SUPABASE

async function cargarModelos(marcaId) {

    const { data, error } = await supabaseClient
        .from("Modelos")
        .select("id, nombre")
        .eq("marca_id", marcaId)
        .eq("activo", true)
        .order("nombre");

    if (error) {

        console.error("Error cargando modelos:", error);

        return;
    }

    listaModelos.innerHTML = "";

    data.forEach(modelo => {

        const opcion = document.createElement("div");

        opcion.className = "opcion-modelo";

        opcion.textContent = modelo.nombre;

        opcion.addEventListener("click", () => {

            textoModelo.textContent = modelo.nombre;

            localStorage.setItem("modelo", modelo.nombre);
            localStorage.setItem("modelo_id", modelo.id);

            selectorModelo.classList.remove("abierto");

        });

        listaModelos.appendChild(opcion);

    });

}


// CARGAR MARCAS AL ABRIR LA PÁGINA

cargarMarcas();


// CERRAR AL PULSAR FUERA

document.addEventListener("click", (e) => {

    if (!selectorMarca.contains(e.target)) {

        selectorMarca.classList.remove("abierto");

    }

    if (!selectorModelo.contains(e.target)) {

        selectorModelo.classList.remove("abierto");

    }

});


// RECUPERAR DISPOSITIVO GUARDADO

const marcaGuardada = localStorage.getItem("marca");
const marcaIdGuardada = localStorage.getItem("marca_id");
const modeloGuardado = localStorage.getItem("modelo");

if (marcaGuardada && marcaIdGuardada) {

    textoMarca.textContent = marcaGuardada;

    selectorModelo.classList.remove("desactivado");

    cargarModelos(marcaIdGuardada);

}

if (modeloGuardado) {

    textoModelo.textContent = modeloGuardado;

}
localStorage.getItem("marca")
localStorage.getItem("marca_id")
localStorage.getItem("modelo")
localStorage.getItem("modelo_id")