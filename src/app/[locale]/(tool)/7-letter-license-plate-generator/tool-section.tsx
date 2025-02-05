"use client";
import { useState } from "react";
import { Card, CardBody, Input, Button } from "@heroui/react";
import { toast } from "react-hot-toast";
import { api } from "~/trpc/react";
import { Icon } from "@iconify/react";

export const ToolSection = () => {
  const [input, setInput] = useState("");
  const ai = api.ai.generator.useMutation();

  const generatePlates = async () => {
    if (!input) {
      return toast.error("Please enter some words or preferences");
    }

    ai.mutate({
      prompt: `Generate 10 creative license plates, each meeting the following criteria:

- Length: Exactly 7 characters
- Characters: Only letters (A-Z) and numbers (0-9) allowed
- Meaningful and readable
- Based on the following keywords: $keywords (Replace this with the actual keywords)

one per line, no other text, only return license plates.

keyword: $content`,
      content: input,
      maxContentLength: 100,
    });
  };

  const copyPlate = async (plate: string) => {
    await navigator.clipboard.writeText(plate);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="container mx-auto px-4 pb-20">
      <Card className="mx-auto max-w-3xl bg-background/60 backdrop-blur-md">
        <CardBody className="space-y-6 p-8">
          <Input
            label="Enter words or preferences"
            labelPlacement="outside"
            placeholder="e.g. developer, coding, tech lover"
            value={input}
            onValueChange={setInput}
            size="lg"
            className="text-lg"
            disabled={ai.isPending}
          />

          <Button
            onPress={generatePlates}
            isLoading={ai.isPending}
            size="lg"
            color="primary"
            className="w-full"
          >
            Generate 10 License Plates
          </Button>

          {ai.data && (
            <div className="space-y-4 rounded-lg bg-background p-6">
              {ai.data.split("\n").map((plate, index) => (
                <div
                  key={index}
                  className="bg-background-100 flex items-center justify-between border-b"
                >
                  <div className="font-mono text-2xl tracking-widest">
                    {plate}
                  </div>
                  <Button
                    variant="light"
                    onPress={() => copyPlate(plate)}
                    isIconOnly
                    aria-label="Copy plate"
                  >
                    <Icon icon="lucide:copy" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
};
