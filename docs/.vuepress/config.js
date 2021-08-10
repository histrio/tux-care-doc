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
  canonical_base: 'https://docs.tuxcare.com',
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
   // ['@vuepress/google-analytics',
  //    {
  //      'ga': 'UA-12711721-12'
  //    }
  //  ],
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
    ]
  ],
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "en-US", // this will be set as the lang attribute on <html>
      title: "Documentation",
      description: "TuxCare"
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
    repo: "cloudlinux/tuxcare-doc",
    editLinks: true,
    docsBranch: "dev",
    docsDir: "docs",
    search: "Search",
    algolia: {
      apiKey: "17e673c12b93fbf7c4a00159b0ae2de0",
      indexName: "tuxcare",
      appId: "R7FCMJM4P7"
  },

    translationSource: "docs-dev.cln.cloudlinux.com",
    defaultURL: "/tuxcare/",
    redirectionMapping: urls,
    sidebarDepth: 2,
    logo: "/logo.svg",
    try_free: "https://cln.cloudlinux.com/console/auth/login",

    social: [
      { url: "https://www.facebook.com/TuxCare", logo: "/fb.png" },
      { url: "https://twitter.com/tux_care", logo: "/tw.png" },
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
            text: "Contact support",
            url: "https://cloudlinux.zendesk.com/hc/en-us/requests/new"
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
        tryFree: "Login to CLN",
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
              "/extended-lifecycle-support/",
              "/linux-support-services/"
            ]
          }
        ]
      }
    }
  }
};
