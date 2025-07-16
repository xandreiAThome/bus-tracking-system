import { validateIdParam } from '@/lib/utils';
import { deleteTrip, getTrip } from '@features/trip/services/crud';

/**
 * GET /api/trip/[id]
 *
 * Gets a trip's information based on the dynamic `id` parameter in the URL path.
 * Example request: GET /api/trip/123
 *
 * Route param:
 * - id (string): trip ID passed as part of the URL (e.g., /api/trip/123)
 */
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = validateIdParam((await params).id);
  if (id instanceof Response) {
    return id;
  } else {
    return getTrip(id);
  }
}

/**
 * DELETE /api/trip/[id]
 *
 * Deletes a trip based on the dynamic `id` parameter in the URL path.
 * Example request: DELETE /api/trip/123
 *
 * Route param:
 * - id (string): trip ID passed as part of the URL (e.g., /api/trip/123)
 */
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = validateIdParam((await params).id);
  if (id instanceof Response) {
    return id;
  } else {
    return deleteTrip(id);
  }
}
