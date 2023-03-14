const demonSlayerApi = 'http://localhost:8080/api/personajes';
const formulario = document.getElementById('buscapersonaje');
const soloLetrasYNumeros = /^[a-zA-Z0-9\s]*$/; 
const txtInput = document.getElementById("personaje");
const res=document.getElementById("resultados");
res.style.display="none";



fetch(demonSlayerApi)
  .then(response => response.json())
  .then(data => {
    const dataarray = data.map(item => {
      return {
        id: item.id,
        nombre: item.nombre,
        alías: item.alías,
        afiliacion: item.afiliacion,
        familia: item.familia,
        edad: item.edad,
        genero: item.genero,
        especie: item.especie,
        ocupacion: item.ocupacion,
        estilocombate: item.estilocombate,
        imagen: item.imagen
      };
    });
    
    formulario.addEventListener("submit", (event) => {
      try{
        let txtPersonaje = txtInput.value.toLowerCase();
        if (!soloLetrasYNumeros.test(txtPersonaje)) {
          const c_noPermitidos = txtPersonaje.match(/[^\w\s]/gi);
          txtInput.value = txtPersonaje.replace(/[^\w\s]/gi, "").toLowerCase();
          alert(`Se removieron caracteres no permitidos ${c_noPermitidos}`);
        }
      console.log(txtInput.value);
      if (txtInput.value === "") {
        alert("No ingresó ningún personaje para buscar");
        event.preventDefault();
      } else {
        res.style.display="inline-block";
        const personaje = dataarray.find(item => item.nombre.toLowerCase().includes(txtInput.value));
        if (personaje) {
          actualizarResultado(personaje);
        } else {
          res.style.display="inline-block";
          const resultados = document.getElementById('resultados');
          resultados.classList.add('d-none');
          alert('Personaje no encontrado');
          event.preventDefault();
        }
      }
    } catch (error) {
      console.log("Se produjo un error: " + error.message);
    } finally {
      event.preventDefault();
    }
    });
  })
  .catch(error => console.error(error));
function actualizarResultado(personaje) {
  const imagen = document.getElementById('imagen');
  imagen.src = personaje.imagen;
  const nombre = document.getElementById('nombre');
  nombre.textContent = personaje.nombre;
  const alias = document.getElementById('alias');
  alias.textContent = `Alias: ${personaje.alías}`;
  const afiliacion = document.getElementById('afiliacion');
  afiliacion.textContent = `Afiliación: ${personaje.afiliacion}`;
  const familia = document.getElementById('familia');
  familia.textContent = `Familia: ${personaje.familia}`;
  const edad = document.getElementById('edad');
  edad.textContent = `Edad: ${personaje.edad}`;
  const genero = document.getElementById('genero');
  genero.textContent = `Género: ${personaje.genero}`;
  const especie = document.getElementById('especie');
  especie.textContent = `Especie: ${personaje.especie}`;
  const ocupacion = document.getElementById('ocupacion');
  ocupacion.textContent = `Ocupación: ${personaje.ocupacion}`;
  const estilocombate = document.getElementById('estilocombate');
  estilocombate.textContent = `Estilo de combate: ${personaje.estilocombate}`;
  const resultados = document.getElementById('resultados');
  resultados.classList.remove('d-none');
}




   
    
