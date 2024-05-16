"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ITripadvisor } from "@/interfaces/ITripadvisor";
import { myAxiosTripAdvisor } from "@/lib/axios";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";
import { FaSpinner, FaStar, FaStarHalf } from "react-icons/fa6";

export default function Home() {
  const [data, setData] = useState<ITripadvisor | null>(null);
  const [price, setPrice] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [filterParameter, setFilterParameter] = useState<{
    openNow: boolean | string;
    price: string;
    categories: string;
  }>({
    openNow: false,
    price: "",
    categories: "",
  });
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
  const getData = () => {
    if (loading) return;
    myAxiosTripAdvisor
      .get(
        "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants",
        {
          params: {
            locationId: "294226",
            page: currentPage,
          },
        }
      )
      .then((res) => {
        if (data) {
          res.data.data.data = [...data.data.data, ...res.data.data.data];
        }
        setData(res.data);
        setLoading(false);
      });
  };
  useEffect(() => {
    setLoading(true);
    getData();
  }, [currentPage]);
  useEffect(() => {
    if (data) {
      const priceSet = new Set<string>();
      const categoriesSet = new Set<string>();
      data.data.data.forEach((item) => {
        priceSet.add(item.priceTag);
        item.establishmentTypeAndCuisineTags.forEach((tag) => {
          categoriesSet.add(tag);
        });
      });
      setPrice(Array.from(priceSet));
      setCategories(Array.from(categoriesSet));
    }
  }, [data]);
  return (
    <main className="flex min-h-screen flex-col p-12">
      <p className="text-5xl">Restaurants</p>
      <p className="w-2/4 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolore
        cum eius quae sed esse, similique rerum, voluptatum quasi nemo earum
        distinctio suscipit adipisci libero aliquam consectetur. Voluptas,
        explicabo adipisci!
      </p>
      <div className="py-3 mt-3 mb-6 border-y-2 flex flex-row items-center">
        <div className="flex items-center">
          <p>Filter by : </p>
        </div>
        <div className="flex items-center space-x-2 mx-2">
          <Checkbox
            id="openNow"
            onCheckedChange={(checked) => {
              setFilterParameter({ ...filterParameter, openNow: checked });
            }}
            checked={filterParameter.openNow == true}
          />
          <label
            htmlFor="openNow"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Open Now
          </label>
        </div>
        <Select
          onValueChange={(value) => {
            setFilterParameter({ ...filterParameter, price: value });
          }}
          value={filterParameter.price}
        >
          <SelectTrigger className="mx-2 w-min">
            <SelectValue placeholder="Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Price</SelectLabel>
              {price.map((item, index) => (
                <SelectItem key={index} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select
          onValueChange={(value) => {
            setFilterParameter({ ...filterParameter, categories: value });
          }}
          value={filterParameter.categories}
        >
          <SelectTrigger className="mx-2 w-min">
            <SelectValue placeholder="Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categories</SelectLabel>
              {categories.map((item, index) => (
                <SelectItem key={index} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="grow"></div>
        <Button
          onClick={(e) => {
            e.preventDefault();
            setFilterParameter({
              openNow: false,
              price: "",
              categories: "",
            });
          }}
        >
          CLEAR ALL
        </Button>
      </div>
      <div className="py-3 grid grid-cols-4 gap-4">
        {data?.data.data.map((item, index) => {
          if (
            filterParameter.openNow &&
            item.currentOpenStatusCategory !== "OPEN"
          )
            return null;
          if (filterParameter.price && item.priceTag !== filterParameter.price)
            return null;
          if (
            filterParameter.categories &&
            !item.establishmentTypeAndCuisineTags.includes(
              filterParameter.categories
            )
          )
            return null;
          return (
            <Card key={index} className="flex flex-col justify-between">
              <CardHeader>
                <img
                  src={
                    "https://" +
                    new URL(item.heroImgUrl).hostname +
                    new URL(item.heroImgUrl).pathname
                  }
                  alt="gambar"
                />
                <CardTitle>{item.name}</CardTitle>
                <CardDescription className="flex flex-col items-start">
                  <div className="flex flex-row items-center">
                    {printRatingStar(item.averageRating)}
                  </div>
                  <div className="flex flex-row w-full justify-between">
                    <div>
                      {!item.establishmentTypeAndCuisineTags
                        .slice(0, 3)
                        .includes(filterParameter.categories) &&
                      filterParameter.categories
                        ? [
                            filterParameter.categories,
                            item.establishmentTypeAndCuisineTags.slice(0, 2),
                          ].join(", ")
                        : item.establishmentTypeAndCuisineTags
                            .slice(0, 3)
                            .join(", ")}
                      {" - "}
                      {item.priceTag}
                    </div>
                    <div>
                      {item.currentOpenStatusCategory === "OPEN" ? (
                        <div className="flex flex-row items-center">
                          <FaCircle className="text-green-500" />
                          <span className="ml-1">
                            {item.currentOpenStatusText}
                          </span>
                        </div>
                      ) : (
                        <div className="flex flex-row items-center">
                          <FaCircle className="text-red-500" />
                          <span className="ml-1">
                            {item.currentOpenStatusText}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="w-full bg-blue-500" asChild>
                  <Link href={`/detail/${item.restaurantsId}`}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
      {!loading || (
        <div className="py-3 flex items-center justify-center">
          <FaSpinner className="animate-spin" />
        </div>
      )}
      {loading || (
        <div className="py-3 flex items-center justify-center">
          <Button
            className="w-1/4"
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
          >
            LOAD MORE
          </Button>
        </div>
      )}
    </main>
  );
}
