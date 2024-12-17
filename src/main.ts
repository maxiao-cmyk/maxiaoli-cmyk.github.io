

function updata() {
  const list=getList()
  const lastItem:number=list.length-1
  list.push({
    count:lastItem? lastItem+1 :1,
    time:getFormatTime()
  })
  render(list)
  setList(list)
}
type Item={
  count:number,
  time:string
}
const KEY="ts-key"
//获取列表数据
function getList():Item[] {
  return JSON.parse( localStorage.getItem(KEY) || '[]')
}
//获取当前时间函数
function getFormatTime() {
  const _time=new Date()
  const h=_time.getHours()
  const m=_time.getMinutes()
  const s=_time.getSeconds()
  return `${h}:${m}:${s}`
}
function render(list:Item[]) {
  
  const str=list.map(item=>{
    return `刷新次数为:${item.count},刷新时间为:${item.time}`
  })
  const dom=document.getElementById('app') as HTMLDivElement
  dom.innerHTML=str.join('<br>')
}
function setList(list:Item[]) {
  localStorage.setItem(KEY,JSON.stringify(list))
}
updata()