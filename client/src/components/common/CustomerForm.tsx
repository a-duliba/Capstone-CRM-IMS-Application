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
                        Customer Name
                        </FormHelperText>
                        <TextField
                        fullWidth
                        required
                        id="outlined-basic"
                        color="info"
                        variant="outlined"
                        defaultValue={initialData?.CustomerName}
                        {...register("CustomerName", { required: true })}
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
                           Phone Number 
                        </FormHelperText>
                        <TextField
                            fullWidth
                            required
                            id="outlined-basic"
                            color="info"
                            variant="outlined"
                            defaultValue={initialData?.PhoneNumber}
                            {...register("PhoneNumber", { required: true })}
                            placeholder="Please enter a valid phone number (xxx-xxx-xxxx)"
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
                            Email
                        </FormHelperText>
                        <TextField
                            fullWidth
                            required
                            id="outlined-basic"
                            color="info"
                            variant="outlined"
                            defaultValue={initialData?.Email}
                            {...register("Email", { required: true })}
                            placeholder="Please enter an email"
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
                                Purchase history
                            </FormHelperText>
                            <TextField
                                fullWidth
                                required
                                id="outlined-basic"
                                color="info"
                                variant="outlined"
                                defaultValue={initialData?.PurchaseHistory}
                                {...register("PurchaseHistory", { required: true })}
                                placeholder="Please enter a number"
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
                                Account Balance
                            </FormHelperText>
                            <TextField
                                fullWidth
                                required
                                id="outlined-basic"
                                color="info"
                                variant="outlined"
                                defaultValue={initialData?.AccountBalance}
                                {...register("AccountBalance", { required: true })}
                                placeholder="Please enter a number"
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
                            Shipping Information
                        </FormHelperText>
                        <TextField
                            fullWidth
                            required
                            id="outlined-basic"
                            color="info"
                            variant="outlined"
                            defaultValue={initialData?.ShippingInformation}
                            {...register("ShippingInformation", { required: true })}
                            placeholder="Please enter valid shipping information"
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
                            Preferred Method of Communication
                        </FormHelperText>
                        <TextField
                            fullWidth
                            required
                            id="outlined-basic"
                            color="info"
                            variant="outlined"
                            defaultValue={initialData?.PreferredCommunicationMethod}
                            {...register("PreferredCommunicationMethod", { required: true })}
                            placeholder="Please enter (Email, SMS, Mail)"
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