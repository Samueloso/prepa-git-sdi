const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const datos = [1, 2, 3];

    if (datos.length > 0) {
      resolve(`Los datos son ${datos}`);
    } else {
      reject("No hay datos");
    }
  }, 3000);
});

promise
  .then((response) => {
    console.log("Respuesta", response);
  })
  .catch((error) => {
    console.log("Error", error);
  });
