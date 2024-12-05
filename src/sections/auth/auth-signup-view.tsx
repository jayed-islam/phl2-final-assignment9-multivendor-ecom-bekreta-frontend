/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { authRegisterSchema, AuthRegisterValues } from "./auth-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterMutation } from "@/redux/reducers/auth/authApi";
import toast from "react-hot-toast";
import { Alert, Button } from "@mui/material";
import Link from "next/link";
import { paths } from "@/layouts/paths";
import RHFTextField from "@/components/hook-form/rhf-text-field";
import FormProvider from "@/components/hook-form/form-provider";

export default function SignUpView() {
  const router = useRouter();

  const methods = useForm<AuthRegisterValues>({
    resolver: zodResolver(authRegisterSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
    watch,
  } = methods;

  const [createUser, { isLoading }] = useRegisterMutation();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await createUser(data).unwrap();
      if (response.success) {
        toast.success(response.message);
        router.push(paths.signin);
      } else {
        toast.error(response.message);
        setErrorMessage(response.message);
      }
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast.error(error.data.message);
      setErrorMessage(error.data.message);
    }
  });

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(null);
      }, 11000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const role = watch("role");

  const renderForm = (
    <>
      <Stack direction="row" spacing={2} sx={{ my: 3 }}>
        <Button
          variant={role === "customer" ? "contained" : "outlined"}
          onClick={() => methods.setValue("role", "customer")}
        >
          Customer
        </Button>
        <Button
          variant={role === "vendor" ? "contained" : "outlined"}
          onClick={() => methods.setValue("role", "vendor")}
        >
          Vendor
        </Button>
      </Stack>
      <Stack
        spacing={3}
        sx={{
          my: 3,
        }}
      >
        <RHFTextField label="Email" name="email" />
        <RHFTextField label="Password" type="password" name="password" />
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={isLoading}
        color="success"
      >
        Create Account
      </LoadingButton>

      <Typography variant="body2" sx={{ mt: 2 }} textAlign="center">
        Already have an account?
        <Link
          href={paths.signin}
          className="pl-2 text-green-500 hover:underline"
        >
          Login
        </Link>
      </Typography>
    </>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Box
        sx={{
          height: 1,
        }}
      >
        <div className="h-screen">
          <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
            <Card
              sx={{
                p: 5,
                width: 1,
                maxWidth: 420,
              }}
            >
              <Typography variant="h4">Register to Deenly</Typography>

              {errorMessage && (
                <Alert severity="error" sx={{ mt: 3 }}>
                  {errorMessage}
                </Alert>
              )}

              {renderForm}
            </Card>
          </Stack>
        </div>
      </Box>
    </FormProvider>
  );
}
