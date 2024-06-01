import { definePlumeNotesConfig } from 'vuepress-theme-plume'

export const zhNotes = definePlumeNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    {
      dir: 'guide',
      link: '/guide/',
      sidebar: [
        {
          text: '快速开始',
          collapsed: false,
          icon: 'carbon:idea',
          items: ['介绍', '安装'],
        },
        {
          text: '使用教程',
          icon: 'lucide:box',
          collapsed: false,
          dir: '使用教程',
          items: ['系统配置', '字典管理', 'POC&指纹&敏感信息', '创建任务', '项目管理'],
        }
      ],
    },
  ],
})

export const enNotes = definePlumeNotesConfig({
  dir: 'en/notes',
  link: '/',
  notes: [],
})
