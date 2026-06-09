export class CartDomain {
  constructor(messagePort, storagePort) {
    this.messagePort = messagePort;
    this.storagePort = storagePort;
    this.planName = "Plano Inicial - Revendedora JP";
    this.investmentValue = 1500;
  }

  initiateCheckout() {
    // 1. Regra de Negócio: Montagem semântica e limpa do texto para o WhatsApp
    const textMessage = `Olá! Vi o programa ${this.planName} (Investimento: R$ ${this.investmentValue}) na Landing Page e gostaria de receber mais informações sobre como começar!`;
    
    // 2. Regra de Negócio: Guardar no LocalStorage a data do último clique
    this.storagePort.save('jp_last_interaction', {
      date: new Date().toISOString(),
      plan: this.planName
    });
    
    // 3. Comunicação disparada através da porta de mensagem externa
    this.messagePort.sendMessage(textMessage);
  }
}