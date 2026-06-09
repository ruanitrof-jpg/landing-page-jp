export class DOMAdapter {
  constructor(cartDomain) {
    this.cartDomain = cartDomain;
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      // Mapeia todos os CTAs que possuem a classe controlada pelo JavaScript
      const actionableButtons = document.querySelectorAll('.js-cta-whatsapp');
      
      actionableButtons.forEach(button => {
        button.addEventListener('click', (event) => {
          event.preventDefault();
          
          // Dispara o fluxo da Arquitetura Hexagonal de dentro para fora
          this.cartDomain.initiateCheckout();
        });
      });
    });
  }
}