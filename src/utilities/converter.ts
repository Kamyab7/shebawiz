import { AccountType } from "./AccountTypes";


export default class IBAN {
  CC: string;
  AccountNumber: string;
  BankId: string;
  AccountType: AccountType;
  Dictionary: Map<string, number>= new Map([
    ['A', 10],
    ['B', 11],
    ['C', 12],
    ['D', 13],
    ['E', 14],
    ['F', 15],
    ['G', 16],
    ['H', 17],
    ['I', 18],
    ['J', 19],
    ['K', 20],
    ['L', 21],
    ['M', 22],
    ['N', 23],
    ['O', 24],
    ['P', 25],
    ['Q', 26],
    ['R', 27],
    ['S', 28],
    ['T', 29],
    ['U', 30],
    ['V', 31],
    ['W', 32],
    ['X', 33],
    ['Y', 34],
    ['Z', 35],
  ]);


  get Zeros(): string {
    return this.CalculateZeros();
  }

  get BBAN(): string
  {
    return this.CalculateBBAN();
  }

  get Value(): string 
  {
    return this.CalculateIBAN();
  }

  get CD(): string 
  {
    return this.CalculateCD();
  }


  constructor(accountNumber: string, bankId: string, accountType: AccountType, countryCode: string) {
    this.AccountNumber = accountNumber;
    this.BankId = bankId;
    this.AccountType = accountType;
    this.CC = countryCode;
  }
  

  private CalculateCD(): string {
    const temp: string = `${this.BBAN}${this.Dictionary.get(this.CC[0])!}${this.Dictionary.get(this.CC[1])!}00`;
    const a: string[] = temp.split('');
    let r: number = 0;

    a.forEach((v: string) => {
      r = (((r * 10) + parseInt(v)) % 97);
    });

    const cd: number = 98 - r;
    return cd.toString();
  }

  private CalculateBBAN(): string {
    return `${this.BankId}${this.AccountType.toString()}${this.Zeros}${this.AccountNumber}`;
  }

  private CalculateZeros(): string {
    let zeros: string = '';
    const numberOfZeros: number = 18 - this.AccountNumber.length;

    for (let i = 0; i < numberOfZeros; i++) {
      zeros += '0';
    }

    return zeros;
  }

  private CalculateIBAN(): string {
    return `${this.CC}${this.CD}${this.BBAN}`;
  }
}