import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
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
  if (err.code === "ER_DUP_ENTRY") {
    return Response.json({message: "Duplicate Entry Error"}, {status: 409});
  } else if (err.code === "ER_NO_REFERENCED_ROW_2") {
    return Response.json({message: "Related Record Not Found"}, {status: 400});
  } else if (err.code === "ER_ROW_IS_REFERENCED_2") {
    return Response.json({message: "Row is currently referenced"}, {status: 409});
  } else {
    return Response.json({message: "Internal Server Error"}, {status: 500});
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
    const pad = (n: number) => n.toString().padStart(2, '0');

    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1); // months are 0-based
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}