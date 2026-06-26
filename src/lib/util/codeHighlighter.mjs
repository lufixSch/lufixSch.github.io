/**
 * Based on the shiki code highlighter from @rodneylab
 * https://githubusercontent.com/rodneylab/sveltekit-shiki-code-highlighting
 */

import { parse } from 'node-html-parser';
import { code_highlighter } from 'mdsvex';

/**
 * Returns code with curly braces and backticks replaced by HTML entity equivalents
 * @param {string} html - highlighted HTML
 * @returns {string} - escaped HTML
 */
function escapeHtml(code) {
	return code.replace(
		/[{}`]/g,
		(character) => ({ '{': '&lbrace;', '}': '&rbrace;', '`': '&grave;' }[character])
	);
}

/**
 * @param html {string} - code to highlight
 * @returns {string} - highlighted html
 */
function makeFocussable(html) {
	const root = parse(html);
	root.querySelector('pre')?.setAttribute('tabIndex', '0');
	return root.toString();
}

/**
 * @param code {string} - code to highlight
 * @param lang {string} - code language
 * @param meta {string} - code meta
 * @returns {string} - highlighted html
 */
async function highlighter(code, lang) {
	let html;
	html = await code_highlighter(code, lang);
	html = makeFocussable(html);
	return escapeHtml(html);
}

export default highlighter;
