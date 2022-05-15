
export function rupiahFormatter(amount:number){
  const format:any = amount.toString().split('').reverse().join('');
  const convert:any = format.match(/\d{1,3}/g);
  const rupiah:any = 'Rp ' + convert.join('.').split('').reverse().join('')
  return rupiah
}
