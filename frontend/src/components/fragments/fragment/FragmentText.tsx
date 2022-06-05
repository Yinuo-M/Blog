import { useContext } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { LanguageContext } from '../../../context/language';

dayjs.extend(advancedFormat);

// A fragment is either an exerpt or a short piece of original writing.
type FragmentType = 'EX' | 'WR';

export type Props = {
  mainContent: string;
  extraContent?: string;
  englishAuthor: string;
  chineseAuthor: string;
  writtenOn: Dayjs;
  type: FragmentType;
  origin?: string;
};

export default function FragmentText({
  mainContent,
  extraContent,
  englishAuthor,
  chineseAuthor,
  writtenOn,
  type,
  origin,
}: Props) {
  const { language } = useContext(LanguageContext);

  let writtenOnDisplay;
  if (type === 'EX') {
    writtenOnDisplay = writtenOn.format('YYYY');
  } else if (language === 'english') {
    writtenOnDisplay = writtenOn.format('ddd Do MMMM, YYYY');
  } else {
    const chineseDays = [
      '星期日',
      '星期一',
      '星期二',
      '星期三',
      '星期四',
      '星期五',
      '星期六',
    ];
    writtenOnDisplay = `${writtenOn.year()}年${writtenOn.month()}月${writtenOn.date()}日 ${
      chineseDays[writtenOn.day()]
    }`;
  }

  return (
    <article className="fragment-text">
      <p className="fragment-text__content">{mainContent}</p>
      {extraContent && <p className="fragment-text__content">{extraContent}</p>}
      <span className="fragment-text__meta">
        {language === 'english' ? englishAuthor : chineseAuthor}
      </span>
      {origin && <span className="fragment-text__meta">{origin}</span>}
      <span className="fragment-tex__meta">{writtenOnDisplay}</span>
    </article>
  );
}
