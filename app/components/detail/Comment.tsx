"use client";
import { Rating } from "@mui/material";
import { RxAvatar } from "react-icons/rx";

const Comment = ({ prd }: { prd: any }) => {
  return (
    <div className="border w-full md:w-1/3 p-2 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <RxAvatar size={25} />
          <div>{prd?.user?.name}</div>
        </div>
        <Rating name="read-only" value={prd?.user?.rating} readOnly />
      </div>
      <div className="text-slate-500">{prd.comment}</div>
    </div>
  );
};

export default Comment;
