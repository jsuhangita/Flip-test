
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
