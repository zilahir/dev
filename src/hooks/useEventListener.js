import { useEffect, useRef } from 'react'

/**
 * @param {string} eventName the nam eof the event
 * @param {Function} handler the handler function
 * @param {HTMLElement} element the element the handler is attached to
 */
function useEventListener(eventName, handler, element = window) {
	// Create a ref that stores handler
	const savedHandler = useRef()

	useEffect(() => {
		savedHandler.current = handler
	}, [handler])

	useEffect(() => {
		const isSupported = element && element.addEventListener
		if (!isSupported) return

		const eventListener = event => savedHandler.current(event)
		element.addEventListener(eventName, eventListener)

		// linter missing this feature for hook cleanup this the rule disable
		// eslint-disable-next-line consistent-return
		return () => {
			element.removeEventListener(eventName, eventListener)
		}
	}, [eventName, element])
}

export default useEventListener
