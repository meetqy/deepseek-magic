"use client";
import { Card, CardBody, Input, Button } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import toast from "react-hot-toast";
import { api } from "~/trpc/react";

export const ToolSection = () => {
  const ai = api.ai.generator.useMutation();
  const [input, setInput] = useState("");

  return (
    <div className="container mx-auto px-4 pb-20">
      <Card className="mx-auto max-w-3xl bg-background/60 backdrop-blur-md">
        <CardBody className="flex flex-col gap-8 p-8">
          <Input
            label="Enter your text"
            labelPlacement="outside"
            placeholder="Type something like 'DeepSeek AI Blog Post!'"
            value={input}
            onValueChange={setInput}
            size="lg"
            className="text-lg"
            endContent={
              <Button
                isDisabled={ai.isPending}
                isLoading={ai.isPending}
                color="primary"
                onPress={() => {
                  ai.mutate(
                    `把我输入的关键词转换为 URL slug，控制在 50 个字符以内。关键词：${input}`,
                  );
                }}
              >
                Generator
              </Button>
            }
          />
          <Input
            label="Generated URL slug"
            labelPlacement="outside"
            placeholder="deepseek-ai-blog-post"
            value={ai.data}
            readOnly
            size="lg"
            variant="bordered"
            className="font-mono text-lg"
            endContent={
              <Button
                isIconOnly
                variant="light"
                isDisabled={!ai.data}
                onPress={() => {
                  if (ai.data) {
                    navigator.clipboard.writeText(ai.data);
                    toast.success("Copied to clipboard!");
                  }
                }}
              >
                <Icon className="size-4" icon={"lucide:copy"} />
              </Button>
            }
          />
        </CardBody>
      </Card>
    </div>
  );
};
