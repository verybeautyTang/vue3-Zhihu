import { createStore } from 'vuex'
import { columnData, columnList, ColumnProps, ColumnList } from './hooks/data'
interface UserProps { // 用户登录信息
  isLogin: boolean;
  name?: string;
  id?: number;
  columnId?: number;
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
      state.user = { ...state.user, isLogin: true, name: 'beautyTang', columnId: 1 }
    },
    createPost (state, newpost) {
      return state.list.push(newpost)
    }
  },
  getters: {
    bigColumnLen (state) {
      return state.column.filter(c => c.id > 2).length // column里面的长度在id大于2的情况下
    },
    // 详情页面的表头，根据router的id获得
    getColumnData: (state) => (columnId: number) => {
      return state.column.find(column => column.id === columnId)
    },
    // 详情页面的表单，也是根据routerid可以获得
    getPostData: (state) => (columnId: number) => {
      return state.list.filter(column => column.columnId === columnId)
    }
  }
})
export default store
