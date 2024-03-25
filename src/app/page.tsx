"use client";
import { FormEvent, useEffect, useState } from "react";
import CodeComponent from "@/components/code";
import FormComponent from "@/components/form";
import VideoComponent from "@/components/video";
import { http } from "@/http/axios-init";

export default function Home() {
  const [searchData, setSearchData] = useState<any>();
  const [videoData, setVideoData] = useState<any>();

  const handleSubmit = async (e: FormEvent, query: string) => {
    e.preventDefault();

    const { data } = await http.get(
      `https://www.googleapis.com/youtube/v3/search?key=${process.env.NEXT_PUBLIC_GOOGLE_KEY}&channelId=${process.env.NEXT_PUBLIC_CHANNEL_ID}&type=video&maxResults=1&q=${query}`
    );
    setSearchData(data);
  };

  useEffect(() => {
    if (!searchData?.items?.[0]?.id?.videoId) return;
    http
      .get(
        `https://www.googleapis.com/youtube/v3/videos?key=${process.env.NEXT_PUBLIC_GOOGLE_KEY}&part=player,snippet&id=${searchData.items[0].id.videoId}`
      )
      .then(({ data }) => {
        setVideoData(data);
      });
  }, [searchData]);

  return (
    <main>
      <div className="min-h-screen flex flex-1 items-center justify-center flex-col gap-8 transition-colors p-14 bg-primary-800">
        <h1 className="text-primary-50 text-3xl tracking-wider antialiased">
          Youtube API
        </h1>
        <FormComponent handleSubmit={handleSubmit} />
        <VideoComponent
          iframeString={videoData?.items?.[0]?.player?.embedHtml}
        />
        <CodeComponent code={JSON.stringify(searchData, null, 2)} />
        <CodeComponent code={JSON.stringify(videoData, null, 2)} />
      </div>
    </main>
  );
}
