document.addEventListener('DOMContentLoaded', () => {
  // Número do WhatsApp (coloque o DDD)
  const WHATSAPP_NUMBER = "5511999999999"; 
  const DEFAULT_MESSAGE = "Olá! Gostaria de mais informações sobre o programa de revenda da Juliana Prado.";

  const whatsappButtons = document.querySelectorAll('.js-cta-whatsapp');

  whatsappButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const encodedMessage = encodeURIComponent(DEFAULT_MESSAGE);
      const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
      window.open(whatsappURL, '_blank');
    });
  });
});