/* eslint-disable unicorn/filename-case */
import hexToRgba from 'hex-to-rgba'

const styles = {
	placeholder: provided => ({
		...provided,
		fontSize: 18,
		color: hexToRgba('#05d577', 1),
	}),
	indicatorsContainer: () => ({
		display: 'none',
	}),
	dropdownIndicator: provided => ({
		...provided,
	}),
	container: provided => ({
		...provided,
		width: '100%',
		fontFamily: 'Roboto Slab',
	}),
	control: provided => ({
		...provided,
		background: 'transparent',
		borderRadius: 10,
		boxShadow: 'none',
		height: 40,
		whiteSpace: 'nowrap',
		borderWidth: 2,
		borderColor: hexToRgba('#05d577', 1),
		'&:hover': {
			borderColor: hexToRgba('#05d577', 1),
		},
	}),
	singleValue: provided => ({
		...provided,
		fontSize: 18,
		color: '#ffffff',
	}),
	menu: provided => ({
		...provided,
		background: hexToRgba('#13111A', 1),
		borderRadius: 10,
		overflow: 'hidden',
	}),
	menuList: provided => ({
		...provided,
		maxHeight: 305,
		zIndex: 99,
		'::-webkit-scrollbar': {
			width: 7,
		},
		'::-webkit-scrollbar-track': {
			background: hexToRgba('#2a2734', 1),
		},
		'::-webkit-scrollbar-thumb': {
			background: hexToRgba('#000000', 0.5),
		},
		'::-webkit-scrollbar-thumb:hover': {
			background: '#555',
		},
	}),
	option: provided => ({
		...provided,
		background: 'transparent',
		fontSize: 18,
		color: '#ffffff',
		padding: '12px 12px',
		'&:hover': {
			background: hexToRgba('#0f0c10', 0.9),
			cursor: 'pointer',
		},
	}),
}

export default styles
