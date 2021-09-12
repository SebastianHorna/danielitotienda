import { _saleOrderUris } from '../sale-order.keys';

const _detailSaleOrder = _saleOrderUris._detailSaleOrder;

export const fullUris = {
  _create: _detailSaleOrder,
  _update: _detailSaleOrder,
  _readById: _detailSaleOrder + '/',
};
