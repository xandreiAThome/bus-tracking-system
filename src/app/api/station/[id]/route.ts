import { validateIdParam } from "@/lib/utils";
import { getStation, deleteStation } from "@features/station/services/crud";

/**
 * GET /api/station/[id]
 *
 * Retrieves a station's information based on the `id` parameter in the URL path.
 *
 * Route param:
 * - id (string): Station ID (e.g., /api/station/1)
 *
 * Example request:
 * GET /api/station/1
 */
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = validateIdParam((await params).id);
  if (id instanceof Response) return id;
  return getStation(id);
}

/**
 * DELETE /api/station/[id]
 *
 * Deletes a station based on the dynamic `id` parameter in the URL path.
 *
 * Route param:
 * - id (string): Station ID (e.g., /api/station/1)
 *
 * Example request:
 * DELETE /api/station/1
 */
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = validateIdParam((await params).id);
  if (id instanceof Response) return id;
  return deleteStation(id);
}
