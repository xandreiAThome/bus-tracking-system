import { getAllBaggageTickets } from "@features/ticket/services/crud";

/**
 * GET /api/ticket/baggage
 *
 * Retrieves all baggage tickets.
 *
 * @returns {Response} 200 OK - Returns JSON array of baggage tickets.
 * @returns {Response} 404 Not Found - If no baggage tickets found.
 * @returns {Response} 500 Internal Server Error - On unexpected errors.
 */
export async function GET() {
  return getAllBaggageTickets();
}
