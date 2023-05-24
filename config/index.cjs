/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: '
wx9bf0f51bd3f46195',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'a7a530df29235152fe5ff7b8d916fd28
',

  PROVINCE: '山东',
  CITY: '烟台',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小红媳妇儿',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oND-r5oc8H7jx4A0w2Hl3HGaSxV4	',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '4y2-7u1THqZZPeojRi1cSXngiSbXds7SE8BDzOo-cr4	',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-06',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小红', year: '1996', date: '09-26',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小红', year: '1996', date: '11-06',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-01-09' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2023-08-05' },
      ],
    },
  ],

}

module.exports = USER_CONFIG

