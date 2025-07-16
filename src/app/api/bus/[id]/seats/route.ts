import { validateIdParam, validateSortOrder } from '@/lib/utils';
import { getSeatsByBus } from '@features/seat/services/crud';

/**
 * GET /api/bus/[id]/seats
 *
 * Gets the seats associated with a bus based on the dynamic `id` parameter.
 * Example request: GET /api/bus/123/seats
 *
 * Route param:
 * - id (string): bus ID passed as part of the URL (e.g., /api/bus/123/seats)
 *
 * Optional param:
 * - sortOrder (string): sort order, either `ASC` or `DESC`
 */
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = validateIdParam((await params).id);
  const url = new URL(req.url);
  const rawSortOrder = url.searchParams.get('sortOrder');

  const validatedSortOrder = validateSortOrder(rawSortOrder);

  if (id instanceof Response) {
    return id;
  } else {
    return getSeatsByBus(id, validatedSortOrder);
  }
}
