import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/shadcn/ui/collapsible";
import { Children, ReactNode, useState } from "react";
import { VideoCard } from "../video/VideoCard";
import { useTranslation } from "react-i18next";
import { Button } from "@/shadcn/ui/button";

export function PlayerRecommendations({
  sources,
  clips,
  same_source_clips,
  simulcasts,
  refers,
  recommendations,
}: Pick<
  Video,
  | "sources"
  | "clips"
  | "same_source_clips"
  | "simulcasts"
  | "refers"
  | "recommendations"
>) {
  const { t } = useTranslation();

  return (
    <div className="flex w-full flex-col gap-4 @container">
      {simulcasts && (
        <RecommendationCollapsible
          label={t("component.relatedVideo.simulcastsLabel")}
        >
          {simulcasts.map((video) => (
            <VideoCard key={video.id} size="sm" video={video} />
          ))}
        </RecommendationCollapsible>
      )}
      {refers && (
        <RecommendationCollapsible
          label={t("component.relatedVideo.refersLabel")}
        >
          {refers.map((video) => (
            <VideoCard key={video.id} size="sm" video={video} />
          ))}
        </RecommendationCollapsible>
      )}
      {sources && (
        <RecommendationCollapsible
          label={t("component.relatedVideo.sourcesLabel")}
        >
          {sources.map((video) => (
            <VideoCard key={video.id} size="sm" video={video} />
          ))}
        </RecommendationCollapsible>
      )}
      {clips && (
        <RecommendationCollapsible
          label={t("component.relatedVideo.clipsLabel")}
        >
          {clips.map((video) => (
            <VideoCard key={video.id} size="sm" video={video} />
          ))}
        </RecommendationCollapsible>
      )}
      {same_source_clips && (
        <RecommendationCollapsible
          label={t("component.relatedVideo.sameSourceClips")}
        >
          {same_source_clips.map((video) => (
            <VideoCard key={video.id} size="sm" video={video} />
          ))}
        </RecommendationCollapsible>
      )}
      {recommendations && (
        <RecommendationCollapsible
          label={t("component.relatedVideo.recommendationsLabel")}
        >
          {recommendations.map((video) => (
            <VideoCard key={video.id} size="sm" video={video} />
          ))}
        </RecommendationCollapsible>
      )}
    </div>
  );
}

function RecommendationCollapsible({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  const [open, setOpen] = useState(true);

  return (
    <Collapsible open={open}>
      <CollapsibleTrigger asChild>
        <Button
          size="lg"
          variant="ghost"
          className="flex w-full cursor-pointer px-4 text-lg font-bold"
          onClick={() => setOpen(!open)}
        >
          <div className={open ? "i-heroicons:minus" : "i-heroicons:plus"} />
          {label}
          <div className="grow" />
          <span>{Children.count(children)}</span>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>{children}</CollapsibleContent>
    </Collapsible>
  );
}
