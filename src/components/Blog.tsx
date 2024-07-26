"use client";
import Image from "next/image";
import { Post } from "../../typings";
import React, { useState, useEffect } from "react";
import { getPosts } from "../utils/sanity_utils";
type Props = {};

const Blog = (props: Props) => {
  const [blog, setBlog]: any = useState([]);
  const getAllPosts = () => {
    getPosts().then((data: Post[]) => {
      setBlog(data);
    });
  };
  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <div className="h-screen w-full ">
      <div className="flex flex-col bg-slate-100">
        {blog ? (
          <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {blog?.map((post: Post) => (
              <div
                key={post.title}
                className="rounded-md border-e-red-700 bg-slate-200"
              >
                <h1 className="text-black font-ecliptic font-bold">
                  {post.title}
                </h1>
                <Image src={post.image} width={300} height={400} alt="image" />
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Blog;
