class Alumno {
    constructor(nombre, apellidos, edad, materias = [], calificaciones = {}) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.edad = edad;
      this.materias = materias;
      this.calificaciones = calificaciones;
    }
  }

// JavaScript
let alumnos = [];

function agregarAlumno() {
  const nombre = document.getElementById("nombre").value;
  const apellidos = document.getElementById("apellidos").value;
  const edad = parseInt(document.getElementById("edad").value);
  
  const nuevoAlumno = new Alumno(nombre, apellidos, edad);
  alumnos.push(nuevoAlumno);
  // Luego puedes guardar el array alumnos en LocalStorage si quieres persistencia de datos.
}

// Ejemplo de función para inscribir un alumno a una clase
function inscribirMateria(alumno, materia) {
    alumno.materias.push(materia);
  }
  
  // Ejemplo de función para asignar calificaciones
  function asignarCalificacion(alumno, materia, calificacion) {
    alumno.calificaciones[materia] = calificacion;
  }
  
  // Ejemplo de función para crear grupos y asignar alumnos
  let grupo1 = [];
  let grupo2 = [];
  
  function asignarAlumnoAGrupo(alumno, grupo) {
    grupo.push(alumno);
  }

  // Ejemplo de función para buscar por nombre
function buscarPorNombre(nombre) {
    return alumnos.filter(alumno => alumno.nombre === nombre);
  }
  
  // Ejemplo de función para calcular promedio de un alumno
  function calcularPromedio(alumno) {
    const calificaciones = Object.values(alumno.calificaciones);
    const sum = calificaciones.reduce((total, calificacion) => total + calificacion, 0);
    return sum / calificaciones.length;
  }
  
  // Ejemplo de función para calcular promedio del grupo
  function calcularPromedioGrupo(grupo) {
    const totalCalificaciones = grupo.reduce((sum, alumno) => {
      const calificaciones = Object.values(alumno.calificaciones);
      return sum + calificaciones.reduce((total, calificacion) => total + calificacion, 0);
    }, 0);
    
    return totalCalificaciones / (grupo.length * Object.keys(grupo[0].calificaciones).length);
  }
  
  // Ejemplo de función para ordenar alumnos por calificación ascendente
  function ordenarAlumnosPorCalificacionAscendente() {
    return alumnos.sort((a, b) => {
      const promedioA = calcularPromedio(a);
      const promedioB = calcularPromedio(b);
      return promedioA - promedioB;
    });
  }
  
  // Ejemplo de función para ordenar alumnos por calificación descendente
  function ordenarAlumnosPorCalificacionDescendente() {
    return alumnos.sort((a, b) => {
      const promedioA = calcularPromedio(a);
      const promedioB = calcularPromedio(b);
      return promedioB - promedioA;
    });
  }

  // Ejemplo de guardar el array de alumnos en LocalStorage
localStorage.setItem('alumnos', JSON.stringify(alumnos));

// Ejemplo de obtener los alumnos almacenados en LocalStorage
const alumnosGuardados = JSON.parse(localStorage.getItem('alumnos'));
if (alumnosGuardados) {
  alumnos = alumnosGuardados;
}

