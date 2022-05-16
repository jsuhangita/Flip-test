
export type sortItemType ={
  label:string,
  type: string,
  isSelected:boolean,
}

type defaultSortListType = Array<sortItemType>

export const DEFAULT_SORT_LIST : defaultSortListType =[
  {
    label:"URUTKAN",
    type:"default",
    isSelected:true,
  },
  {
    label:"Nama A-Z",
    type:"ascending",
    isSelected:false,
  },
  {
    label:"Nama Z-A",
    type:"descending",
    isSelected:false,
  },
  {
    label:"Tanggal Terbaru",
    type:"newest",
    isSelected:false,
  },
  {
    label:"Tanggal Terlama",
    type:"oldest",
    isSelected:false,
  }
]
