import React, { useContext, useEffect, useState, useCallback } from 'react'
import gfm from 'remark-gfm'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

import RootContext from '../../../utils/context'
import CodeBlock from '../CodeBlock'
import Heading from '../TopHeading'
import styles from './Card.module.scss'
import useEventListener from '../../../hooks/useEventListener'

const Card = ({ markDownFile, slug, title, contentRef }) => {
	const [parsedMarkDown, setParsedMarkDown] = useState()
	const { setCurrentVisible, currentVisible } = useContext(RootContext)
	useEffect(() => {
		fetch(markDownFile)
			.then(parsed => parsed.text())
			.then(markdown => {
				setParsedMarkDown(markdown)
			})
	}, [markDownFile])

	const scrollHandler = useCallback(() => {
		const { y } = contentRef.current.getBoundingClientRect()
		if (y < 0 && currentVisible !== title) {
			setCurrentVisible(title)
		}
	}, [setCurrentVisible, title, currentVisible, contentRef])

	useEventListener('scroll', scrollHandler)

	Heading.defaultProps = {
		slug,
	}
	return (
		<div className={styles.card} ref={contentRef} id={`#${slug}`}>
			<ReactMarkdown
				skipHtml
				plugins={[gfm]}
				renderers={{
					code: CodeBlock,
					heading: Heading,
				}}
			>
				{parsedMarkDown}
			</ReactMarkdown>
		</div>
	)
}

Card.defaultProps = {
	contentRef: undefined,
}

Card.propTypes = {
	contentRef: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
	]),
	markDownFile: PropTypes.string.isRequired,
	slug: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
}

export default Card
