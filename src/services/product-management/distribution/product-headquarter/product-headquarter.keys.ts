import { _distributionUris } from '../distribution.keys';

const _productHUri = _distributionUris._productHeadquarter;

const _fGetReadByBrandCategorySize = (
  _headquarter: string,
  _brand: string,
  _category: string,
  _size: string
) => {
  return (
    _productHUri +
    '/readByBrandCategorySize/' +
    _headquarter +
    '/' +
    _brand +
    '/' +
    _category +
    '/' +
    _size
  );
};

export const fullUris = {
  _create: _productHUri,
  _readByBrandCategorySize: _fGetReadByBrandCategorySize,
  _read: _productHUri,
  _readFull: _productHUri + '/full/',
};
