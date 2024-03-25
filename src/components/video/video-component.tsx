type VideoComponentProps = {
  iframeString?: string;
};

export const VideoComponent = ({ iframeString }: VideoComponentProps) => {
  return iframeString ? (
    <div
      className="overflow-hidden rounded-md"
      dangerouslySetInnerHTML={{
        __html: iframeString,
      }}
    />
  ) : (
    <></>
  );
};
