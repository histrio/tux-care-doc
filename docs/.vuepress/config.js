const urls = require("./urls-mapping.js");
const sidebarUrls = require("./sidebar-urls");
const _slugify = require('@vuepress/shared-utils/lib/slugify');

const slugifyLinks = (s) => {
  if (sidebarUrls[s]) {
    return sidebarUrls[s];
  }
  return _slugify(s);
};

// set your global autometa options
const autoMetaOptions = {
  site: {
    name   : 'TuxCare Documentation',
    // twitter: 'tuxcare_docs',
  },
  canonical_base: '/',
};

module.exports = {
  plugins: [
    ['container', {
      type: 'warning',
      before: info => `<div class="warning custom-block"><p class="custom-block-title">${info}</p>`,
      after: '</div>',
    }],
    ['container', {
      type: 'tip',
      before: info => `<div class="tip custom-block"><p class="custom-block-title">${info}</p>`,
      after: '</div>',
    }],
    ['container', {
      type: 'danger',
      before: info => `<div class="danger custom-block"><p class="custom-block-title">${info}</p>`,
      after: '</div>',
    }],
//    ['disqus', { shortname: 'docscloudlinuxcom' }],
    //['@vuepress/google-analytics',
      //{
        //'ga': 'G-RSVSWSBDSK'
      //}
    //],
    [ 'autometa', autoMetaOptions ]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js"
      }
    }
  },
  base: "/",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "http-equiv": "Content-Security-Policy",
        content: "script-src 'self' 'unsafe-inline' 'unsafe-inline' 'unsafe-eval' *.survicate.com *.googletagmanager.com *.google-analytics.com *.licdn.com *.hotjar.com *.twitter.com *.facebook.net *.kernelcare.info *.twitter.com *.ads-twitter.com;"
      }
    ],
    [
      "script",
      {},
      `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5BSW555');`
    ]
  ],
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "en-US", // this will be set as the lang attribute on <html>
      title: "Documentation",
      description: "TuxCare"
    },
    "/jp/": {
      lang: "ja",
      title: "ドキュメンテーション",
      description: "KernelCare ドキュメンテーション"
    }
  },
  theme: "cloudlinux",
  markdown: {
    slugify: slugifyLinks,
    toc: {
      slugify: slugifyLinks,
    }
  },

  themeConfig: {
    repo: "cloudlinux/tux-care-doc",
    editLinks: true,
    docsBranch: "dev",
    docsDir: "docs",
    search: "Search",
    algolia: {
      apiKey: "17e673c12b93fbf7c4a00159b0ae2de0",
      indexName: "tuxcare",
      appId: "R7FCMJM4P7"
  },

    defaultURL: "/tuxcare/",
    submitRequestURL: "https://tuxcare.com/support-portal/",
    hideHeading: true,
    redirectionMapping: urls,
    sidebarDepth: 2,
    logo: "/logo.svg",
    try_free: "https://portal.tuxcare.com",
    gtm_code: "GTM-5BSW555",

    social: [
      { url: "https://www.facebook.com/TuxCare", logo: "/fb.png" },
      { url: "https://twitter.com/TuxCare_", logo: "/tw.png" },
      { url: "https://www.linkedin.com/showcase/tuxcare", logo: "/in.png" },
      {
        url: "https://www.youtube.com/channel/UCr4GTupdSlC33wfwAGk3jsA/%20Fa",
        logo: "/ytube.png"
      }
    ],
    cloudlinuxSite: "https://cloudlinux.com",
    locales: {
      "/": {
        stayInTouch: "Stay in touch",
        bottomLinks: [
          {
            text: "FAQ",
            url:
              "https://tuxcare.com/faq/"
          },
//          {
//            text: "Getting started",
//            url: "https://www.cloudlinux.com/getting-started-with-cloudlinux-os"
//          },
          {
            text: "Support portal",
            url: "https://tuxcare.com/support-portal/"
          },
          { text: "Blog", url: "https://blog.tuxcare.com/" }
        ],

        // text for the language dropdown title
        title: "Language",
        // text for the language dropdown
        selectText: "En",
        // label for this locale in the language dropdown
        label: "English",
        // text for the edit-on-github link
        editLinkText: "Edit this page",
        tryFree: "Login to TuxCare portal",
        submitRequest: "Contact Support",
        customHomeUrl: "https://www.tuxcare.com",
        search: "Search",
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
      //  algolia: {
      //    apiKey: "849c48c0cc93b6799db18c91b7a949fe",
      //    indexName: "cln",
      //    appId: "EDEID92T9D"
      //  },

        sidebar: [
          {
            title: "Content",
            collapsable: false,
            children: [
              "/tuxcare/",
              "/live-patching-services/",
              "/kernelcare-for-iot/",
              "/eportal/",
              "/eportal-api/",
              "/extended-lifecycle-support/",
              "/extended-lifecycle-support-for-languages/",
              "/linux-support-services/",
              "/tuxcare-cln/"
            ]
          }
        ]
      },
      "/jp/": {
        title: "言語",
        selectText: "日本語",
        label: "日本語",
        editLinkText: "編集",
        tryFree: "Login to TuxCare portal",
        search: "検索する",
        serviceWorker: {
          updatePopup: {
            message: "新しいコンテンツが利用可能です",
            buttonText: "最新の情報に更新"
          }
        },
        algolia: {
          apiKey: "c4c1bbf8d3bb32958b26dd7cc5e74472",
          indexName: "kernelcare-jp",
          appId: "R7FCMJM4P7"
        },
        stayInTouch: "連絡を取り合う",
        bottomLinks: [
            {
                text: "よく寄せられる質問",
                url: "https://tuxcare.com/faq/"
            },
            {
                text: "サポート",
                url: "hhttps://tuxcare.com/support-portal/"
            },
            { text: "ブログ", url: "https://blog.tuxcare.com/" }
        ],
        sidebar: [
          {
            title: "コンテンツ",
            collapsable: false,
            children: [
              "/jp/tuxcare/",
              "/jp/live-patching-services/",
              "/jp/eportal/",
              "/jp/eportal-api/",
              "/jp/extended-lifecycle-support/",
              "/jp/extended-lifecycle-support-for-languages/",
              "/jp/linux-support-services/",
              "/jp/tuxcare-cln/"
            ]
          }
        ]
      }
    }
  }  
};
