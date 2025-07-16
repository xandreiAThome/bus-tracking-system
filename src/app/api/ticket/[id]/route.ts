import { validateIdParam } from '@/lib/utils';
import { deleteTicket, getTicket } from '@features/ticket/services/crud';

/**
 * GET /api/ticket/[id]
 *
 * Gets a ticket's information based on the dynamic `id` parameter in the URL path.
 * Example request: GET /api/ticket/123
 *
 * Route param:
 * - id (string): ticket ID passed as part of the URL (e.g., /api/ticket/123)
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
 * Deletes a ticket based on the dynamic `id` parameter in the URL path.
 * Example request: DELETE /api/ticket/123
 *
 * Route param:
 * - id (string): ticket ID passed as part of the URL (e.g., /api/ticket/123)
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
