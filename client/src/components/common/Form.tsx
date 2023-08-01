import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import { FormProps } from "interfaces/common";
import CustomButton from "./CustomButton";

const Form = ({
    type,
    register,
    handleSubmit,
    formLoading,
    onFinishHandler,
    onInputChange,
    product,
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
                            Enter product name
                        </FormHelperText>
                        <TextField
                            fullWidth
                            required
                            id="outlined-basic"
                            color="info"
                            variant="outlined"
                            defaultValue={product?.ProductName}
                            {...register("ProductName", {
                                required: true,
                                onChange: onInputChange // Add this line
                              })} 
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
                            Enter Description
                        </FormHelperText>
                        <TextField
                            fullWidth
                            required
                            id="outlined-basic"
                            color="info"
                            variant="outlined"
                            defaultValue={product?.ProductDescription}
                            {...register("ProductName", {
                                required: true,
                                onChange: onInputChange // Add this line
                              })}
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
                                Enter product price
                            </FormHelperText>
                            <TextField
                                fullWidth
                                required
                                id="outlined-basic"
                                color="info"
                                type="number"
                                variant="outlined"
                                defaultValue={product?.ProductPrice}
                                {...register("ProductName", {
                                    required: true,
                                    onChange: onInputChange // Add this line
                                  })}
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
                                Enter product quantity
                            </FormHelperText>
                            <TextField
                                fullWidth
                                required
                                id="outlined-basic"
                                color="info"
                                type="number"
                                variant="outlined"
                                defaultValue={product?.ProductQuantity}
                                {...register("ProductName", {
                                    required: true,
                                    onChange: onInputChange // Add this line
                                  })}
                            />
                        </FormControl>
                    </Stack>
                    <Stack direction="row" gap={4}>
                        <CustomButton
                            type="submit"
                            title={formLoading ? "Submitting..." : "Submit"}
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
