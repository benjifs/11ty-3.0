# 11ty 3.0 Playground

Testing 11ty 3.0 changes before adding them to my site.

## Setup
- Clone this repo
- `npm install`
- `npm run start`

## Issues
- [eleventy-plugin-rss](https://github.com/11ty/eleventy-plugin-rss) requires missing `head` filter. Comment out the [following lines](https://github.com/benjifs/11ty-3.0-playground/blob/f174aed92557294b134275a92ca18cf0bb40f936/eleventy.config.js#L4-L6) to make it work.
	- Lines copied from [11ty-website](https://github.com/11ty/11ty-website/blob/d132b2bd6726543e7f6525538e96d9c6fba8c5ba/eleventy.config.js#L827-L829)