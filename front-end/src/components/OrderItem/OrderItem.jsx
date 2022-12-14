import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

export default function OrderItem({
  data: { id, status, saleDate, totalPrice },
}) {
  const history = useHistory();

  const handleRedirect = () => {
    history.push(`/customer/orders/${id}`);
  };

  return (
    <button type="button" onClick={ handleRedirect }>
      <span data-testid={ `customer_orders__element-order-id-${id}` }>{id}</span>
      <span data-testid={ `customer_orders__element-order-date-${id}` }>
        {moment(saleDate).format('DD/MM/YYYY')}
      </span>
      <span data-testid={ `customer_orders__element-delivery-status-${id}` }>
        {status}
      </span>
      <span data-testid={ `customer_orders__element-card-price-${id}` }>
        {totalPrice.replace('.', ',')}
      </span>
    </button>
  );
}

OrderItem.propTypes = {
  data: PropTypes.obj,
}.isRequired;
