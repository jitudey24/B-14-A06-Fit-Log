import LibraryDetailsCard from "@/app/components/shared/LibraryDetailsCard";
import { ILibrary } from "@/types/library.type";

interface LibraryDetailsPageProps {
  params: Promise<{
    workoutId: string;
  }>;
}

const LibraryDetailsPage = async ({
  params,
}: LibraryDetailsPageProps) => {
  const { workoutId } = await params;

  // Get all workouts from API
  const res = await fetch(
    `https://api.abcz.workers.dev/api/fitlog`);

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const workouts: ILibrary[] = await res.json();

  // Find the workout by id
  const library = workouts.find(
    (workout) => String(workout.id) === String(workoutId)
  );

  // If workout doesn't exist
  if (!library) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <h1 className="text-2xl font-bold text-white">
          Workout not found
        </h1>
      </div>
    );
  }

  // Send workout data to LibraryDetailsCard
  return <LibraryDetailsCard library={library} />;
};

export default LibraryDetailsPage;

