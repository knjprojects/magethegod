import React from "react";
import Link from "next/link";
interface Props {}

const HomeLink = (props: Props) => {
  return (
    <div className="items-center rounded-md">
      <Link href="/">
        {" "}
        <img
          className="mask mask-circle"
          src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
        />
      </Link>
    </div>
  );
};

export default HomeLink;
