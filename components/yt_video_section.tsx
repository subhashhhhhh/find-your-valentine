import React, { useState } from "react";
import { Card, CardBody, CardHeader, CardFooter } from "@heroui/card";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { PlayCircle, FolderKanban, Video, ListVideo } from "lucide-react";
import Image from "next/image";

interface Video {
  name: string;
  link: string;
  duration: string;
  level: string;
  thumbnail: string;
  description: string;
  videoId: string;
}

const YOUTUBE_CONTENT = {
  projects: [
    {
      name: "Distributed file system in Golang",
      link: "https://youtu.be/bymQakvTY40?si=xz8Zx5Lezd1JlQ6z",
      duration: "8 hours",
      level: "Intermediate",
      thumbnail: "/yt/tutorials/1.jpg",
      description:
        "Build a distributed file system using Golang. Learn about distributed systems, fault tolerance, and data replication.",
      videoId: "distributed-fs",
    },
    {
      name: "Youtube Clone",
      link: "https://youtu.be/ArmPzvHTcfQ?si=9fdJByB6gprwLBzf",
      duration: "12 hours",
      level: "Advanced",
      thumbnail: "/yt/tutorials/2.jpg",
      description:
        "Build a full-stack YouTube clone using React, Node.js, and MongoDB. Learn to build a RESTful API, user authentication, and video streaming.",
      videoId: "youtube-clone",
    },
    {
      name: "Loom Clone",
      link: "https://youtu.be/3R63m4sTpKo?si=qRs627A3rNQbKhGL",
      duration: "18 hours",
      level: "Advanced",
      thumbnail: "/yt/tutorials/3.jpg",
      description:
        "Build a full-stack Loom clone using React, Node.js, and PostgreSQL. Learn to build a real-time video conferencing app with chat functionality.",
      videoId: "loom-clone",
    },
  ],
  videos: [
    {
      name: "All the maths in the world",
      link: "https://youtu.be/ZWH-4GJaErM?si=zoBTxDjhWvA0996J",
      duration: "38 mins",
      level: "Beginner",
      thumbnail: "/yt/videos/1.jpg",
      description:
        "Short video to learn about maths in the world. Learn about the history of maths and how it is used in the world.",
      videoId: "maths-world",
    },
    {
      name: "American-backed coups in the World",
      link: "https://youtu.be/_wIOqHSsV9c?si=4lbM5_AXAPniTee0",
      duration: "30 mins",
      level: "Intermediate",
      thumbnail: "/yt/videos/2.jpg",
      description:
        "Learn about the American-backed coups in the world. Learn about the history of coups and how they are planned.",
      videoId: "american-coups",
    },
    {
      name: "Rothschild Family: The family that outsmarted the napoleon",
      link: "https://youtu.be/Njl6exA9syY?si=tCHSi2MCQENeINYX",
      duration: "35 mins",
      level: "Intermediate",
      thumbnail: "/yt/videos/3.jpg",
      description:
        "How Rothschild family outsmarted Napoleon. Learn about the history of the family and how they outsmarted Napoleon.",
      videoId: "rothschild-napoleon",
    },
    {
      name: "The ultimate guide to 3 body problem",
      link: "https://youtu.be/IrCxmDl2o84?si=86oQIuHRlmRMP1jz",
      duration: "270 mins",
      level: "Advanced",
      thumbnail: "/yt/videos/4.jpg",
      description:
        "Complete guide to the 3 body problem. Learn about the history of the problem and how it is solved.",
      videoId: "3-body-problem",
    },
    {
      name: "Napoleonic Wars",
      link: "https://youtu.be/E9VfahNloQA?si=nAwssT8HoH9fc9hB",
      duration: "5 hours",
      level: "Advanced",
      thumbnail: "/yt/videos/5.jpg",
      description:
        "Learn about the Napoleonic Wars. Learn about the history of the wars and how they shaped the world.",
      videoId: "napoleonic-wars",
    },
  ],
  playlists: [
    {
      name: "The essense of linear algebra",
      link: "https://youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&si=_sRF0tepXlZWTJ_E",
      duration: "15 hours",
      level: "Beginner",
      thumbnail: "/yt/playlists/1.jpg",
      description:
        "Learn linear algebra from scratch. Covers vectors, matrices, determinants, eigenvalues, and more.",
      videoId: "linear-algebra",
    },
    {
      name: "Building a compiler",
      link: "https://youtube.com/playlist?list=PLRAdsfhKI4OWNOSfS7EUu5GRAVmze1t2y&si=53Rjyp7S7VJp4iSw",
      duration: "8 hours",
      level: "Advanced",
      thumbnail: "/yt/playlists/2.jpg",
      description:
        "Learn how to build a compiler from scratch. Covers lexing, parsing, code generation, and optimization.",
      videoId: "compiler",
    },
    {
      name: "Advanced UNIX programming",
      link: "https://youtube.com/playlist?list=PL0qfF8MrJ-jxMfirAdxDs9zIiBg2Wug0z&si=ihQk0Xx-T2yx0uTS",
      duration: "16 hours",
      level: "Advanced",
      thumbnail: "/yt/playlists/3.jpg",
      description:
        "Learn advanced UNIX programming. Covers system calls, file I/O, processes, signals, and more.",
      videoId: "unix-programming",
    },
  ],
};

