import type { Schema, Struct } from '@strapi/strapi';

export interface ProductAvailableSizes extends Struct.ComponentSchema {
  collectionName: 'components_product_available_sizes';
  info: {
    description: '';
    displayName: 'Available Sizes';
    icon: 'scissors';
  };
  attributes: {
    color: Schema.Attribute.Component<'product.color', true>;
    discountedPrice: Schema.Attribute.Integer;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    quantity: Schema.Attribute.Integer;
    review: Schema.Attribute.Component<'product.review', true>;
    size: Schema.Attribute.String;
  };
}

export interface ProductColor extends Struct.ComponentSchema {
  collectionName: 'components_product_colors';
  info: {
    description: '';
    displayName: 'Color';
    icon: 'brush';
  };
  attributes: {
    color: Schema.Attribute.String;
    hex: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface ProductConfigurableOptions extends Struct.ComponentSchema {
  collectionName: 'components_product_configurable_options';
  info: {
    description: '';
    displayName: 'Configurable Options';
    icon: 'cog';
  };
  attributes: {
    availableSizes: Schema.Attribute.Component<
      'product.available-sizes',
      false
    >;
    isFeatured: Schema.Attribute.Boolean;
  };
}

export interface ProductPrice extends Struct.ComponentSchema {
  collectionName: 'components_product_prices';
  info: {
    displayName: 'price';
    icon: 'priceTag';
  };
  attributes: {
    discount: Schema.Attribute.Integer;
    discounted: Schema.Attribute.Integer;
    regular: Schema.Attribute.Integer;
  };
}

export interface ProductReview extends Struct.ComponentSchema {
  collectionName: 'components_product_reviews';
  info: {
    displayName: 'Review';
    icon: 'check';
  };
  attributes: {
    description: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    rating: Schema.Attribute.Decimal;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.available-sizes': ProductAvailableSizes;
      'product.color': ProductColor;
      'product.configurable-options': ProductConfigurableOptions;
      'product.price': ProductPrice;
      'product.review': ProductReview;
    }
  }
}
