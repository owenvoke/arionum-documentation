module.exports = {
    title: 'Arionum',
    description: 'A collection of documentation for the Arionum blockchain',
    serviceWorker: true,
    sidebar: true,
    themeConfig: {
        logo: '/logo.svg',
        repo: 'arionum',
        docsRepo: 'pxgamer/arionum-documentation',
        docsDir: 'src',
        editLinks: true,
        nav: [
            {text: 'Official Website', link: 'https://arionum.com'},
            {text: 'Block Explorer', link: 'https://arionum.info'},
        ],
        sidebar: [
            {
                title: 'Getting Started',
                collapsable: false,
                children: [
                    '/getting-started/wallets',
                    '/getting-started/mining',
                    '/getting-started/mining-pools',
                    '/getting-started/exchanges',
                    '/getting-started/aliases'
                ]
            },
            {
                title: 'Developers',
                collapsable: false,
                children: [
                    '/developers/api-wrappers',
                    '/developers/forks',
                    '/developers/roadmap',
                    '/developers/adoption',
                    '/developers/hashing-and-encoding',
                ]
            },
            {
                title: 'Network',
                collapsable: false,
                children: [
                    '/network/node-api',
                    '/network/node-utility',
                    '/network/masternodes',
                ]
            }
        ]
    }
}
