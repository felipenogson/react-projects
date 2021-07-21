import React from 'react'
import Article from './Article.jsx'
import PropTypes from 'prop-types';

const ListNews = ({news}) => {
	return (
		<div className="row">
			{ news.map( article => (
				<Article 
					key={article.url}
					article={article}/>
			))}
		</div>
	)
}

ListNews.propTypes = {
	news: PropTypes.array.isRequired
}

export default ListNews