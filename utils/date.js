export function getDateLabel(dateStr) {
  const date = new Date(dateStr);

  const year = date.toLocaleDateString("pt-BR", { year: "numeric" });
  let month = date.toLocaleDateString("pt-BR", { month: "long" });
  month = month.charAt(0).toUpperCase() + month.slice(1);

  return `${month} de ${year}`;
}
