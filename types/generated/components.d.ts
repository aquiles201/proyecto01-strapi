import type { Schema, Attribute } from '@strapi/strapi';

export interface DemoPruebaComponente extends Schema.Component {
  collectionName: 'components_demo_prueba_componentes';
  info: {
    displayName: 'PruebaComponente';
    icon: 'key';
  };
  attributes: {
    IDTO: Attribute.String & Attribute.Required & Attribute.Unique;
    Nombre: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'demo.prueba-componente': DemoPruebaComponente;
    }
  }
}
