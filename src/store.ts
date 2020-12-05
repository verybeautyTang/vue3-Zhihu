import { createStore, Commit } from 'vuex'
import axios from 'axios'
interface UserProps { // 用户登录信息
  isLogin: boolean;
  name?: string;
  id?: number;
  columnId?: number;
}
export interface ImageProps {
  _id?: string;
  url?: string;
  createdAt?: string;
}
export interface ColumnProps {
  _id: string;
  avatar?: ImageProps;
  title: string;
  description: string;
}
export interface PostProps {
  _id: string;
  column: string;
  title: string;
  image?: ImageProps;
  content?: string;
  excerpt?: string;
  createdAt: string;
}
export interface GlobalDataProp {
  isLoading: boolean;
  column: ColumnProps[];
  list: PostProps[];
  user: UserProps;
}
// 封装的get请求
const getPromise = async (url: string, mutationsName: string, commit: Commit) => {
  const { data } = await axios.get(url)
  commit(mutationsName, data)
}
const store = createStore<GlobalDataProp>({ // 加入泛型是为了返回指定类型的数据
  state: {
    isLoading: false,
    column: [],
    list: [],
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
    },
    fetchColumns (state, rowData) {
      state.column = rowData.data.list
    },
    fetchColumn (state, rowData) {
      state.column = [rowData.data]
      console.log(state.column);
    },
    fetchPost (state, rowData) {
      state.list = rowData.data.list
      console.log(state.list);
    },
    setLoading (state, status) {
      state.isLoading = status
    }
  },
  getters: {
    // 详情页面的表头，根据router的id获得
    getColumnData: (state) => (columnId: string) => {
      return state.column.find(column => column._id === columnId)
    },
    // 详情页面的表单，也是根据routerid可以获得
    getPostData: (state) => (columnId: string) => {
      return state.list.filter(column => column.column === columnId)
    }
  },
  actions: {
    async fetchColumns ({ commit }) {
      getPromise('/columns', 'fetchColumns', commit)
    },
    fetchColumn ({ commit }, cid) {
      getPromise(`/columns/${cid}`, 'fetchColumn', commit)
    },
    fetchPost ({ commit }, cid) {
      getPromise(`/columns/${cid}/posts`, 'fetchPost', commit)
    }
  }
})
export default store
