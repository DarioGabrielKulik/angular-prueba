export interface MercadoPago {
  response: Response;
  id: string;
  items: Item[];
  payer: Payer;
  clientId: string;
  paymentMethods: PaymentMethods;
  backUrls: BackUrls;
  shipments: Shipments;
  notificationUrl: null;
  statementDescriptor: null;
  externalReference: string;
  expires: boolean;
  dateOfExpiration: null;
  expirationDateFrom: null;
  expirationDateTo: null;
  collectorId: number;
  marketplace: string;
  marketplaceFee: number;
  additionalInfo: string;
  autoReturn: string;
  operationType: string;
  differentialPricing: null;
  processingModes: null;
  binaryMode: boolean;
  taxes: null;
  tracks: null;
  metadata: Metadata;
  initPoint: string;
  sandboxInitPoint: string;
  dateCreated: string;
}

export interface Metadata {
}

export interface Shipments {
  mode: null;
  localPickup: null;
  dimensions: null;
  defaultShippingMethod: null;
  freeMethods: null;
  cost: null;
  freeShipping: null;
  receiverAddress: ReceiverAddress;
  expressShipment: null;
}

export interface ReceiverAddress {
  zipCode: string;
  streetName: string;
  streetNumber: null;
  countryName: null;
  stateName: null;
  floor: string;
  apartment: string;
  cityName: null;
}

export interface BackUrls {
  success: string;
  pending: string;
  failure: string;
}

export interface PaymentMethods {
  excludedPaymentMethods: ExcludedPaymentMethod[];
  excludedPaymentTypes: ExcludedPaymentMethod[];
  defaultPaymentMethodId: null;
  installments: null;
  defaultInstallments: null;
}

export interface ExcludedPaymentMethod {
  id: string;
}

export interface Payer {
  name: string;
  surname: string;
  email: string;
  phone: Phone;
  identification: Identification;
  address: Address;
  dateCreated: null;
  lastPurchase: null;
}

export interface Address {
  zipCode: string;
  streetName: string;
  streetNumber: null;
}

export interface Identification {
  type: string;
  number: string;
}

export interface Phone {
  areaCode: string;
  number: string;
}

export interface Item {
  id: string;
  title: string;
  description: string;
  pictureUrl: string;
  categoryId: string;
  quantity: number;
  unitPrice: number;
  currencyId: string;
  categoryDescriptor: null;
}

interface Response {
  statusCode: number;
  headers: Headers;
  content: string;
}

export interface Headers {
  vary: string[];
  'X-Request-Id': string[];
  'Access-Control-Allow-Origin': string[];
  'X-Content-Type-Options': string[];
  'Access-Control-Allow-Methods': string[];
  Connection: string[];
  Date: string[];
  'Access-Control-Allow-Headers': string[];
  'Strict-Transport-Security': string[];
  'Timing-Allow-Origin': string[];
  'X-XSS-Protection': string[];
  'Access-Control-Max-Age': string[];
  'Content-Type': string[];
}