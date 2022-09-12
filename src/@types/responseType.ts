// export type RequestType = {
//   sum: number;
//   from: number;
//   to: number;
// };

// export type ResponseType =
//   | {
//       status: "success";
//       data: { databaseId: number } & RequestType;
//     }
//   | {
//       status: "failed";
//       data: {
//         errorMessage: string;
//         errorCode: number;
//       };
//     };

// const response: ResponseType = {
//   status: "failed",
//   data: {
//     errorCode: 3,
//     errorMessage: "few",
//   },
// };
// const response2: ResponseType = {
//   status: "success",
//   data: {
//     databaseId: 5,
//     from: 5,
//     sum: 100,
//     to: 4,
//   },
// };

export enum PaymentStatus {
  Success = "success",
  Failed = "failed",
}

interface IPayment {
  sum: number;
  from: number;
  to: number;
}

interface IPaymentRequest extends IPayment {}

interface IResponseFailed {
  status: PaymentStatus.Failed;
  data: {
    errorMessage: string;
    errorCode: number;
  };
}

interface IResponseSuccess {
  status: PaymentStatus.Success;
  data: { databaseId: number } & IPayment;
}

export const func = (param: number): IResponseFailed | IResponseSuccess => {
  if (param === 1) {
    const obj: IResponseSuccess = {
      status: PaymentStatus.Success,
      data: {
        databaseId: 1,
        from: 2,
        sum: 23,
        to: 32,
      },
    };
    return obj;
  }
  const obj: IResponseFailed = {
    status: PaymentStatus.Failed,
    data: {
      errorCode: 4,
      errorMessage: "ERROR",
    },
  };
  return obj;
};
