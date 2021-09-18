import { _productUris } from '../product.keys';

const _price = _productUris._price;

const _fGetReadByHeadquarter = (_price: string) => {
  return _price + '/price/' + _price;
};

export const fullUris = {
  _create: _price,
  _read: _price,
  _readByHeadquarter: _fGetReadByHeadquarter,
};
