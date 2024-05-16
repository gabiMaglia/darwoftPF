export const formatInitialDate = (date) => {
  if (!date) return '';
  const d = new Date(Date.UTC(
    new Date(date).getUTCFullYear(),
    new Date(date).getUTCMonth(),
    new Date(date).getUTCDate()
  ));

  if (isNaN(d)) return '';

  const year = d.getUTCFullYear();
  const month = (d.getUTCMonth() + 1).toString().padStart(2, '0');
  const day = d.getUTCDate().toString().padStart(2, '0');

  return [year, month, day].join('-');
};

export const formatInitialDateToShow = (date) => {
  if (!date) return '';
  const d = new Date(Date.UTC(
    new Date(date).getUTCFullYear(),
    new Date(date).getUTCMonth(),
    new Date(date).getUTCDate()
  ));

  if (isNaN(d)) return '';

  const day = d.getUTCDate().toString().padStart(2, '0');
  const month = (d.getUTCMonth() + 1).toString().padStart(2, '0');
  const year = d.getUTCFullYear();

  return [day, month, year].join('-');
};
