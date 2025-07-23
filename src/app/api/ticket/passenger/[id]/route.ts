import { validateIdParam } from "@/lib/utils";
import { getPassengerTicketByTicketId } from "@features/ticket/services/crud";

/**
 * GET /api/ticket/passenger/[id]
 *
 * Gets passenger ticket information based on the dynamic `id` parameter (ticket_id).
 * Example request: GET /api/ticket/passenger/123
 *
 * Route param:
 * - id (string): ticket ID passed as part of the URL (e.g., /api/ticket/passenger/123)
 */
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = validateIdParam(params.id);
  if (id instanceof Response) {
    return id;
  }

  const passengerTicket = await getPassengerTicketByTicketId(id);
  if (!passengerTicket) {
    return new Response(
      JSON.stringify({ message: "Passenger ticket not found" }),
      { status: 404, headers: { "Content-Type": "application/json" } }
    );
  }
  return new Response(JSON.stringify({ passengerTicket }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}