import mdItCustomAttrs from "markdown-it-custom-attrs";
import {defineConfig} from "vitepress";
import {set_sidebar} from "../guide/set_sidebar.mjs";

export default defineConfig({
	base: "/",//部署到GitHub Pages时的仓库名 vitepress-template
	title: "记录文档",
	lang: "zh-CN",
	description: "记录文档",
	head: [
		["meta", {name: "author", content: "修改中"}],
		["meta", {name: "keywords", content: "Vitepress-Template,"}],
		["link", {rel: "icon", href: "../public/icon.png"}],
		["link", {rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css"}],
		["script", {src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js"}],
	],
	markdown: {config: (md) => md.use(mdItCustomAttrs, "image", {"data-fancybox": "gallery"})},
	lastUpdated: true,
	themeConfig: {
		logo: "/icon.png",
		//搜索
		search: {
			provider: "local"
		},
		outline: {
			level: [2, 4], // 显示2-4级标题
			// level: 'deep', // 显示2-6级标题
			label: '当前页大纲' // 文字显示
		},
		// algolia: {
		//     appId: "xxx",
		//     apiKey: "xxx",
		//     indexName: "Vitepress-Template",
		// },
		editLink: {
			text: "为此页提供修改建议",
			pattern: "https://gitee.com/dotnetmoyu/Vitepress-Template",
		},
		socialLinks: [{icon: "github", link: "https://gitee.com/dotnetmoyu/Vitepress-Template"}],
		footer: {
			message: "MIT License.",
			copyright: "Copyright © 2024 修改中",
		},
		nav: [
			{text: "指引", link: "/guide/introduce/introduce/introduce", activeMatch: "/guide/introduce/"},
			{text: "文档", link: "/guide/docs/doc", activeMatch: "/guide/docs/"},
			// {
			// 	text: "相关链接",
			// 	items: [
			// 		{
			// 			text: "Github 仓库",
			// 			link: "https://github.com/DotNet-MoYu/Vitepress-Template"
			// 		},
			// 		{
			// 			text: "Gitee 仓库",
			// 			link: "https://gitee.com/dotnetmoyu/Vitepress-Template"
			// 		},
			// 	]
			// },
			// {text: "🍵 赞助", link: "/sponsor/index"},
		],

		sidebar: {
			"/guide/introduce/": set_sidebar('/guide/introduce',false),
			"/guide/docs/": set_sidebar('/guide/docs'),
		},
	},
	vite: {
		plugins: [],
	},
});
