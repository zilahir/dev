import { useRef } from 'react'
import slugify from 'slugify'
import { sortBy } from 'lodash'

import GetStarted from '../markdowns/GetStarted.md'
import IDEDocument from '../markdowns/IDE.md'
import GITDocument from '../markdowns/GIT.md'
import LinterDocument from '../markdowns/Linters.md'
import DocummentationDocument from '../markdowns/DocsDocument.md'
import BugDocument from '../markdowns/BugsDocumentatioin.md'
import TestingDocument from '../markdowns/Testing.md'
import ReleasingDocument from '../markdowns/Releasing.md'
import MiscDocument from '../markdowns/Misc.md'

const contents = {
	tableOfContents: [
		{ section: 'DEMO', markdown: GetStarted, emoji: '👋' },
		{ section: 'IDE', markdown: IDEDocument, emoji: '✏️' },
		{ section: 'GIT', markdown: GITDocument, emoji: '🔖' },
		{ section: 'Linters', markdown: LinterDocument, emoji: '🚨 💅' },
		{ section: 'Docs', markdown: DocummentationDocument, emoji: '📖' },
		{ section: 'Testing', markdown: TestingDocument, emoji: '⚡️' },
		{ section: 'Bugs', markdown: BugDocument, emoji: '🐞' },
		{ section: 'Releasing', markdown: ReleasingDocument, emoji: '🚀' },
		{ section: 'Miscellaneous', markdown: MiscDocument, emoji: '📌' },
	],
	createTableOfContent: () =>
		contents.tableOfContents.map(currentContent => ({
			value: slugify(currentContent.section).toLowerCase(),
			label: `${currentContent.emoji} ${currentContent.section}`,
		})),
	getAllContent: () => {
		const temporaryArray = contents.tableOfContents.map(
			(currentContent, index) => ({
				...currentContent,
				order: index + 1,
				slug: slugify(currentContent.section).toLowerCase(),
				ref: useRef(null),
			}),
		)
		return sortBy(temporaryArray, 'order')
	},
}

export default contents
