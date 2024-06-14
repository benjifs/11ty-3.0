import feedPlugin from './config/feedPlugin.js'

export default function (eleventyConfig) {
	// eleventyConfig.addFilter('head', (arr, num) => {
	// 	return num ? arr.slice(0, num) : arr
	// })

	eleventyConfig.addPassthroughCopy({ 'static': '/' })
	eleventyConfig.addPassthroughCopy('src/css')

	feedPlugin(eleventyConfig)

	eleventyConfig.addCollection('feed', collection =>
		collection.getFilteredByGlob(['src/content/articles/*.md', 'src/content/notes/*.md']))

	return {
		passthroughFileCopy: true,
		dir: {
			input: 'src',
			data: '_data'
		}
	}
}