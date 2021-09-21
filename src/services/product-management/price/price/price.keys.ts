import { _productUris } from '../price.keys';

const _price = _productUris._price;

const _fGetFullPricesByIdProduct = (_idProduct: string) => {
  return _price + '/readFullPricesByIdProduct/' + _idProduct;
};

export const fullUris = {
  _create: _price,
  _read: _price,
  _FullPricesByIdProduct: _fGetFullPricesByIdProduct,
};
