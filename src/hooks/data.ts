export interface ColumnProps {
  id: number;
  title: string;
  content: string;
  img?: string;
}
export interface ColumnList {
  id: number;
  title: string;
  content: string;
  img?: string;
  columnId: number;
  createTime: string;
}
export const columnData: ColumnProps[] = [
  {
    id: 1,
    title: '测试地址',
    content: '这个是指个测试而已',
    img: 'https://mmbiz.qpic.cn/mmbiz_jpg/NAV52YDz8NoQSyQNwCVZEAXIpqQsOlgYzKfvjibtxticuCYOcAEE4dLH3kmt8qAUeJOCFU6dv4IBB8pnAEUTmo9g/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
  }
]
export const columnList: ColumnList[] = [
  {
    id: 1,
    title: '111',
    content: '2222',
    img: 'https://upload.jianshu.io/users/upload_avatars/17362372/3e183a09-efe8-4bd1-b1e9-16ce820e6654?imageMogr2/auto-orient/strip|imageView2/1/w/80/h/80/format/webp',
    columnId: 1,
    createTime: '2222'
  },
  {
    id: 2,
    title: '111',
    content: '2222',
    img: 'https://upload.jianshu.io/users/upload_avatars/17362372/3e183a09-efe8-4bd1-b1e9-16ce820e6654?imageMogr2/auto-orient/strip|imageView2/1/w/80/h/80/format/webp',
    columnId: 1,
    createTime: '2222'
  },
  {
    id: 3,
    title: '111',
    content: '2222',
    img: 'https://upload.jianshu.io/users/upload_avatars/17362372/3e183a09-efe8-4bd1-b1e9-16ce820e6654?imageMogr2/auto-orient/strip|imageView2/1/w/80/h/80/format/webp',
    columnId: 1,
    createTime: '2222'
  },
  {
    id: 4,
    title: '111',
    content: '2222',
    img: 'https://upload.jianshu.io/users/upload_avatars/17362372/3e183a09-efe8-4bd1-b1e9-16ce820e6654?imageMogr2/auto-orient/strip|imageView2/1/w/80/h/80/format/webp',
    columnId: 1,
    createTime: '2222'
  }
]
