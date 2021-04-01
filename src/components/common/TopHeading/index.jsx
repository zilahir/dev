import React from 'react'
import PropTypes from 'prop-types'
import LinkIcon from '@material-ui/icons/Link'
import classnames from 'classnames'

import styles from './TopHeading.module.scss'

const TopHeading = ({ slug, ...rest }) => {
	const { level, node } = rest

	/**
	 *
	 *
	 * @param {number} depth which tag to render
	 * @param {string} value the text to render
	 * @returns {HTMLElement} the rendered HTML heading tag
	 */
	function renderHeading(depth, value) {
		if (depth === 1) {
			return (
				<a href={slug}>
					<h1>{value}</h1>
				</a>
			)
		}
		if (depth === 2) {
			return <h2>{value}</h2>
		}
		if (depth === 3) {
			return <h3>{value}</h3>
		}
		if (depth === 4) {
			return <h4>{value}</h4>
		}
		return <h5>{value}</h5>
	}
	return (
		<div
			className={classnames(
				styles.topHeading,
				level === 1 ? styles.hasBt30Margin : '',
			)}
		>
			{level === 1 && <LinkIcon fontSize="large" htmlColor="#05d577" />}
			{renderHeading(level, node.children[0].value)}
		</div>
	)
}

TopHeading.propTypes = {
	slug: PropTypes.string.isRequired,
}

export default TopHeading
