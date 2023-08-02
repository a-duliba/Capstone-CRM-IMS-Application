export interface MonthlyData {
    month: string;
    totalSales: number;
    totalUnits: number;
    _id: string;
  }
  
  export interface DailyData {
    date: string;
    totalSales: number;
    totalUnits: number;
  }
  
  export interface YearlySales {
    totalCustomers: number;
    yearlySalesTotal: number;
    yearlyTotalSoldUnits: number;
    year: number;
    monthlyData: MonthlyData[];
    dailyData: DailyData[];
  
    [key: string]: any; //Index signature to allow any string as an index
  }
  