const VideoCard = ({
  video,
  onOpenModal,
}: {
  video: Video;
  onOpenModal: (video: Video) => void;
}) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className="bg-content1 cursor-pointer rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105"
      onClick={() => onOpenModal(video)} // Make the entire card clickable
    >
      {/* Thumbnail Section */}
      <div className="relative group">
        <Image
          src={video.thumbnail}
          alt={video.name}
          width={400}
          height={225}
          className="w-full aspect-video object-cover"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <PlayCircle className="w-12 h-12 text-white" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg line-clamp-1">{video.name}</h3>
        <p className="text-small text-default-500">{video.duration}</p>
        <div className="flex justify-between items-center">
          <Chip color="primary" size="sm">
            {video.level}
          </Chip>
          {/* Stop propagation for the "Learn More" button */}
          <Button
            color="primary"
            variant="light"
            size="sm"
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering the card's onClick
              onOpenModal(video);
            }}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

const SectionTitle = ({ icon: Icon, title }: { icon: any; title: string }) => (
  <div className="flex items-center gap-2 mb-4">
    <Icon className="w-6 h-6 text-primary" />
    <h2 className="text-xl font-bold">{title}</h2>
  </div>
);

const YouTubeSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <SectionTitle icon={FolderKanban} title="Cool Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {YOUTUBE_CONTENT.projects.map((video) => (
            <VideoCard
              key={video.videoId}
              video={video}
              onOpenModal={setSelectedVideo}
            />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <SectionTitle icon={Video} title="Interesting YouTube Videos" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {YOUTUBE_CONTENT.videos.map((video) => (
            <VideoCard
              key={video.videoId}
              video={video}
              onOpenModal={setSelectedVideo}
            />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <SectionTitle icon={ListVideo} title="Playlists That You Will Love" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {YOUTUBE_CONTENT.playlists.map((video) => (
            <VideoCard
              key={video.videoId}
              video={video}
              onOpenModal={setSelectedVideo}
            />
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        size="2xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {selectedVideo?.name}
              </ModalHeader>
              <ModalBody>
                <Image
                  src={selectedVideo?.thumbnail || ""}
                  alt={selectedVideo?.name || ""}
                  width={800}
                  height={450}
                  className="w-full aspect-video object-cover rounded-lg"
                />
                <div className="flex items-center gap-4 mt-4">
                  <Chip color="primary" size="sm">
                    {selectedVideo?.level}
                  </Chip>
                  <span className="text-small text-default-500">
                    {selectedVideo?.duration}
                  </span>
                </div>
                <p className="text-default-500">{selectedVideo?.description}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={() => window.open(selectedVideo?.link, "_blank")}
                >
                  Watch Tutorial
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default YouTubeSection;
