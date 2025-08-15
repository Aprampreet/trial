import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const BlogCard = ({ post }: { post: any }) => {
  return (
   <Card
      className="
        group
        mb-6
        rounded-2xl
        border
        border-white/10
        bg-black/40
        backdrop-blur-lg
        shadow-lg
        transition
        
      "
    >
      <CardHeader className="p-0 relative">
        <div className="relative w-full h-56 overflow-hidden rounded-t-2xl">
          <Image
            alt={post.title}
            src={post.image}
            fill
            className="object-cover transition-transform duration-500"
          />
          <span className="absolute top-4 left-4 bg-white/10 text-white text-xs px-3 py-1 rounded-full backdrop-blur-md border border-white/20">
            {post.category}
          </span>
        </div>
      </CardHeader>

      <CardContent className="p-6 text-white">
        <CardTitle className="text-xl font-semibold mb-2">
          {post.title}
        </CardTitle>
        <CardDescription className="text-gray-400 mb-4">
            <Link href={`/blogs/${post._id}`}>{post.description}</Link>
          
        </CardDescription>
        <div className="flex justify-between text-xs text-gray-500">
          <span>Views: {post.views}</span>
          <span>{post._createdAt}</span>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 text-white">
        by :- {post.author.author}
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
