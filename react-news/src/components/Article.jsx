import React from 'react';
import HtmlParser from 'react-html-parser';
// import powerWords from './powerwords.json';

const Article = ({article}) => {

	// extracting the data
	const { urlToImage, url, title, description, source} = article;

	var hl_description = description

	// powerWords.forEach( word => (
	// 	hl_description = hl_description.replace( word, `<strong>${word}</strong>`)
	// ))

	return (
		<div className="col s12 m6 l4">
			<div className="card">
				<div className="card-image">
				<img src={urlToImage} alt={title} />
				<span>{source.name}</span>
				</div>

				<div className="card-content">
					<h5>{title}</h5>
					<p>{ HtmlParser(hl_description)}</p>
				</div>
				<div className="card-action">
					<a 
						href={url} 
						target="_blank" 
						rel="noopener noreferrer" 
						className="waves-efect waves-light btn">
							Go to Site

						</a>
				</div>
			</div>
		</div>
	)
}

export default Article
