export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  const formattedDate = date.toLocaleDateString('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const [day, month, year] = formattedDate.split(' de ');
  const finalDate = `${day} de ${month}, ${year}`;

  return finalDate;
};
