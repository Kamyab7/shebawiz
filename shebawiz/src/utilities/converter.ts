export default class Converter {
    
    public AccountNumberToShebaNumber(hesab: string, bank_id: string): string {
        // const Banks: { [key: string]: string } = {
        //     "CENTRAL_BANK":"010",
        //     "MELLI_BANK":"017",
        //     "SAMAN_BANK":"056",
        //     "EGHTESAD_NOVIN_BANK":"055",
        //     "PARSIAN_BANK":"054",
        //     "PASARGAD_BANK":"057",
        //     "POST_BANK":"021",
        //     "TEJARAT_BANK":"018",
        //     "TOSE_SADERAT_BANK":"020",
        //     "REFAH_BANK":"013",
        //     "SEPAH_BANK":"015",
        //     "SARMAYE_BANK": "058",
        //     "SADERAT_BANK":"019",
        //     "SANAT_MADAN_BANK":"011" ,
        //     "KARAFARIN_BANK":"053",
        //     "KESHAVARZI_BANK":"016",
        //     "MASKAN_BANK":"014",
        //     "MELLAT_BANK":"012",
        //     "TOSE_CREDIT_INSTITUTE":"051",
        //     "TOSE_TAVON":"022",
        //     "AYANDEH_BANK":"062" 
        // };
      
        let bban_part1: string = bank_id;
        let zeros: string = "";
        let hesab_length: number = hesab.length;
        let number_of_zeros: number = 19 - hesab_length;
      
        if (hesab_length < 19) {
          for (let i = 1; i <= number_of_zeros; i++) {
            zeros += "0";
          }
        }
      
        let bban: string = bban_part1 + zeros + hesab + "182700";
        let a: string[] = bban.split("");
        let r: number = 0;
      
        for (let v of a) {
          r = (((r * 10) + parseInt(v)) % 97);
        }
      
        let cc: number = 98 - r;
        let shaba: string = `IR${cc}${bban_part1}${zeros}${hesab}`;
        
        return shaba;
      }
  
}