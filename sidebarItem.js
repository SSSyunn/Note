export var sidebarItem =
    [
        {
            type: 'dropdown',
            position: 'left',
            label: '通用基础',
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'DSA',
                    label: '数据结构与算法',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'x86_64_AS',
                    label: 'x86_64汇编语言',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'CO',
                    label: '计算机组成原理',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'OS',
                    label: '计算机操作系统',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'NetWork',
                    label: '计算机网络',
                },
            ]
        },
        {
            type: 'dropdown',
            position: 'left',
            label: 'C&C++',
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'C',
                    label: 'C语言',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'CPP',
                    label: 'C++',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'CMake',
                    label: 'CMake',
                },
            ]
        },
        {
            type: 'dropdown',
            position: 'left',
            label: 'Python',
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'Python',
                    label: 'Python',
                },
            ],
        },
        {
            type: 'dropdown',
            position: 'left',
            label: 'Web应用',
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'HTML',
                    label: 'HTML',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'CSS',
                    label: 'CSS',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'JS',
                    label: 'JavaScript',
                },
            ],
        },
        // { to: '/blog', label: 'Blog', position: 'left' },
        {
            href: 'https://github.com/SSSyunn/Note',
            label: 'GitHub',
            position: 'right',
        },
    ]