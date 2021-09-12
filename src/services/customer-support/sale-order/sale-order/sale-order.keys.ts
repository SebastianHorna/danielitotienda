import { _saleOrderUris } from '../sale-order.keys';

const _saleOrderURI = _saleOrderUris._saleOrder;

export const fullUris = {
  _create: _saleOrderURI,
  _take: _saleOrderURI + '/take',
  _nonPaid: _saleOrderURI + '/nonPaid',
  _collect: _saleOrderURI + '/collect',
  _paid: _saleOrderURI + '/paid',
  _read: _saleOrderURI,
};
