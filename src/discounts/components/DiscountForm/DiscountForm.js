import React from "react";
import { useForm, useField } from "@shopify/react-form";

import { DiscountProvider } from "../../context";
import { useDiscountFields } from "../../context/use";

import { DiscountName } from "../DiscountName";

export function DiscountForm({ children, onSubmit }) {
  return (
    <DiscountProvider>
      <form onSubmit={onSubmit}>
        <>
          <DiscountName />
          {children}
        </>
      </form>
    </DiscountProvider>
  );
}
