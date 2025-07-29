// bus-tracking-system-main/src/app/api/bus/[id]/route.ts

import { validateIdParam } from "@/lib/utils";
import { getBusByID, deleteBus, editBus } from "@/features/bus/services/crud";

/**
 * GET /api/bus/[id]
 *
 * Fetch a single bus by its URL‐segment ID.
 */
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = validateIdParam((await params).id);
  if (id instanceof Response) return id;
  return getBusByID(id);
}

/**
 * DELETE /api/bus/[id]
 *
 * Remove a bus by its URL‐segment ID.
 */
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = validateIdParam((await params).id);
  if (id instanceof Response) return id;
  return deleteBus(id);
}

/**
 * PATCH /api/bus/[id]
 *
 * Update an existing bus.
 * Expected JSON body:
 * {
 *   plate_number: string,
 *   station_id: number,
 *   capacity: number,
 * }
 */
export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = validateIdParam((await params).id);
  if (id instanceof Response) return id;

  try {
    const body = await req.json();
    const { plate_number, station_id, capacity } = body;
    // Only allow update if at least one field is present
    if (
      plate_number === undefined &&
      station_id === undefined &&
      capacity === undefined
    ) {
      return Response.json(
        {
          message:
            "At least one field (plate_number, station_id, capacity) must be provided",
        },
        { status: 400 }
      );
    }

    return editBus(id, { plate_number, station_id, capacity });
  } catch (err) {
    console.error("PATCH /api/bus/[id] error:", err);
    return Response.json(
      { message: "Invalid request body or internal error" },
      { status: 500 }
    );
  }
}
