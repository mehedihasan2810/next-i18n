"use client";

import { db } from "@/lib/db";
import React from "react";

import { useLiveQuery } from "dexie-react-hooks";

const Page = () => {
  const feedbacks = useLiveQuery(() => db.feedbacks.toArray());

  return (
    <ul className="mt-10 flex flex-col gap-8">
      <li className="flex flex-col gap-2">
        <h2>Anonymous</h2>
        <p>
          I recently purchased this product and I am extremely satisfied with
          its performance. The quality exceeded my expectations, and it has made
          my daily routine so much more convenient. I highly recommend it to
          anyone looking for a reliable and efficient solution!
        </p>
        <p>2024-02-26</p>
      </li>
      {feedbacks?.map((feedback) => (
        <li className="flex flex-col gap-2" key={feedback.id}>
          <h2>{feedback.name}</h2>
          <p>{feedback.content}</p>
          <p>{feedback.createdAt.split("T")[0]}</p>
        </li>
      ))}
    </ul>
  );
};

export default Page;
