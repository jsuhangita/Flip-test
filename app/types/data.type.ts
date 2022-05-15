export type TransactionDataTypes={
  sender_bank?:string,
  beneficiary_bank?:string,
  beneficiary_name?:string,
  completed_at?:string,
  status?:"SUCCESS"|"PENDING",
  amount?:number,
  id?:string,
  account_number?:string,
  unique_code:number,
  remark:string,
  created_at?:string,
}
