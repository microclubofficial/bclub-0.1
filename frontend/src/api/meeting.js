import GlobalConstant from '../GlobalConstant'

// 取得会议列表
export const fetchList = GlobalConstant.SERVERURL + 'meeting/list'
// 取得会议详细
export const fetchMetting = GlobalConstant.SERVERURL + 'meeting/detail'

export const fetchPV = GlobalConstant.SERVERURL + 'meeting/pv'
// 新建会议信息
export const createMetting = GlobalConstant.SERVERURL + 'meeting/create'

//  更新会议信息
export const updateMetting = GlobalConstant.SERVERURL + 'meeting/update'
