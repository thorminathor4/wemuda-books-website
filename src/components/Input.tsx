import React from "react";
import {
  Input as ChakraInput,
  VStack,
  Text,
  HStack,
  InputProps,
} from "@chakra-ui/react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface Props {
  label: string;
  registeredForm: UseFormRegisterReturn;
  error?: FieldError;
}

const Input: React.FC<Props & InputProps> = (props) => {
  const { label, registeredForm, error, ...restProps } = props;
  return (
    <VStack alignItems="flex-start" mb="18px !important" w="full">
      <HStack justifyContent="space-between" w="full">
        <Text fontSize="13px" fontWeight="semibold">
          {label}
        </Text>
        {error && (
          <Text fontSize="12px" fontWeight="medium" color="red">
            {error.message}
          </Text>
        )}
      </HStack>

      <ChakraInput
        bg="#fff"
        borderColor="#fff"
        shadow="md"
        h={{ base: "50px", lg: "42px" }}
        rounded={{ base: "12px", lg: "8px" }}
        _focus={{ shadow: "lg" }}
        fontSize="16px"
        {...restProps}
        {...registeredForm}
      />
    </VStack>
  );
};

export default Input;