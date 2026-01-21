<<<<<<< HEAD
import SubmitButton from "@/app/_components/SubmitButton";
=======
>>>>>>> 7c8bc53f0aad881f88aefd4e7fb4181c95503bb5
import { updateBooking } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  const { bookingId } = params;
<<<<<<< HEAD
  const { numGuests, observations, cabinId } = await getBooking(bookingId);
  const { maxCapacity } = await getCabin(cabinId);

=======

  const { numGuests, observations, cabinId } = await getBooking(bookingId);
  const { maxCapacity } = await getCabin(cabinId);


>>>>>>> 7c8bc53f0aad881f88aefd4e7fb4181c95503bb5
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{bookingId}
      </h2>

<<<<<<< HEAD
      <form
        action={updateBooking}
        className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
      >
        <input type="hidden" value={bookingId} name="bookingId" />

=======
      <form className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col" action={updateBooking}>
        <input type="hidden" name="bookingId" value={bookingId} />
>>>>>>> 7c8bc53f0aad881f88aefd4e7fb4181c95503bb5
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
<<<<<<< HEAD
            defaultValue={numGuests}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
=======
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            defaultValue={numGuests}
>>>>>>> 7c8bc53f0aad881f88aefd4e7fb4181c95503bb5
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
<<<<<<< HEAD
            defaultValue={observations}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
=======
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            defaultValue={observations}
>>>>>>> 7c8bc53f0aad881f88aefd4e7fb4181c95503bb5
          />
        </div>

        <div className="flex justify-end items-center gap-6">
<<<<<<< HEAD
          <SubmitButton pendingLabel="Updating...">
            Update reservation
          </SubmitButton>
=======
          <button className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
            Update reservation
          </button>
>>>>>>> 7c8bc53f0aad881f88aefd4e7fb4181c95503bb5
        </div>
      </form>
    </div>
  );
}
