import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import { FormProps } from "interfaces/customers";
import CustomButton from "./CustomButton";

const CustomerForm = ({
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
                {type} a Customer
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
                            Enter customer name
                        </FormHelperText>
                        <TextField
                            fullWidth
                            required
                            id="outlined-basic"
                            color="info"
                            variant="outlined"
                            defaultValue={initialData?.CustomerName}
                            {...register("CustomerName", { required: true })}
                            
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
                            Enter phone number here
                        </FormHelperText>
                        <TextField
                            fullWidth
                            required
                            id="outlined-basic"
                            color="info"
                            variant="outlined"
                            defaultValue={initialData?.PhoneNumber}
                            {...register("PhoneNumber", { required: true })}
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
                            Enter email here
                        </FormHelperText>
                        <TextField
                            fullWidth
                            required
                            id="outlined-basic"
                            color="info"
                            variant="outlined"
                            defaultValue={initialData?.Email}
                            {...register("Email", { required: true })}
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
                                Enter purchase history here
                            </FormHelperText>
                            <TextField
                                fullWidth
                                required
                                id="outlined-basic"
                                color="info"
                                variant="outlined"
                                defaultValue={initialData?.PurchaseHistory}
                                {...register("PurchaseHistory", { required: true })}
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
                                Enter account balance here
                            </FormHelperText>
                            <TextField
                                fullWidth
                                required
                                id="outlined-basic"
                                color="info"
                                variant="outlined"
                                defaultValue={initialData?.AccountBalance}
                                {...register("AccountBalance", { required: true })}
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
                            Enter shipping information here
                        </FormHelperText>
                        <TextField
                            fullWidth
                            required
                            id="outlined-basic"
                            color="info"
                            variant="outlined"
                            defaultValue={initialData?.ShippingInformation}
                            {...register("ShippingInformation", { required: true })}
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
                            Enter perferred method of communication here
                        </FormHelperText>
                        <TextField
                            fullWidth
                            required
                            id="outlined-basic"
                            color="info"
                            variant="outlined"
                            defaultValue={initialData?.PreferredCommunicationMethod}
                            {...register("PreferredCommunicationMethod", { required: true })}
                        />
                    </FormControl>

                    <Stack direction="row" gap={4}>
                        <CustomButton
                            type="submit"
                            title={formLoading ? "Saving..." : "Save"}
                            backgroundColor="#475be8"
                            color="#fcfcfc"
                        />
                        <Button variant="contained" component={Link} to="/customers">
                            Cancel
                        </Button>
                    </Stack>
                </form>
            </Box>
        </Box>
    );
};

export default CustomerForm;