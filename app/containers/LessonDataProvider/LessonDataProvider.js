import * as React from "react";
import QueryProvider, { QueryProviderContext } from "../QueryProvider";
import { useContext } from "react";
import context from "../QueryProvider/context";

// TODO: refactor this maybe
export default WrappedComponent => props => { // curry
  const sampleCtx = useContext(context);
  
  return (
    <WrappedComponent
      {...props}
      {...sampleCtx}
    />
  );
};