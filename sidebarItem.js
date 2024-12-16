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
            ]
        },
        {
            type: 'dropdown',
            position: 'left',
            label: 'C&C++',
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'CMake',
                    label: 'CMake',
                },
            ]
        },
        // { to: '/blog', label: 'Blog', position: 'left' },
        {
            href: 'https://github.com/SSSyunn/Note',
            label: 'GitHub',
            position: 'right',
        },
    ]