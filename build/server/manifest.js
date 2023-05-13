const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["audio/1.mp3","audio/2.mp3","audio/3.mp3","audio/4.mp3","audio/5.mp3","audio/6.mp3","audio/7.mp3","audio/8.mp3","css/normalize.css","css/style.css","favicons/android-chrome-192x192.png","favicons/apple-touch-icon.png","favicons/browserconfig.xml","favicons/favicon-16x16.png","favicons/favicon-32x32.png","favicons/favicon.ico","favicons/mstile-150x150.png","favicons/safari-pinned-tab.svg","favicons/site.webmanifest","frankie/Frankie.woff","frankie/Frankie.woff2","frankie/stylesheet.css","images/LAUTRETERRELIBEREE.gif","images/affiche-sanstexte.pdf","images/affiche-sanstexte.png","images/affiche.pdf","images/logo-small.png","images/rimbault-transparent.png","images/rimbault.png"]),
	mimeTypes: {".mp3":"audio/mpeg",".css":"text/css",".png":"image/png",".xml":"application/xml",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".webmanifest":"application/manifest+json",".woff":"font/woff",".woff2":"font/woff2",".gif":"image/gif",".pdf":"application/pdf"},
	_: {
		client: {"start":"_app/immutable/entry/start.ad590a7a.js","app":"_app/immutable/entry/app.45587c9f.js","imports":["_app/immutable/entry/start.ad590a7a.js","_app/immutable/chunks/index.0c59758d.js","_app/immutable/chunks/singletons.4f22be8d.js","_app/immutable/entry/app.45587c9f.js","_app/immutable/chunks/index.0c59758d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-4e65896f.js'),
			() => import('./chunks/1-ce284ad0.js'),
			() => import('./chunks/2-181abc39.js'),
			() => import('./chunks/3-a34e3475.js'),
			() => import('./chunks/4-a4b052f9.js'),
			() => import('./chunks/5-849e84dc.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/balade-sonore/[slug]",
				pattern: /^\/balade-sonore\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/mentions-legales",
				pattern: /^\/mentions-legales\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map