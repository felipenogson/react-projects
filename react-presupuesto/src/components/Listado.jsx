import Transaction from './Transaction'
import PropTypes from 'prop-types';

const Listado = ({ transactions }) => {
	return (
		<div className='gastos-realizados'>
			<h2>Transactions</h2>

			{ transactions.map ( transaction =>  (
				<Transaction 
					key={transaction.id}
					transaction={transaction} />
			)
			)}
		</div>
	)
}

Listado.propTypes = {
	transactions: PropTypes.array.isRequired
}
export default Listado
