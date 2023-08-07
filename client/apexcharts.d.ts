declare module 'react-apexcharts' {
    export interface ApexDataLabels {
      formatter?: (val: any) => string;
    }
    export interface ApexTooltip {
      y: {
        formatter?: (val: any) => string;
      };
    }
  }
  