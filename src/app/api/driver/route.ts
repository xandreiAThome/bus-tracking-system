import { getAllDrivers } from '@/features/driver/services/crud';
import { addDriver } from '@/features/driver/services/crud';

/**
 * GET /api/driver
 *
 * Returns all drivers in the system.
 */
export async function GET() {
  return getAllDrivers()
}

/**
 * POST /api/driver
 *
 * Creates a new driver.
 * Expected JSON body:
 * {
 *   first_name: string,
 *   last_name: string,
 *   user_id: number
 * }
 */
export async function POST(req: Request) {
  const { first_name, last_name, user_id } = await req.json()

  if (!first_name || !last_name || user_id == null) {
    return Response.json(
      { message: 'Invalid input: one or more fields are missing' },
      { status: 400 }
    )
  }

  return addDriver(first_name, last_name, user_id)
}