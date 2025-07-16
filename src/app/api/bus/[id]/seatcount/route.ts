import { validateIdParam } from '@/lib/utils';
import { getSeatCountByBus } from '@features/seat/services/crud';

/**
 * GET /api/bus/[id]/seatcount
 *
 * Gets the number of seats associated with a bus based on the dynamic `id` parameter.
 * Example request: GET /api/bus/123/seatcount
 *
 * Route param:
 * - id (string): bus ID passed as part of the URL (e.g., /api/bus/123/seatcount)
 */
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = validateIdParam((await params).id);
  if (id instanceof Response) {
    return id;
  } else {
    return getSeatCountByBus(id);
  }
}
