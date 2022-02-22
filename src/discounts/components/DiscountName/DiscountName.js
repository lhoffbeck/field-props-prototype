import { Card, TextField } from "@shopify/polaris";
import React from "react";

// props {onChange, value, error}
export function DiscountName(props) {
  return (
    <Card title="discount name" sectioned>
      <TextField {...props} />
    </Card>
  );
}
