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

  // Mostrar los detalles con id "resultado"
  document.getElementById("resultado").innerText =
    `Importe solicitado: ${importe}\n` +
    `Porcentaje de interés: ${interes}%\n` +
    `Periodo: ${periodo} meses\n` +
    `Importe total a pagar: ${importeTotal}\n` +
    `Cuota mensual: ${cuotaMensual}`;
}
