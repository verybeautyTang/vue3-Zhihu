export interface ColumnProps {
  id: number;
  title: string;
  description: string;
  img?: string;
}
export interface ColumnList {
  _id: number;
  title: string;
  description: string;
  img?: string;
  columnId: number;
  createTime: string;
}
export const columnData: ColumnProps[] = [
  {
    id: 1,
    title: '测试地址',
    description: '这个是指个测试而已',
    img: 'https://mmbiz.qpic.cn/mmbiz_jpg/NAV52YDz8NoQSyQNwCVZEAXIpqQsOlgYzKfvjibtxticuCYOcAEE4dLH3kmt8qAUeJOCFU6dv4IBB8pnAEUTmo9g/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
  }
]
