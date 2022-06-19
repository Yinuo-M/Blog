type Props = {
  content: string;
  className: string;
};

// This component is for transforming Django Rest Framework TextField JSON response
// into jsx paragraphs
export default function Content({ content, className }: Props) {
  return (
    <>
      {content.split('\r\n\r\n').map((string, idx) => (
        <p
          className={className}
          // eslint-disable-next-line react/no-array-index-key
          key={idx}
        >
          {string}
        </p>
      ))}
    </>
  );
}
