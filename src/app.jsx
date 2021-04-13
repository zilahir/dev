import { useTransform, useViewportScroll } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Select from 'react-select'

import contents from './api/contents'
import Card from './components/common/Card'
import Header from './components/Header'
import styles from './styles/App.module.scss'
import dropdownStyles from './utils/dropdownStyles'
import RootContext from './utils/context'

/**
 *
 * @description renders the application
 * @returns {HTMLElement} the root container of the application
 */
function App() {
	const { scrollYProgress } = useViewportScroll()
	const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1])
	const [isHeaderVisible, setHeaderVisible] = useState(false)
	const [currentVisible, setCurrentVisible] = useState('')
	const pageContent = contents.getAllContent()

	/**
	 * @description finds the ref based on the selected item
	 * in the dropdown list
	 * then scrools to the ref of the DOM element
	 * @param {object} selected the object representation
	 * of the selected item in the dropdown list
	 */
	function handleNavigation(selected) {
		const referenceToScroll = pageContent.find(
			content => content.slug === selected.value,
		)

		window.scrollTo({
			top: referenceToScroll.ref.current.offsetTop - 100,
			behavior: 'smooth',
		})
	}

	useEffect(
		() =>
			yRange.onChange(value => {
				setHeaderVisible(value > 0)
			}),
		[yRange],
	)

	return (
		<RootContext.Provider
			value={{
				currentVisible,
				setCurrentVisible,
			}}
		>
			<Header isVisible={isHeaderVisible} handleNavigation={handleNavigation} />
			<div className={styles.container}>
				<h1 className={styles.intro}>
					{'{dev} '}
					<span>– Richard Zilahi</span>
				</h1>
				<p className={styles.text}>
					In this page, I am describing my day-to-day routine, when it comes to
					setting up a new project, development environmenet, plugins,
					productivity tools, and more.
				</p>
				<div className={styles.tableOfContents}>
					<Select
						options={contents.createTableOfContent()}
						styles={dropdownStyles}
						placeholder="# Table of content"
						isSearchable={false}
						onChange={selected => handleNavigation(selected)}
					/>
				</div>
				{pageContent.map(
					currentContent =>
						currentContent.markdown && (
							<Card
								slug={currentContent.slug}
								key={currentContent.section}
								markDownFile={currentContent.markdown}
								title={`${currentContent.emoji} ${currentContent.section}`}
								contentRef={currentContent.ref}
							/>
						),
				)}
			</div>
		</RootContext.Provider>
	)
}

export default App
