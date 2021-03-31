import { QueryClient } from "react-query";

export type Event = {
  target: {
    name: any;
    value: any;
  };
};

export type CalculatorFormProps = {
  queryClient: QueryClient;
};

export type Sum = {
  sum: number;
};
