const defaultAvatar = require('@/assets/default-avatar.png')

export interface TextPrefixAndSuffix {
  value: string
  style?: Record<string, any>
  clazz?: any
}

export interface LayoutOption {
  type: 'image' | 'text' | 'group' | 'html'
  prop?: string
  value?: any
  format?: (value: any) => any
  defaultValue?: any
  prefix?: TextPrefixAndSuffix | string
  suffix?: TextPrefixAndSuffix | string
  style?: Record<string, any>
  clazz?: any
  children?: LayoutOption[]
}

export const moduleBackground = {
  FRONT_COVER: {
    url: require('@/assets/background/growth-preview-front-cover.jpeg')
  },
  GROWTH_TITLE_PAGE: {
    url: require('@/assets/background/growth-preview-head-master.jpeg')
  },
  GROWTH_STU: {
    url: require('@/assets/background/growth-preview-student-data.jpeg'),
    style: { backgroundPosition: 'left' }
  },
  GROWTH_TEACHER: {
    url: require('@/assets/background/growth-preview-my-teacher.jpeg'),
    style: { backgroundPosition: 'left' }
  },
  GROWTH_FAMILY: {
    url: require('@/assets/background/growth-preview-my-teacher.jpeg'),
    style: { backgroundPosition: 'right' }
  },
  GROWTH_RECORD: {
    url: require('@/assets/background/growth-preview-record-school.jpeg'),
    style: { backgroundPosition: 'right' }
  },
  GROWTH_WORKS: {
    url: require('@/assets/background/growth-preview-my-work.jpeg')
  },
  GROWTH_TIMES: {
    url: require('@/assets/background/growth-preview-growth-moment.jpeg')
  },
  GROWTH_COMMON_CLASS_EVENT: {
    url: require('@/assets/background/growth-preview-class-activity.jpeg'),
    style: { backgroundPosition: 'left' }
  },
  GROWTH_COMMON_LEARN_STORY: {
    url: require('@/assets/background/growth-preview-learing-story.jpeg'),
    style: { backgroundPosition: 'right' }
  },
  GROWTH_COMMON_GROW_STORY: {
    url: require('@/assets/background/growth-preview-growth-story.jpeg'),
    style: { backgroundPosition: 'right' }
  },
  GROWTH_INITIAL_INDEX: {
    url: require('@/assets/background/growth-preview-final-initial.jpeg'),
    style: { backgroundPosition: 'left' }
  },
  GROWTH_FINAL_INDEX: {
    url: require('@/assets/background/growth-preview-final-initial.jpeg'),
    style: { backgroundPosition: 'right' }
  },
  GROWTH_FINAL_COMMENT: {
    url: require('@/assets/background/growth-preview-final-initial.jpeg')
  },
  GROWTH_BIRTHDAY: {
    url: require('@/assets/background/growth-preview-happy-brithday.jpeg')
  },
  GROWTH_MEMORY: {
    url: require('@/assets/background/growth-preview-growth-memory.jpeg'),
    style: { backgroundPosition: 'left' }
  },
  GROWTH_HEALTH: {
    url: require('@/assets/background/growth-preview-growth-memory.jpeg'),
    style: { backgroundPosition: 'right' }
  },
  GROWTH_COMMON_HEALTH: {
    url: require('@/assets/background/growth-preview-health-class.jpeg'),
    style: { backgroundPosition: 'left' }
  },
  GROWTH_CLASS: {
    url: require('@/assets/background/growth-preview-health-class.jpeg'),
    style: { backgroundPosition: 'right' }
  },
  GROWTH_HOLIDAY: {
    url: require('@/assets/background/growth-preview-holiday-bgm.jpeg')
  },
  GROWTH_CLASSCIRCLE: {
    url: require('@/assets/background/growth-preview-class-circle.jpeg')
  },
  GROWTH_HOLIDAY_GREETINGS: {
    url: require('@/assets/background/growth-preview-holiday-greetings.jpeg')
  },
  GROWTH_COMMON_BY_CLASS_CLASS_EVENT: {
    url: require('@/assets/background/growth-preview-class-activity.jpeg'),
    style: { backgroundPosition: 'right' }
  },
  BACK_COVER: {
    url: require('@/assets/background/growth-preview-back-cover.jpeg')
  }
}

