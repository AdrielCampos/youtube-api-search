import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

type CodeComponentProps = {
  code?: string;
};

export const CodeComponent = ({ code }: CodeComponentProps) => {
  return code ? (
    <SyntaxHighlighter
      language="json"
      style={dracula}
      wrapLines={true}
      wrapLongLines={true}
      customStyle={{
        width: "50%",
        borderRadius: "0.375rem",
        backgroundColor: "#0f172a",
        overflowX: "hidden",
      }}
    >
      {code}
    </SyntaxHighlighter>
  ) : (
    <></>
  );
};
