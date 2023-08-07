export interface CustomButtonProps {
    type?: string,
    title: string,
    backgroundColor: string,
    color: string,
    fullWidth?: boolean,
    icon?: ReactNode,
    disabled?: boolean,
    handleClick?: (data?: any) => void
    data?: any
}

export interface SalesData {
    totalRevenue: number;
    predictedSales: number;
    // Include other properties if needed
  }
  
