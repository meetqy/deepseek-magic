"use client";
import { useState } from "react";
import { Card, CardBody, Button, Textarea } from "@heroui/react";
import { toast } from "react-hot-toast";
import { api } from "~/trpc/react";

export const ToolSection = () => {
  const [content, setContent] = useState("");
  const ai = api.ai.generator.useMutation();

  const generateHashtags = async () => {
    if (!content) {
      return;
    }

    ai.mutate({
      prompt: `You are an AI assistant specializing in extracting hashtags from TikTok content descriptions. Your task is to analyze the provided text and return a list of the most relevant hashtags in the form of a JSON array.  Focus on keywords related to the topic and functionality described in the text. Be accurate and prioritize hashtags that are commonly used on TikTok and closely reflect the content.

Here is the TikTok content description:

"$content"

Return the hashtags in JSON array format.  Do not include any introductory or explanatory text before or after the array.  Only the JSON array is required.`,
      content,
    });
  };

  return (
    <div className="container mx-auto px-4 pb-20">
      <Card className="mx-auto max-w-3xl">
        <CardBody className="space-y-6 p-8">
          <div>
            <Textarea
              label="Enter your content"
              placeholder="What's your TikTok about?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="text-lg"
              disabled={ai.isPending}
            />
          </div>

          <Button
            onPress={generateHashtags}
            isLoading={ai.isPending}
            size="lg"
            color="primary"
          >
            Generate Hashtags
          </Button>

          {ai.data && (
            <div className="space-y-4 rounded-lg bg-zinc-800 p-6">
              <div className="font-mono text-lg text-blue-400">
                {JSON.parse(ai.data).join(" ")}
              </div>
              <Button
                variant="flat"
                onPress={() => {
                  navigator.clipboard.writeText(
                    JSON.parse(ai.data ?? "[]").join(" "),
                  );
                  toast.success("Hashtags copied to clipboard");
                }}
                className="w-full"
              >
                Copy Hashtags
              </Button>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
};
