import Image from 'next/image';
import FragmentText, { Props as FragmentTextProps } from './FragmentText';

type Props = FragmentTextProps & {
  src: string;
  imageAlt: string;
};

export default function Fragment({
  src,
  imageAlt,
  ...fragmentTextProps
}: Props) {
  return (
    <article>
      <Image src={src} width={500} height={500} alt={imageAlt} />
      <FragmentText {...fragmentTextProps} />
    </article>
  );
}
