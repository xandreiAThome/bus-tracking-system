import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Prisma } from "@/generated/prisma";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Validates the ID parameter of a route.
 * @param idParam is the id parameter
 * @returns A true if Id is valid, false otherwise
 */
export function validateIdParam(idParam: string | null): boolean {
  if (idParam === null) {
    return false;
  }
  const userIdNum = Number(idParam);
  if (!Number.isInteger(userIdNum) || userIdNum <= 0) {
    return false;
  }
  return true;
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
): "asc" | "desc" {
  const order = sortOrder?.toLowerCase();
  if (order === "asc" || order === "desc") {
    return order;
  }
  return "asc"; // default fallback
}

/**
 * Helper function to generate seat numbers
 */
export function generateSeatNumbers(capacity: number): string[] {
  const seats: string[] = [];
  for (let i = 1; i <= capacity; i++) {
    seats.push(`S${i.toString().padStart(2, "0")}`); // Formats as S01, S02, etc.
  }
  return seats;
}

function isPrismaClientValidationError(
  err: any
): err is Prisma.PrismaClientValidationError {
  return (
    err &&
    typeof err === "object" &&
    "name" in err &&
    err.name === "PrismaClientValidationError" &&
    typeof err.message === "string"
  );
}

function isPrismaClientKnownRequestError(
  err: any
): err is Prisma.PrismaClientKnownRequestError {
  return (
    err &&
    typeof err === "object" &&
    "code" in err &&
    typeof err.code === "string" &&
    (err.name === "PrismaClientKnownRequestError" ||
      err.name === "PrismaClientRustPanicError") // optional
  );
}
export function parseError(err: unknown): {
  status: number;
  message: string;
} {
  console.log(err);
  if (isPrismaClientKnownRequestError(err)) {
    switch (err.code) {
      case "P2000":
        return { status: 400, message: "Input for column/s too long" };
      case "P2002":
        return { status: 409, message: "Duplicate entry" };
      case "P2001":
      case "P2025":
        return { status: 404, message: "Record not found" };
      case "P2003":
        // Check if the error message contains specific foreign key constraint information
        const errorMessage = err.message || "";
        if (
          errorMessage.includes("cashier") ||
          errorMessage.includes("Cashier")
        ) {
          return { status: 400, message: "Please select a valid cashier" };
        } else if (
          errorMessage.includes("trip") ||
          errorMessage.includes("Trip")
        ) {
          return { status: 400, message: "Please select a valid trip" };
        }
        return {
          status: 400,
          message:
            "Invalid reference - please check that all required selections are made",
        };
      case "2011":
        return { status: 400, message: "Missing required fields" };
    }
  } else if (isPrismaClientValidationError(err)) {
    return {
      status: 400,
      message: "Invalid input: some fields are missing or malformed",
    };
  } else if (err instanceof Error) {
    return { status: 500, message: err.message || "Internal Server Error" };
  }
  return { status: 500, message: "Internal Server Error" };
}

export function formatTime(timeString: Date | string | null): string {
  if (!timeString) return "Unknown time";
  try {
    // Date object automatically converts to browser's local timezone
    const date = new Date(timeString);

    let hours = date.getHours(); // Browser automatically shows local time
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12

    return `${hours}:${minutes} ${ampm}`;
  } catch (error) {
    console.error("Error formatting time:", error, "Input:", timeString);
    return "Unknown time";
  }
}
