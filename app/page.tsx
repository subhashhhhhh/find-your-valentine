"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Progress } from "@heroui/progress";
import { Link } from "@heroui/link";
import { Tabs, Tab } from "@heroui/tabs";
import { Chip } from "@heroui/chip";
import { PlayCircle, Book, Twitter } from "lucide-react";
import YouTubeSection from "@/components/yt_video_section";
import BookSection from "@/components/books_section";

export default function Home() {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState<string>("videos");

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowResult(true);
    }, 3000);
  };

  if (showResult) {
    return (
      <div className="min-h-screen p-4 space-y-8">
        <div className="text-center max-w-4xl mx-auto mt-8">
          <Image
            alt="Meme"
            className="mx-auto rounded-lg shadow-2xl"
            height={200}
            width={200}
            src="/meme-image.jpg"
            objectFit="cover"
          />
        </div>

        <div className="max-w-4xl mx-auto mt-8 bg-background rounded-lg p-6">
          <h3 className="text-2xl font-bold text-center mb-6">
            Here are some things you can do on 14th Feb
          </h3>
          <Tabs
            aria-label="Resources"
            className="mb-6 flex justify-center text-center items-center"
            selectedKey={selected}
            onSelectionChange={(key) => setSelected(key.toString())}
          >
            <Tab
              key="videos"
              title={
                <div className="flex items-center gap-2">
                  <PlayCircle size={20} />
                  <span>YouTube</span>
                </div>
              }
            >
              <YouTubeSection />
            </Tab>
            <Tab
              key="books"
              title={
                <div className="flex items-center gap-2">
                  <Book size={20} />
                  <span>PDF Books</span>
                </div>
              }
            >
              <BookSection />
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-500 p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardBody className="space-y-6 p-8">
          {!isLoading ? (
            <>
              <h1 className="text-3xl font-bold text-center">
                Find Your Tech Twitter Valentine
              </h1>
              <Input
                fullWidth
                label="Twitter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                size="lg"
              />
              <Button
                fullWidth
                color="primary"
                size="lg"
                disabled={!username}
                onClick={handleSubmit}
              >
                Find My Valentine
              </Button>
            </>
          ) : (
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-4"
            >
              <h2 className="text-2xl">Searching Tech Twitter...</h2>
              <Progress
                isIndeterminate
                aria-label="Loading..."
                className="w-full"
                size="lg"
              />
            </motion.div>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
