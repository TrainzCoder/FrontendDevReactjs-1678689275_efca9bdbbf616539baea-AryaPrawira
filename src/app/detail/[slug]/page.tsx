"use client";
import { Button } from "@/components/ui/button";
import { ITripadvisorDetail } from "@/interfaces/ITripadvisorDetail";
import { myAxiosTripAdvisor } from "@/lib/axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSpinner, FaStar, FaStarHalf, FaCircle, FaChevronCircleLeft } from "react-icons/fa";

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
        console.log(res.data);
        setLoading(false);
      });
  }, []);

  const printRatingStar = (rating: number) => {
    const fullStarComponent = <FaStar />;
    const halfStarComponent = <FaStarHalf />;

    const starComponent = [];

    for (let i = 0; i < Math.floor(rating); i++) {
      starComponent.push(fullStarComponent);
    }

    if (rating % 1 > 0) {
      starComponent.push(halfStarComponent);
    }

    return starComponent;
  };

  return (
    <>
      {!loading || (
        <div className="py-3 flex items-center justify-center">
          <FaSpinner className="animate-spin" />
        </div>
      )}
      {loading || (
        <div className="py-8 px-4 md:px-8">
          <Button className="w-max bg-[#243169] mb-5" asChild>
            <Link href="/">
              <FaChevronCircleLeft className="mr-2" />
              BACK
              </Link>
          </Button>

          <h2 className="text-2xl mb-3">{data?.data?.location.name}</h2>

          <div className="flex gap-4 mb-5 text-base text-gray-600">
            <p>{data?.data?.location.address}</p>
            <p>{data?.data?.location.phone}</p>
          </div>

          <img
            src={data?.data?.location.photo.images.original.url}
            alt={data?.data?.location.name}
            className="w-full rounded-[10px] h-[500px] object-cover"
          />

          <div className="mt-5">
            <h3 className="text-xl mb-1">Overview</h3>
            {/* rating star */}
            <div className="flex gap-1 text-yellow-500">
              {printRatingStar(data?.data?.overview.rating.primaryRating)}
            </div>

            {/* status open */}
            <div className="mt-3">
              {data?.data?.hours.openStatus === "OPEN" ? (
                <div className="flex flex-row items-center min-w-max">
                  <FaCircle className="text-green-500" />
                  <span className="ml-1 uppercase text-xs">
                    {data?.data?.hours.openStatusText}
                  </span>
                </div>
              ) : (
                <div className="flex flex-row items-center">
                  <FaCircle className="text-red-500 " />
                  <span className="ml-1 uppercase text-xs">
                    {data?.data?.hours.openStatusText}
                  </span>
                </div>
              )}
            </div>

            {/* open hours */}
            <div className="mt-3">
              <h4 className="text-lg">Open Hours</h4>
              <p className="text-base text-gray-600">
                {data?.data?.hours.hoursTodayText}
              </p>
            </div>

            {/* Price */}
            <div className="mt-3">
              <h4 className="text-lg">Price</h4>
              <p className="text-base text-gray-600">
                {data?.data?.location.price}
              </p>
            </div>

            <p className="text-base text-gray-600 mt-5">
              {data?.data?.location.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailPage;
