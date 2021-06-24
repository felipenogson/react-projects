import PropTypes from 'prop-types';

const Transaction = ({transaction}) => {
	return (
		<li key={transaction.id}>
			<p>
				{ transaction.name}
				<span className="gasto">$ {transaction.ammount } </span>

			</p>
		</li>
	)
}

Transaction.propTypes = {
	transaction: PropTypes.object.isRequired
}

export default Transaction
