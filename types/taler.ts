export interface IDetailsItem {
    navn: string;
    rom: string;
    tema: string;
    urls: IUrl[];
  }
  
  export interface IUrl {
    value: string;
  }
  
  export interface IDetailsData {
    details: IDetailsItem[];
  }
  