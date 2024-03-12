const formatDate = date => {
  return new Date(date).toLocaleDateString('pt-Br', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}

export default formatDate
