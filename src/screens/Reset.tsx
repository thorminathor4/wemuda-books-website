import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button, Box } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../components/Input";
import axios from "axios";
import { useToast } from "@chakra-ui/toast";

type FormData = {
  password: string;
  confirmPassword: string;
};

const baseUrl = process.env.BASE_URL ?? 'http://localhost:5001'
console.log(baseUrl)

function Reset() {
  const toast = useToast();
  const [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [state, setState] = useState<{ loading: boolean; success: boolean }>({
    loading: false,
    success: false,
  });

  if (!token) {
    window.location.href = "/";
  }

  const schema: yup.SchemaOf<FormData> = yup.object({
    password: yup
      .string()
      .min(6, "Too short")
      .max(30, "Too long")
      .required("Required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "The password must match")
      .required("Required"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {},
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setState({ ...state, loading: true });

    toast({
      title: "Resetting your password.. Please wait",
      duration: 5000,
      isClosable: true,
    });

    axios
      .post(
        baseUrl + `/user/resetPassword?token=${token}`,
        {
          newPassword: data.password,
        }
      )
      .then((res) => {
        toast({
          title: "Success",
          description: "Your password has been changed",
          duration: 2000,
          isClosable: true,
          status: "success",
        });
        setState({ ...state, success: true });
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: "Something went wrong!",
          duration: 1000,
          isClosable: true,
          status: "error",
        });
      });
    setState({ ...state, loading: false });

  };

  return (
    <div className="bg-brand-bg relative h-full flex flex-col items-center">
      <div style={{ width: "92%", maxWidth: "380px", marginTop: "20px" }}>
        {!state.success ? 
          <>
            <h1 style={{ fontSize: "26px", fontWeight: "800" }}>
              Reset password
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{ marginTop: "30px" }}
            >
              <Input
                label="New Password"
                registeredForm={register("password")}
                error={errors.password}
                type="password"
                placeholder="New password"
              />
              <Input
                label="Confirm password"
                registeredForm={register("confirmPassword")}
                error={errors.confirmPassword}
                type="password"
                placeholder="Confirm password"
              />
              <Button
                bg="#12141A"
                color="#fff"
                h="50px"
                colorScheme={"blackAlpha"}
                rounded="10px"
                w="full"
                isLoading={state.loading}
                type="submit"
                _hover={{ bg: "#12141A" }}
                fontSize="14px"
              >
                RESET
              </Button>
            </form>
          </>
         : (
          <h1 style={{ fontSize: "24px", fontWeight: "800" }}>
            Your password has been successfully changed!
          </h1>
        )}
      </div>
    </div>
  );
}

export default Reset;