import { Response } from "express";

export const handleControllerError = (
  status: number,
  error: unknown,
  res: Response
) => {
  if (error instanceof Error) {
    console.log(error.message);
    res.status(status).json({ message: error.message });
  } else {
    console.log("Unexpected error", error);
    res.status(500).json({ message: "Unexpected error occurred" });
  }
};

interface checkResourceExistenceParams {
  repository: any;
  method: string;
  identifier: string | number;
  errorMessage: string;
  exists?: boolean;
}

export async function checkResourceExistence({
  repository,
  method,
  identifier,
  errorMessage,
  exists = true,
}: checkResourceExistenceParams) {
  const result = await repository[method](identifier);
  const condition = exists ? !result : result;

  if (condition) {
    throw new Error(errorMessage);
  }

  return result;
}
