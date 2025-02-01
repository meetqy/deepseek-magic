"use client";
import { useState } from "react";
import { Card, CardBody, Input, Button } from "@heroui/react";
import { toast } from "react-hot-toast";
import { api } from "~/trpc/react";

export function ToolSection() {
  const [input, setInput] = useState("");
  const ai = api.ai.generator.useMutation();

  const convertToEmoji = async (text: string) => {
    ai.mutate({
      prompt: `Convert the text I input into emoji, output English. Return only the converted emoji, containing no other text. Text: $content`,
      content: text,
    });
  };

  const copyToClipboard = async () => {
    if (!ai.data) return;
    navigator.clipboard.writeText(ai.data);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="container mx-auto px-4 pb-20">
      <Card className="mx-auto max-w-3xl bg-background/60 backdrop-blur-md">
        <CardBody className="space-y-6 p-8">
          <div>
            <Input
              label="Enter your text"
              placeholder="Type something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="text-lg"
              disabled={ai.isPending}
            />
          </div>

          <Button
            onPress={() => convertToEmoji(input)}
            isLoading={ai.isPending}
            size="lg"
            color="primary"
          >
            Convert to Emoji
          </Button>

          {ai.data && (
            <div className="space-y-4 rounded-lg bg-background p-6">
              <div className="text-2xl">{ai.data}</div>
              <Button
                variant="flat"
                fullWidth
                onPress={copyToClipboard}
                size="lg"
              >
                Copy to Clipboard
              </Button>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
