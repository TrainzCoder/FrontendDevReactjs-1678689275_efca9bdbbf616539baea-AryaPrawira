"use client";
import { ITripadvisorDetail } from "@/interfaces/ITripadvisorDetail";
import { myAxiosTripAdvisor } from "@/lib/axios";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

function DetailPage({ params }: { params: { slug: string } }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<ITripadvisorDetail | null>(null);
  useEffect(() => {
    setLoading(true);
    myAxiosTripAdvisor
      .get(
        "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/getRestaurantDetails",
        {
          params: {
            restaurantsId: params.slug,
          },
        }
      )
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {!loading || (
        <div className="py-3 flex items-center justify-center">
          <FaSpinner className="animate-spin" />
        </div>
      )}
      {loading || <div>DetailPage {data?.data.location.name}</div>}
    </>
  );
}

export default DetailPage;
