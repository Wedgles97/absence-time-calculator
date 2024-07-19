function calcAbsencePeriod() {
  const initialDate = new Date(document.getElementById("initialDate").value);
  const quantMonths = parseInt(document.getElementById("quantMonths").value);

  if (
    isNaN(initialDate.getTime()) ||
    isNaN(quantMonths) ||
    quantMonths < 1 ||
    quantMonths > 6
  ) {
    alert(
      "Por favor, preencha todos os campos corretamente. A quantidade de meses deve ser entre 1 e 6."
    );
    return;
  }

  const finaleDate = new Date(initialDate);
  finaleDate.setMonth(finaleDate.getMonth() + quantMonths);

  const differenceDays = Math.ceil(
    (finaleDate - initialDate) / (1000 * 60 * 60 * 24)
  );
  const differenceWeeks = Math.floor(differenceDays / 7);
  const differenceMonths = quantMonths;
  const differenceYears = Math.floor(differenceDays / 365);

  const formatDate = (data) =>
    data.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

  document.getElementById("resultDays").innerText = differenceDays;
  document.getElementById("resultWeeks").innerText = differenceWeeks;
  document.getElementById("resultMonths").innerText = differenceMonths;
  document.getElementById("resultYears").innerText = differenceYears;
  document.getElementById("finaleDate").innerText = formatDate(finaleDate);

  const daysWeek = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  const dayWeekFinale = daysWeek[finaleDate.getDay()];
  document.getElementById("daysWeek").innerText = dayWeekFinale;
}
