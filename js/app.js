let historialPrestamos = [];

function calcularPrestamo() {
  // Obtener valores de los inputs
  const importe = parseFloat(document.getElementById("importe").value);
  const interes = parseFloat(document.getElementById("interes").value);
  const periodo = parseInt(document.getElementById("periodo").value, 10);

  // Validar que los valores sean válidos
  if (
    isNaN(importe) ||
    importe <= 0 ||
    isNaN(interes) ||
    interes < 0 ||
    isNaN(periodo) ||
    periodo <= 0
  ) {
    document.getElementById("resultado").innerText =
      "Por favor, ingrese valores válidos.";
    return;
  }

  // Calcular el importe total con interés y la cuota mensual
  const importeTotal = parseFloat(
    (importe + (importe * interes) / 100).toFixed(2)
  );
  const cuotaMensual = parseFloat((importeTotal / periodo).toFixed(2));

  historialPrestamos.push({
    importe,
    interes,
    periodo,
    importeTotal,
    cuotaMensual,
  });

  // Mostrar los detalles con id "resultado"
  document.getElementById("resultado").innerText =
    `Importe solicitado: ${importe}\n` +
    `Porcentaje de interés: ${interes}%\n` +
    `Periodo: ${periodo} meses\n` +
    `Importe total a pagar: ${importeTotal}\n` +
    `Cuota mensual: ${cuotaMensual}`;

  actualizarHistorial();

  function actualizarHistorial() {
    const historialList = document.getElementById("historial");
    historialList.innerHTML = ""; // Limpiar historial


		historialPrestamos.forEach((prestamo, index) => {
      const div = document.createElement("div");
			div.classList.add("prestamo-item");

			const h4 = document.createElement("h4");
			h4.textContent = `Préstamo ${index + 1}:`;
			div.appendChild(h4);

			const ul = document.createElement("ul");

			const li1 = document.createElement("li");
			li1.textContent = `Importe: ${prestamo.importe}`;
			ul.appendChild(li1);

			const li2 = document.createElement("li");
			li2.textContent = `Interés: ${prestamo.interes}%`;
			ul.appendChild(li2);

			const li3 = document.createElement("li");
			li3.textContent = `Periodo: ${prestamo.periodo} meses`;
			ul.appendChild(li3);

			const li4 = document.createElement("li");
			li4.textContent = `Importe total a pagar: ${prestamo.importeTotal}`;
			ul.appendChild(li4);

			const li5 = document.createElement("li");
			li5.textContent = `Cuota mensual: ${prestamo.cuotaMensual}`;
			ul.appendChild(li5);

			div.appendChild(ul);

			historialList.appendChild(div);
    });

  }
}
