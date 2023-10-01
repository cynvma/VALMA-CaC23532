const formValidator = () => {
    let name = document.getElementById("nombre").value;
    let surname = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let comments = document.getElementById("consultas").value;
  
    let errorName = document.getElementById("errorNombre");
    let errorSurname = document.getElementById("errorApellido");
    let errorEmail = document.getElementById("errorEmail");
    let errorComments = document.getElementById("errorConsultas");
  
    errorName.textContent = "";
    errorSurname.textContent = "";
    errorEmail.textContent = "";
    errorComments.textContent = "";
  
    let isValid = true;
  
    if (name === "") {
      errorName.textContent = "El campo Nombre es obligatorio.";
      isValid = false;
    }
    if (surname === "") {
      errorSurname.textContent = "El campo Apellido es obligatorio."; 
      isValid = false;
    }
    if (email === "") {
      errorEmail.textContent = "El campo Email es obligatorio."; 
      isValid = false;
    } else {
      let emailRegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      if (!emailRegExp.test(email)) {
        errorEmail.textContent = "El formato del Email no es válido.";
        isValid = false;
      }
    }
    if (comments === "") {
      errorComments.textContent = "El campo Consultas es obligatorio."; 
      isValid = false;
    }
  
    return isValid;
  };
  
  