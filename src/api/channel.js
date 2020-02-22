// 导入axios模块
import request from '@/utils/request.js'

// 频道各种api创建

// 获取用户频道列表数据
// apiChannelList () 这里不需要传数据 所以括号里不写东西
export function apiChannelList () {
  return request({
    url: '/app/v1_0/user/channels',
    method: 'get'
  })
}
