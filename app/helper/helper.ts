import { Platform } from "react-native";

export function rupiahFormatter(amount:number){
  const format:any = amount.toString().split('').reverse().join('');
  const convert:any = format.match(/\d{1,3}/g);
  const rupiah:any = 'Rp ' + convert.join('.').split('').reverse().join('')
  return rupiah
}

export function sortAtoZ(array:Array<any>){
  array.sort((a, b) => a.beneficiary_name.localeCompare(b.beneficiary_name))
  return array;
}

export function sortZtoA(array:Array<any>){
  array.sort((a, b) => b.beneficiary_name.localeCompare(a.beneficiary_name))
  return array;
}

function parseDateAndroid(date:string){
  let dateParam:Array<any> = date.split(/[\s-:]/)
  dateParam[1] = (parseInt(dateParam[1], 10) - 1).toString()
  // @ts-ignore
  return new Date(...dateParam)
}

export function sortNewest(array:Array<any>){
  if(Platform.OS==="ios"){
    array.sort(function(a,b){
      return new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf();
    });
  }else {
    array.sort(function(a,b){
      const parsedA  = parseDateAndroid(a.created_at);
      const parsedB = parseDateAndroid(b.created_at);
      return parsedB.valueOf() - parsedA.valueOf();
    });
  }
  return array;
}

export function sortOldest(array:Array<any>){
  if(Platform.OS==="ios"){
    array.sort(function(a,b){
      return new Date(a.created_at).valueOf() - new Date(b.created_at).valueOf();
    });
  }else {
    array.sort(function(a,b){
      const parsedA  = parseDateAndroid(a.created_at);
      const parsedB = parseDateAndroid(b.created_at);
      return parsedA.valueOf() - parsedB.valueOf();
    });
  }
  return array;
}

export function dateFormatter(date:string){
  const dateObj = new Date(date);
  console.log({dateObj})
  if(Platform.OS==="ios"){
   return dateObj.toLocaleString('IND', { day:'numeric',month: 'long',year:'numeric' })
  }
  else {
    let parsed = parseDateAndroid(date)
    let year:number = parsed.getFullYear();
    let month:string|number = parsed.getMonth();
    let day:number = parsed.getDate();
    switch(month) {
      case 0: month = "Januari"; break;
      case 1: month = "Februari"; break;
      case 2: month = "Maret"; break;
      case 3: month = "April"; break;
      case 4: month = "Mei"; break;
      case 5: month = "Juni"; break;
      case 6: month = "Juli"; break;
      case 7: month = "Agustus"; break;
      case 8: month = "September"; break;
      case 9: month = "Oktober"; break;
      case 10: month = "November"; break;
      case 11: month = "Desember"; break;
    }
    return `${day} ${month} ${year}`
  }
}
