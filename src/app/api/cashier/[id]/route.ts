import { validateIdParam } from "@/lib/utils";
import {
  getCashier,
  deleteCashier,
  editCashier,
} from "@/features/cashier/services/crud";

/**
 * GET /api/cashier/[id]
 *
 * Fetches a single cashier by ID.
 */
export async function GET(req: Request, context: { params: { id: string } }) {
  const { params } = await Promise.resolve(context);
  const id = validateIdParam(params.id);
  if (id instanceof Response) return id;
  return getCashier(id);
}

/**
 * DELETE /api/cashier/[id]
 *
 * Removes a cashier by ID.
 */
export async function DELETE(
  req: Request,
  context: { params: { id: string } }
) {
  const { params } = await Promise.resolve(context);
  const id = validateIdParam(params.id);
  if (id instanceof Response) return id;
  return deleteCashier(id);
}

/**
 * PATCH /api/cashier/[id]
 *
 * Updates an existing cashier.
 * Expected JSON body:
 * {
 *   first_name: string,
 *   last_name: string,
 *   user_id: number,
 *   station_id: number
 * }
 */
export async function PATCH(req: Request, context: { params: { id: string } }) {
  const { params } = await Promise.resolve(context);
  const id = validateIdParam(params.id);
  if (id instanceof Response) return id;

  try {
    const body = await req.json();
    // Only allow update if at least one field is present in the body
    if (Object.keys(body).length === 0) {
      return Response.json(
        {
          message: "At least one field must be provided in the request body",
        },
        { status: 400 }
      );
    }
    return editCashier(id, body);
  } catch (err) {
    console.error("PATCH /api/cashier/[id] error:", err);
    return Response.json(
      { message: "Invalid request body or internal error" },
      { status: 500 }
    );
  }
}
