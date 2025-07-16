import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import TripCard from '@/features/trips/components/tripCard';

const dummyTrips = [
  {route: 'ALLEN → CATARMAN', time: '9:00 PM', driver: 'Juan Dela Cruz'},
  {route: 'MANILA → DAVAO', time: '9:00 PM', driver: 'Rage Del Fiero'}
]

export default function TripsOverview() {
  return (
    <div className=' justify-center '>
      <Card className='p-5'>
        {dummyTrips.map((trip, index) => (
          <TripCard
            key={index}
            route={trip.route}
            time={trip.time}
            driver={trip.driver}
          />
        ))}
        <div className='flex mt-4 justify-center'>
          <Button className='w-[80%] bg-[#71AC61] hover:bg-[#456A3B] font-bold text-xl rounded-lg'>
            Create Trip
          </Button>
        </div>
      </Card>
    </div>
  );
}
