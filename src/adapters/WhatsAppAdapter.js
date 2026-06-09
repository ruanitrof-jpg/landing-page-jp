import { MessagePort } from '../ports/MessagePort.js';

export class WhatsAppAdapter extends MessagePort {
  constructor(phoneNumber) {
    super();
    this.phoneNumber = phoneNumber; 
  }

  sendMessage(message) {
    const encodedText = encodeURIComponent(message);
    const apiUri = `https://wa.me/${this.phoneNumber}?text=${encodedText}`;
    window.open(apiUri, '_blank', 'noopener,noreferrer');
  }
}