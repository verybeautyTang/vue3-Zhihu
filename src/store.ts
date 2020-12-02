import { createStore } from 'vuex'
import { columnData, columnList, ColumnProps, ColumnList } from './hooks/data'
interface UserProps { // 用户登录信息
  isLogin: boolean;
  name?: string;
  id?: number;
}
export interface GlobalDataProp {
  column: ColumnProps[];
  list: ColumnList[];
  user: UserProps;
}
const store = createStore<GlobalDataProp>({ // 加入泛型是为了返回指定类型的数据
  state: {
    column: columnData,
    list: columnList,
    user: {
      isLogin: false
    }
  },
  mutations: {
    login (state) {
      state.user = { ...state.user, isLogin: true, name: 'beautyTang' }
    }
  }
})
export default store
