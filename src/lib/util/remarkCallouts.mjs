/**
 * Remark plugin to convert GitHub-style callouts (ADMONITION) to styled HTML
 * Supports: NOTE, TIP, WARNING, CAUTION
 * 
 * Usage in markdown:
 * > [!NOTE]
 * > This is a note
 * 
 * Gets transformed to:
 * <div class="callout callout-note">
 *   <div class="callout-title">Note</div>
 *   <div class="callout-content">This is a note</div>
 * </div>
 */

import { visit } from 'unist-util-visit';
import { toString } from 'mdast-util-to-string';

const calloutTypes = {
	NOTE: {
		title: 'Note',
		icon: 'ℹ️',
		colorClass: 'border-status-wip dark:border-status-wip-dark',
		bgClass: 'bg-status-wip/10 dark:bg-status-wip-dark/10'
	},
	TIP: {
		title: 'Tip',
		icon: '💡',
		colorClass: 'border-status-finished dark:border-status-finished-dark',
		bgClass: 'bg-status-finished/10 dark:bg-status-finished-dark/10'
	},
	WARNING: {
		title: 'Warning',
		icon: '⚠️',
		colorClass: 'border-status-stalled dark:border-status-stalled-dark',
		bgClass: 'bg-status-stalled/10 dark:bg-status-stalled-dark/10'
	},
	CAUTION: {
		title: 'Caution',
		icon: '⚠️',
		colorClass: 'border-status-stalled dark:border-status-stalled-dark',
		bgClass: 'bg-status-stalled/10 dark:bg-status-stalled-dark/10'
	}
};

function remarkCallouts() {
	return (tree) => {
		visit(tree, 'blockquote', (node, index, parent) => {
			if (!index || !parent) return;

			const firstChild = node.children[0];
			if (!firstChild || firstChild.type !== 'paragraph') return;

			const firstText = firstChild.children[0];
			if (!firstText || firstText.type !== 'text') return;

			const text = toString(firstText);
			const match = text.match(/^\[!(NOTE|TIP|WARNING|CAUTION)\]/i);

			if (!match) return;

			const calloutType = match[1].toUpperCase();
			const calloutInfo = calloutTypes[calloutType];

			// Remove the [!TYPE] text from the first paragraph
			firstText.value = text.substring(match[0].length).trim();

			// If first paragraph is now empty, remove it
			if (!firstText.value) {
				firstChild.children.shift();
			}

			// Create callout div structure
			const calloutDiv = {
				type: 'div',
				data: {
					hName: 'div',
					hProperties: {
						class: `callout callout-${calloutType.toLowerCase()} ${calloutInfo.colorClass} ${calloutInfo.bgClass}`
					}
				},
				children: [
					{
						type: 'div',
						data: {
							hName: 'div',
							hProperties: {
								class: 'callout-title'
							}
						},
						children: [
							{
								type: 'text',
								value: calloutInfo.title
							}
						]
					},
					{
						type: 'div',
						data: {
							hName: 'div',
							hProperties: {
								class: 'callout-content'
							}
						},
						children: node.children
					}
				]
			};

			// Replace blockquote with callout div
			parent.children[index] = calloutDiv;
		});
	};
}

export default remarkCallouts;
