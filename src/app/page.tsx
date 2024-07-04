
import Card from "./components/Card";
import { Suspense } from "react";
import Skeleton from "./components/Skeleton";
import { header } from "./fonts";

export default function Home() {
  return (
    <div className="text-black ms-5">
      <span style={{ fontSize: "10px" }} className=" text-gray-500">
        Home/Packages
      </span>
      <h1 className="font-medium text-3xl mb-5">
        Discover Trends <br /> and Inspiring{" "}
        <span className={`${header.className} `}>Stories</span>
      </h1>
      <>
        <Suspense fallback={<Skeleton />}>
          <div className="flex flex-row justify-center flex-wrap gap-5">

            <Card />
          </div>
        </Suspense>
      </>
      {/* <button>Back</button>
      <button>Next</button> */}
    </div>
  );
}
