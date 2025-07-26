import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Extracts the parameter taken from a ParsedUrlQuery as a single string
 * @param queryParam The query parameter
 * @returns The parameter if it is a string, the first element if it is an array of strings
 * @throws If the parameter is undefined
 */
export function extractParamAsString(
  queryParam: string | string[] | undefined
): string {
  if (Array.isArray(queryParam)) {
    return queryParam[0];
  }
  if (queryParam === undefined) {
    throw new Error("Missing query parameter");
  }
  return queryParam;
}

/**
 * Validates the ID parameter of a route.
 * @param idParam is the id parameter
 * @returns A valid integer number if id is valid, else a Response with Error
 */
export function validateIdParam(idParam: string | null): number | Response {
  if (idParam === null) {
    return Response.json(
      { message: "Missing required parameter: id" },
      { status: 400 }
    );
  }
  const userIdNum = Number(idParam);
  if (!Number.isInteger(userIdNum)) {
    return Response.json(
      { message: "Invalid input: id is invalid" },
      { status: 400 }
    );
  }
  return userIdNum;
}

/**
 * Catches common DB errors and returns the appropriate HTTP Response
 * @param err is the error
 * @returns An HTTP Error Response
 */
export function catchDBError(err: any) {
  const errorName = err?.constructor?.name;
  console.error("DB Error:", err, err?.constructor?.name);
  // Match Prisma known request errors by constructor name
  if (errorName === "PrismaClientKnownRequestError") {
    switch (err.code) {
      case "P2002":
        return Response.json(
          { message: "Duplicate Entry Error (unique constraint failed)." },
          { status: 409 }
        );
      case "P2003":
        const message = err.message.toLowerCase();
        if (message.includes("delete") || message.includes("foreign key constraint failed on delete")) {
          return Response.json(
            { message: "Delete failed: related records exist and prevent deletion." },
            { status: 409 }
          );
        } else if (message.includes("insert") || message.includes("update") || message.includes("create")) {
          return Response.json(
            { message: "Operation failed: referenced foreign key does not exist." },
            { status: 400 }
          );
        } else {
          // fallback generic message
          return Response.json(
            { message: "Foreign key constraint violated." },
            { status: 400 }
          );
        }
      case "P2025":
        return Response.json(
          { message: "Record not found." },
          { status: 404 }
        );
      case "P2025":
      case "P2001":
        return Response.json({ message: "Record not found." }, { status: 404 });
      case "P2011":
        return Response.json({ message: "Missing required field." }, { status: 400 });
      default:
        return Response.json(
          { message: "Database error occurred." },
          { status: 500 }
        );
    }
  }

  // Match Prisma validation errors by constructor name
  if (errorName === "PrismaClientValidationError") {
    return Response.json(
      { message: "Validation error: Invalid input data" },
      { status: 400 }
    );
  }

  // SQL Errors
  if (err.code === "ER_DUP_ENTRY") {
    return Response.json({ message: "Duplicate Entry Error" }, { status: 409 });
  } else if (err.code === "ER_NO_REFERENCED_ROW_2") {
    return Response.json(
      { message: "Related Record Not Found" },
      { status: 400 }
    );
  } else if (err.code === "ER_ROW_IS_REFERENCED_2") {
    return Response.json(
      { message: "Row is currently referenced" },
      { status: 409 }
    );
  } else if (err.code === "WARN_DATA_TRUNCATED") {
    return Response.json(
      {
        message:
          "Data truncation error: Invalid or too long data, possibly invalid ENUM value",
      },
      { status: 400 }
    );
  } else {
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

/**
 * Converts a string to a new formattable timestamp
 */
export function toSQLTimestamp(input: string): string {
  const date = new Date(input);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date string");
  }

  // Format as YYYY-MM-DD HH:MM:SS
  const pad = (n: number) => n.toString().padStart(2, "0");

  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1); // months are 0-based
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

/**
 * Validates if a string matches DECIMAL(6, 2)
 * @param value value to be validated in string format
 * @returns True if valid; False otherwise
 */
export function validateDecimal6_2(value: string): boolean {
  const num = Number(value);
  if (isNaN(num)) return false;
  if (num < -9999.99 || num > 9999.99) {
    return false;
  }

  const str = num.toString();
  const regex = /^-?\d{1,4}(\.\d{1,2})?$/;
  if (!regex.test(str)) {
    return false;
  }

  const digitsOnly = str.replace(".", "").replace("-", "");
  if (digitsOnly.length > 6) {
    return false;
  }

  return true;
}

/**
 * Validates Sort Order (checks if it marches ASC or DESC)
 */
export function validateSortOrder(
  sortOrder: string | null | undefined
): "ASC" | "DESC" {
  const order = sortOrder?.toUpperCase();
  if (order === "ASC" || order === "DESC") {
    return order;
  }
  return "ASC"; // default fallback
}
