import React from 'react'
import PropTypes from 'prop-types'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { duotoneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const CodeBlock = ({
	language,
	value,
}) => (
	<SyntaxHighlighter customStyle={{ fontSize: '18px' }} codeTagProps={{ fontSize: 'inherit' }} language={language} style={duotoneDark}>
		{value}
	</SyntaxHighlighter>
)

CodeBlock.defaultProps = {
	language: 'javascript',
}

CodeBlock.propTypes = {
	language: PropTypes.string,
	value: PropTypes.string.isRequired,
}

export default CodeBlock
