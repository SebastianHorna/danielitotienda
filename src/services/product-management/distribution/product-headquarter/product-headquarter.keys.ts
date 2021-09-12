import { _distributionUris } from '../distribution.keys';

const _productH = _distributionUris._productHeadquarter;

export const fullUris = {
  _create: _productH,
  _read: _productH,
  _readFull: _productH+'/full/',
};
