import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@brinmi";
import * as Actions from "./../../store/actions";
import { usePaystackPayment } from "react-paystack";

function PaystackWizard() {
  const dispatch = useDispatch();

  const config = {
    reference: new Date().getTime(),
    email: "samwize.inc@gmail.com",
    amount: 20000,
    publicKey: process.env.REACT_APP_PAYSTACK_KEY,
  };

  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    dispatch(Actions.openAuthorDialog(reference));
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const PaystackHook = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <div>
        <Button
          size="large"
          rounded
          onClick={() => {
            initializePayment(onSuccess, onClose);
          }}
        >
          Become an author
        </Button>
      </div>
    );
  };

  return (
    <div>
      <PaystackHook />
    </div>
  );
}

export default PaystackWizard;
