export const handleButtonCTAClick = () => {
  const mensagemPredefinida = encodeURIComponent('Olá, estou interessado em agendar um horário. Como posso fazer isso?')
  window.open(`https://wa.me/5521976818468?text=${mensagemPredefinida}`, '_blank')
}