export default {
  // 封面
  FRONT_COVER: [
    {
      prop: 'picpath',
      type: 'image',
      defaultValue: defaultAvatar,
      style: {
        left: '10%',
        top: '8%',
        width: '1em',
        height: '1em'
      }
    },
    {
      prop: 'campusName',
      type: 'text',
      style: { left: '32%', top: '10%', fontSize: '0.16em' }
    },
    {
      type: 'group',
      style: {
        left: '32%',
        top: '16%',
        display: 'flex',
        'align-items': 'flex-end'
      },
      children: [
        {
          prop: 'stuName',
          type: 'text',
          style: { fontSize: '0.34em', flex: '1 0 auto' }
        },
        {
          prop: 'className',
          type: 'text',
          style: {
            fontSize: '0.14em',
            flex: '1 0 auto'
          }
        }
      ]
    }
  ],

  GROWTH_TITLE_PAGE: [
    {
      prop: 'pageTitle',
      type: 'text',
      style: { left: '10%', top: '5%', fontSize: '0.3em' }
    },
    {
      prop: 'content',
      type: 'html',
      format: (text: string) =>
        text
          .split('\n')
          .map(t => `<p>${t}</p>`)
          .join(''),
      style: {
        left: '10%',
        right: '10%',
        top: '20%',
        fontSize: '0.16em',
        lineHeight: '1.5'
      }
    }
  ],

  GROWTH_STU: [
    {
      prop: 'pageTitle',
      type: 'text',
      style: { left: '10%', top: '5%', fontSize: '0.3em' }
    },
    {
      prop: 'picpath',
      type: 'image',
      format: (value: string[]) => value[0],
      defaultValue: defaultAvatar,
      style: {
        left: '50%',
        top: '12%',
        width: '2em',
        height: '2em',
        transform: 'translateX(-50%)'
      }
    },
    {
      type: 'text',
      prop: 'stuName',
      prefix: '姓名：',
      style: { left: '10%', top: '50%', fontSize: '0.2em' }
    },
    {
      type: 'text',
      prop: 'alias',
      prefix: '昵称：',
      style: { left: '60%', top: '50%', fontSize: '0.2em' }
    },
    {
      type: 'text',
      prop: 'sex',
      prefix: '性别：',
      format: (value: string) => (value ? '男' : '女'),
      style: { left: '60%', top: '56%', fontSize: '0.2em' }
    },
    {
      type: 'text',
      prop: 'birthday',
      prefix: '生日：',
      style: { left: '10%', top: '62%', fontSize: '0.2em' }
    },
    {
      type: 'text',
      prop: 'age',
      prefix: '年龄：',
      suffix: '岁',
      style: { left: '60%', top: '62%', fontSize: '0.2em' }
    },
    {
      type: 'text',
      prop: 'chineseZodiac',
      prefix: '生肖：',
      style: { left: '10%', top: '68%', fontSize: '0.2em' }
    },
    {
      type: 'text',
      prop: 'zodiac',
      prefix: '星座：',
      style: { left: '60%', top: '68%', fontSize: '0.2em' }
    },
    {
      type: 'text',
      prop: 'height',
      prefix: '身高：',
      suffix: 'cm',
      style: { left: '10%', top: '74%', fontSize: '0.2em' }
    },
    {
      type: 'text',
      prop: 'weight',
      prefix: '体重：',
      suffix: 'kg',
      style: { left: '60%', top: '74%', fontSize: '0.2em' }
    },
    {
      type: 'text',
      prop: 'leftSight',
      prefix: '视力(左)：',
      style: { left: '10%', top: '80%', fontSize: '0.2em' }
    },
    {
      type: 'text',
      prop: 'rightSight',
      prefix: '视力(右)：',
      style: { left: '60%', top: '80%', fontSize: '0.2em' }
    }
  ],

  GROWTH_TEACHER: [
    {
      type: 'text',
      prop: 'pageTitle',
      style: { left: '10%', top: '5%', fontSize: '0.3em' }
    },
    // 老师1
    {
      type: 'image',
      prop: 'teacherList',
      format: (list: Record<string, any>[]) =>
        list.length ? list[0].picpath : '',
      defaultValue: defaultAvatar,
      style: {
        left: '10%',
        top: '16%',
        width: '1.5em',
        height: '2em'
      }
    },
    {
      type: 'text',
      prop: 'teacherList',
      prefix: '姓名：',
      format: (list: Record<string, any>[]) =>
        list.length ? list[0].teacherName : '',
      style: {
        left: '44%',
        top: '16%',
        fontSize: '0.3em',
        display: 'flex',
        flexDirection: 'column',
        lineHeight: '1.5'
      }
    },
    {
      type: 'text',
      prop: 'teacherList',
      prefix: '电话：',
      format: (list: Record<string, any>[]) =>
        list.length ? list[0].phone : '',
      style: {
        left: '44%',
        top: '32%',
        fontSize: '0.3em',
        display: 'flex',
        flexDirection: 'column',
        lineHeight: '1.5'
      }
    },
    // 老师2
    {
      type: 'image',
      prop: 'teacherList',
      format: (list: Record<string, any>[]) =>
        list.length ? list[1].picpath : '',
      defaultValue: defaultAvatar,
      style: {
        right: '10%',
        top: '58%',
        width: '1.5em',
        height: '2em'
      }
    },
    {
      type: 'text',
      prop: 'teacherList',
      prefix: '姓名：',
      format: (list: Record<string, any>[]) =>
        list.length ? list[1].teacherName : '',
      style: {
        right: '44%',
        top: '58%',
        fontSize: '0.3em',
        display: 'flex',
        flexDirection: 'column',
        lineHeight: '1.5',
        textAlign: 'right'
      }
    },
    {
      type: 'text',
      prop: 'teacherList',
      prefix: '电话：',
      format: (list: Record<string, any>[]) =>
        list.length ? list[1].phone : '',
      style: {
        right: '44%',
        top: '74%',
        fontSize: '0.3em',
        display: 'flex',
        flexDirection: 'column',
        lineHeight: '1.5',
        textAlign: 'right'
      }
    }
  ],

  GROWTH_FAMILY: [
    {
      type: 'text',
      prop: 'pageTitle',
      style: { left: '10%', top: '5%', fontSize: '0.3em' }
    }
  ],

  GROWTH_RECORD: [
    {
      type: 'text',
      prop: 'pageTitle',
      style: { left: '10%', top: '5%', fontSize: '0.3em' }
    }
  ],

  GROWTH_WORKS: [
    {
      type: 'text',
      prop: 'pageTitle',
      style: { left: '10%', top: '5%', fontSize: '0.3em' }
    }
  ],

  GROWTH_TIMES: [
    {
      type: 'text',
      prop: 'pageTitle',
      style: { left: '10%', top: '5%', fontSize: '0.3em' }
    }
  ],

  GROWTH_COMMON_CLASS_EVENT: [
    {
      type: 'text',
      prop: 'pageTitle',
      style: { left: '10%', top: '5%', fontSize: '0.3em' }
    }
  ],

  GROWTH_COMMON_LEARN_STORY: [
    {
      type: 'text',
      prop: 'pageTitle',
      style: { left: '10%', top: '5%', fontSize: '0.3em' }
    }
  ],

  GROWTH_COMMON_GROW_STORY: [
    {
      type: 'text',
      prop: 'pageTitle',
      style: { left: '10%', top: '5%', fontSize: '0.3em' }
    }
  ],

  GROWTH_INITIAL_INDEX: [
    {
      type: 'text',
      prop: 'pageTitle',
      style: { left: '10%', top: '5%', fontSize: '0.3em' }
    }
  ],

  GROWTH_FINAL_INDEX: [
    {
      type: 'text',
      prop: 'pageTitle',
      style: { left: '10%', top: '5%', fontSize: '0.3em' }
    }
  ],

  GROWTH_FINAL_COMMENT: [
    {
      type: 'text',
      prop: 'pageTitle',
      style: { left: '10%', top: '5%', fontSize: '0.3em' }
    }
  ],

  GROWTH_BIRTHDAY: [
    {
      type: 'text',
      prop: 'pageTitle',
      style: { left: '10%', top: '5%', fontSize: '0.3em' }
    }
  ],

  GROWTH_MEMORY: [
    {
      type: 'text',
      prop: 'pageTitle',
      style: { left: '10%', top: '5%', fontSize: '0.3em' }
    }
  ],

  GROWTH_HEALTH: [
    {
      type: 'text',
      prop: 'pageTitle',
      style: { left: '10%', top: '5%', fontSize: '0.3em' }
    }
  ],

  GROWTH_COMMON_HEALTH: [
    {
      type: 'text',
      prop: 'pageTitle',
      style: { left: '10%', top: '5%', fontSize: '0.3em' }
    }
  ],

  GROWTH_CLASS: [
    {
      type: 'text',
      prop: 'pageTitle',
      style: { left: '10%', top: '5%', fontSize: '0.3em' }
    }
  ],

  GROWTH_HOLIDAY: [
    {
      type: 'text',
      prop: 'pageTitle',
      style: { left: '10%', top: '5%', fontSize: '0.3em' }
    }
  ],

  GROWTH_CLASSCIRCLE: [
    {
      type: 'text',
      prop: 'pageTitle',
      style: { left: '10%', top: '5%', fontSize: '0.3em' }
    }
  ],

  GROWTH_HOLIDAY_GREETINGS: [
    {
      type: 'text',
      prop: 'pageTitle',
      style: { left: '10%', top: '5%', fontSize: '0.3em' }
    }
  ],

  GROWTH_COMMON_BY_CLASS_CLASS_EVENT: [
    {
      type: 'text',
      prop: 'pageTitle',
      style: { left: '10%', top: '5%', fontSize: '0.3em' }
    }
  ]
} as Record<string, LayoutOption[]>
