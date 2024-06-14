import { feedPlugin } from '@11ty/eleventy-plugin-rss'

export default function(eleventyConfig) {
	const collection = {
		name: 'feed',
		limit: 10,
	}
	const metadata = {
		language: 'en',
		title: 'Eleventy Sample',
		subtitle: 'Testing 11ty 3.0.',
		base: 'https://domain.test',
		author: {
			name: 'benji'
		}
	}
	eleventyConfig.addPlugin(feedPlugin, {
		type: 'atom',
		outputPath: '/feed.atom',
		collection,
		metadata
	})
	eleventyConfig.addPlugin(feedPlugin, {
		type: 'rss',
		outputPath: '/feed.xml',
		collection,
		metadata
	})
	eleventyConfig.addPlugin(feedPlugin, {
		type: 'json',
		outputPath: '/feed.json',
		collection,
		metadata
	})
}