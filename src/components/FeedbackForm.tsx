"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { db } from "@/lib/db";
import { useState } from "react";

const FeedbackForm = () => {
  // eslint-disable-next-line no-unused-vars
  const [name, setName] = useState("Anonymous");
  const [feedback, setFeedback] = useState("");
  const [status, setStatus] = useState("");

  async function addFeedback() {
    try {
      // Add the new friend!
      const id = await db.feedbacks.add({
        name,
        content: feedback,
        createdAt: new Date().toISOString(),
      });

      console.log(id);

      setStatus(`Feedback successfully added.`);
      setFeedback("");
    } catch (error) {
      console.log(error);
      setStatus(`Failed to add feedback! Try again`);
    }
  }
  return (
    <div className="grid w-full gap-1.5">
      <Label className="text-xl" htmlFor="feedback">
        Feedback
      </Label>
      <Textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        className="min-h-32"
        placeholder="Type your feedback here..."
        id="feedback"
      />
      <Button disabled={feedback === ""} onClick={addFeedback}>
        Submit
      </Button>
      {status && <p>{status}</p>}
    </div>
  );
};

export default FeedbackForm;
