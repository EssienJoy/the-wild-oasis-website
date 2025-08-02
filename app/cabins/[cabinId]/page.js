import { getCabin, getCabins } from "@/app/_lib/data-service";
import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import Reservation from "@/app/_components/Reservation";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import Cabin from "@/app/_components/Cabin";
import ReservationReminder from "@/app/_components/ReservationReminder";

export async function generateMetadata({ params }) {
    const { name } = await getCabin(params.cabinId);

    return {
        title: `Cabin ${name}`
    };
}


export async function generateStaticParams() {
    const cabins = await getCabins();

    const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
    return ids;

}


export default async function Page({ params }) {

    const cabin = await getCabin(params.cabinId);



    return (
        <div className="max-w-6xl mx-auto mt-8">
            <Cabin cabin={cabin} />

            < Suspense fallback={<Spinner />}>
                <Reservation cabin={cabin} />
                <ReservationReminder />
            </Suspense>
        </div>

    );
}
