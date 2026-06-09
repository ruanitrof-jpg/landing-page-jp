import { WhatsAppAdapter } from './adapters/WhatsAppAdapter.js';
import { LocalStorageAdapter } from './adapters/LocalStorageAdapter.js';
import { CartDomain } from './core/CartDomain.js';
import { DOMAdapter } from './adapters/DOMAdapter.js';

// 1. Instanciando a nossa Infraestrutura (Adapters)
// Nota: Substitua o número abaixo pelo WhatsApp oficial da Juliana Prado se necessário
const whatsappService = new WhatsAppAdapter('5543999999999'); 
const storageService = new LocalStorageAdapter();

// 2. Inversão de Dependência: Injetando os serviços utilitários dentro do Core
const businessLogic = new CartDomain(whatsappService, storageService);

// 3. Inicializando nossa interface e ligando os escutadores do DOM
const interfaceUser = new DOMAdapter(businessLogic);
interfaceUser.init();

console.log('🚀 [Ronin Hexagonal] Landing Page Juliana Prado carregada com total separação de conceitos!');