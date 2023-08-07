import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import { FormProps } from "interfaces/products";
import CustomButton from "./CustomButton";

const Form = ({
    type,
    register,
    handleSubmit,
    formLoading,
    onFinishHandler,
    initialData,
}: FormProps) => {
    return (
        <Box>
            <Typography fontSize={25} fontWeight={700} color="#11142d">
                {type} a Product
            </Typography>

            <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc">
                <form
                    style={{
                        marginTop: "20px",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                    }}
                    onSubmit={handleSubmit(onFinishHandler)}
                >
                    <FormControl>
                        <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#11142d",
                            }}
                        >
                            Product Name
                        </FormHelperText>
                        <TextField
                            fullWidth
                            required
                            id="outlined-basic"
                            color="info"
                            variant="outlined"
                            defaultValue={initialData?.ProductName}
                            {...register("ProductName", { required: true })} 
                            placeholder="Please enter a name"
                        />
                    </FormControl>

                    <FormControl>
                        <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#11142d",
                            }}
                        >
                            Description
                        </FormHelperText>
                        <TextField
                            fullWidth
                            required
                            id="outlined-basic"
                            color="info"
                            variant="outlined"
                            defaultValue={initialData?.ProductDescription}
                            {...register("ProductDescription", { required: true })}
                            placeholder="Please enter a description"
                            
                        />
                    </FormControl>

                    <Stack direction="row" gap={4}>
                        <FormControl>
                            <FormHelperText
                                sx={{
                                    fontWeight: 500,
                                    margin: "10px 0",
                                    fontSize: 16,
                                    color: "#11142d",
                                }}
                            >
                                Product Price
                            </FormHelperText>
                            <TextField
                                fullWidth
                                required
                                id="outlined-basic"
                                color="info"
                                variant="outlined"
                                defaultValue={initialData?.ProductPrice}
                                {...register("ProductPrice", { required: true })}
                                placeholder="Please use numbers"
                            />
                        </FormControl>

                        <FormControl>
                        <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#11142d",
                            }}
                        >
                            Product Quantity
                        </FormHelperText>
                        <TextField
                            fullWidth
                            required
                            id="outlined-basic"
                            color="info"
                            variant="outlined"
                            defaultValue={initialData?.ProductQuantity}
                            {...register("ProductQuantity", { required: true })} 
                            placeholder="Please use numbers"
                        />
                    </FormControl>
                    </Stack>
                    
                    <FormControl>
                        <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#11142d",
                            }}
                        >
                            Product Category
                        </FormHelperText>
                        <TextField
                            fullWidth
                            required
                            id="outlined-basic"
                            color="info"
                            variant="outlined"
                            defaultValue={initialData?.ProductCategory}
                            {...register("ProductCategory", { required: true })}
                            placeholder="Please use (MedicalWheelChairs, Transport Wheelchairs, Accessories set A, Accessories set B)"
                        />
                    </FormControl>

                    <Stack direction="row" gap={4}>
                    <FormControl>
                            <FormHelperText
                                sx={{
                                    fontWeight: 500,
                                    margin: "10px 0",
                                    fontSize: 16,
                                    color: "#11142d",
                                }}
                            >
                                Units Sold This Year
                            </FormHelperText>
                            <TextField
                                fullWidth
                                required
                                id="outlined-basic"
                                color="info"
                                variant="outlined"
                                defaultValue={initialData?.yearlyTotalSoldUnits}
                                {...register("yearlyTotalSoldUnits", { required: true })}
                                placeholder="Please use numbers"
                            />
                        </FormControl>

                        <FormControl>
                            <FormHelperText
                                sx={{
                                    fontWeight: 500,
                                    margin: "10px 0",
                                    fontSize: 16,
                                    color: "#11142d",
                                }}
                            >
                                Total Sales This Year
                            </FormHelperText>
                            <TextField
                                fullWidth
                                required
                                id="outlined-basic"
                                color="info"
                                variant="outlined"
                                defaultValue={initialData?.yearlySalesTotal}
                                {...register("yearlySalesTotal", { required: true })}
                                placeholder="Please use numbers"
                            />
                        </FormControl>
                        </Stack>

                    <Stack direction="row" gap={4}>
                        <CustomButton
                            type="submit"
                            title={formLoading ? "Saving..." : "Save"}
                            backgroundColor="#475be8"
                            color="#fcfcfc"
                        />
                        <Button variant="contained" component={Link} to="/products">
                            Cancel
                        </Button>
                    </Stack>
                </form>
            </Box>
        </Box>
    );
};

export default Form;
