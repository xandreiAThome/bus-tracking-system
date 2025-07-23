import { validateIdParam } from "@/lib/utils";
import { getBaggageTicketByTicketId } from "@features/ticket/services/crud";

/**
 * GET /api/ticket/baggage/[id]
 *
 * Gets baggage ticket information based on the dynamic `id` parameter (ticket_id).
 * Example request: GET /api/ticket/baggage/123
 *
 * Route param:
 * - id (string): ticket ID passed as part of the URL (e.g., /api/ticket/baggage/123)
 */
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = validateIdParam(params.id);
  if (id instanceof Response) {
    return id;
  }

  const baggageTicket = await getBaggageTicketByTicketId(id);
  if (!baggageTicket) {
    return new Response(
      JSON.stringify({ message: "Baggage ticket not found" }),
      { status: 404, headers: { "Content-Type": "application/json" } }
    );
  }
  return new Response(JSON.stringify({ baggageTicket }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}