import { useContext } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

import Content from '../content';
import { LanguageContext } from '../../../context/language';
import styles from './FragmentText.module.scss';

dayjs.extend(advancedFormat);

// A fragment is either an exerpt or a short piece of original writing.
type FragmentType = 'EX' | 'WR';

export type Props = {
  englishContent?: string;
  chineseContent?: string;
  author: string;
  writtenOn: Dayjs;
  type: FragmentType;
  origin?: string;
};

export default function FragmentText({
  englishContent,
  chineseContent,
  author,
  writtenOn,
  type,
  origin,
}: Props) {
  const { language } = useContext(LanguageContext);

  // Format writtenOn date depending on language
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
    <article className={styles.fragmentText}>
      {/* Display English content first if the site language is English
      Display Chinese content first if the site language is Chinese */}
      <div className={styles.contentWrapper}>
        {language === 'english' && (
          <>
            {englishContent && (
              <Content content={englishContent} className={styles.contentEn} />
            )}
            {chineseContent && (
              <Content
                content={chineseContent}
                className={`${styles.contentCh} ${styles.contentBottom}`}
              />
            )}
          </>
        )}
        {language === 'chinese' && (
          <>
            {chineseContent && (
              <Content content={chineseContent} className={styles.contentCh} />
            )}
            {englishContent && (
              <Content
                content={englishContent}
                className={`${styles.contentEn} ${styles.contentBottom}`}
              />
            )}
          </>
        )}
      </div>
      <span className={styles.meta}>{author}</span>
      {origin &&
        (language === 'english' ? (
          <span className={`${styles.italicMeta}`}>{origin}</span>
        ) : (
          <span className={styles.meta}>《{origin}》</span>
        ))}
      <span className={styles.meta}>{writtenOnDisplay}</span>
    </article>
  );
}
