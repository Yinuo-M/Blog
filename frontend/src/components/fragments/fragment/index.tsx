import Image from 'next/image';
import FragmentText, { Props as FragmentTextProps } from '../fragmentText';

export type Props = FragmentTextProps & {
  src?: string;
  imageAlt?: string;
};

export default function FragmentComponent({
  src,
  imageAlt,
  ...fragmentTextProps
}: Props) {
  return (
    <article>
      {src && <Image src={src} width={500} height={500} alt={imageAlt} />}
      <FragmentText {...fragmentTextProps} />
    </article>
  );
}
