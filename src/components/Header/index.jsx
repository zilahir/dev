import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { AnimatePresence, motion } from 'framer-motion'
import Select from 'react-select'

import RootContext from '../../utils/context'
import styles from './Header.module.scss'

import dropdownStyles from '../../utils/dropdownStyles'
import contents from '../../api/contents'

const animationVariants = {
	visible: {
		y: 0,
		opacity: 1,
	},
	hidden: {
		y: -50,
		opacity: 0,
	},
	exit: {
		y: -50,
		opacity: 1,
		height: 0,
	},
}

export const titleVariants = {
	animated: {
		opacity: 1,
		y: 0,
	},
	out: {
		opacity: 0,
		y: 0,
	},
	initial: {
		opacity: 0,
		y: -30,
	},
}

const Header = ({ isVisible, handleNavigation }) => {
	const { currentVisible } = useContext(RootContext)

	return (
		<>
			<AnimatePresence>
				{isVisible ? (
					<motion.header
						className={styles.headerRoot}
						variants={animationVariants}
						initial="hidden"
						animate={isVisible ? 'visible' : 'hidden'}
						exit="exit"
					>
						<div className={styles.innerContainer}>
							<AnimatePresence>
								<motion.p
									variants={titleVariants}
									animate={{
										opacity: 1,
									}}
									initial={{
										opacity: 0,
									}}
								>
									{currentVisible}
								</motion.p>
							</AnimatePresence>
							<div className={styles.dropdownContainer}>
								<Select
									options={contents.createTableOfContent()}
									styles={dropdownStyles}
									placeholder="# Table of content"
									isSearchable={false}
									onChange={selected => handleNavigation(selected)}
								/>
							</div>
						</div>
					</motion.header>
				) : (
					<div className={styles.warningContainer}>
						This is <code>beta</code>! I am constantly working on this
					</div>
				)}
			</AnimatePresence>
		</>
	)
}

Header.defaultProps = {
	isVisible: false,
}

Header.propTypes = {
	isVisible: PropTypes.bool,
	handleNavigation: PropTypes.func.isRequired,
}

export default Header
