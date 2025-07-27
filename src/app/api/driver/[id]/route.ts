import { validateIdParam } from '@/lib/utils'
import { getDriver, deleteDriver, editDriver } from '@/features/driver/services/crud'

/**
 * GET /api/driver/[id]
 *
 * Fetches a single driver by ID.
 */
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = validateIdParam(params.id)
  if (id instanceof Response) return id
  return getDriver(id)
}

/**
 * DELETE /api/driver/[id]
 *
 * Removes a driver by ID.
 */
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = validateIdParam(params.id)
  if (id instanceof Response) return id
  return deleteDriver(id)
}

/**
 * PATCH /api/driver/[id]
 *
 * Updates an existing driver.
 * Expected JSON body:
 * {
 *   first_name: string,
 *   last_name: string,
 *   user_id: number
 * }
 */
export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = validateIdParam(params.id)
  if (id instanceof Response) return id

  try {
    const { first_name, last_name, user_id } = await req.json()

    if (!first_name || !last_name || user_id == null) {
      return Response.json(
        { message: 'Missing required fields' },
        { status: 400 }
      )
    }

    return editDriver(id, first_name, last_name, user_id)
  } catch (err) {
    console.error('PATCH /api/driver/[id] error:', err)
    return Response.json(
      { message: 'Invalid request body or internal error' },
      { status: 500 }
    )
  }
}
