import { validateIdParam } from "@/lib/utils";
import { deleteTicket, getTicket } from "@features/ticket/services/crud";

/**
 * GET /api/ticket/[id]
 *
 * Retrieves a ticket's information based on the `id` parameter in the URL path.
 *
 * Route param:
 * - id (string): Ticket ID (e.g., /api/ticket/1)
 *
 * Example request:
 * GET /api/ticket/1
 *
 * @param {Request} req - Incoming request object.
 * @param {Object} params - URL parameters object containing:
 *   @param {string} id - The ticket ID to retrieve.
 *
 * @returns {Response} 200 OK - Returns a JSON object with the ticket data:
 * {
 *   "ticket": {
 *     "id": number,
 *     "price": string,
 *     "trip_id": number,
 *     "cashier_id": number,
 *     "ticket_type": string
 *     // ...other fields
 *   }
 * }
 *
 * @returns {Response} 400 Bad Request - If `id` is invalid.
 * @returns {Response} 404 Not Found - If no ticket exists with the given ID.
 * @returns {Response} 500 Internal Server Error - For unexpected errors.
 */
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = validateIdParam((await params).id);
  if (id instanceof Response) {
    return id;
  } else {
    return getTicket(id);
  }
}

/**
 * DELETE /api/ticket/[id]
 *
 * Deletes a ticket based on the `id` parameter in the URL path.
 *
 * Route param:
 * - id (string): Ticket ID (e.g., /api/ticket/1)
 *
 * Example request:
 * DELETE /api/ticket/1
 *
 * @param {Request} req - Incoming request object.
 * @param {Object} params - URL parameters object containing:
 *   @param {string} id - The ticket ID to delete.
 *
 * @returns {Response} 200 OK - Returns confirmation of deletion:
 * {
 *   "message": "Ticket deleted successfully",
 *   "id": number
 * }
 *
 * @returns {Response} 400 Bad Request - If `id` is invalid.
 * @returns {Response} 404 Not Found - If no ticket exists with the given ID.
 * @returns {Response} 500 Internal Server Error - For unexpected errors.
 */
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = validateIdParam((await params).id);
  if (id instanceof Response) {
    return id;
  } else {
    return deleteTicket(id);
  }
}
