import { getAllPassengerTickets } from "@features/ticket/services/crud";

/**
 * GET /api/ticket/passenger
 *
 * Retrieves all passenger tickets.
 *
 * @returns {Response} 200 OK - Returns JSON array of passenger tickets.
 * @returns {Response} 404 Not Found - If no passenger tickets found.
 * @returns {Response} 500 Internal Server Error - On unexpected errors.
 */
export async function GET() {
  return getAllPassengerTickets();
}