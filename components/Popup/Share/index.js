import { useState } from 'react';

import { Flex } from "antd";
import Toast from '@/components/Toast/Share';
import LinkButton from './LinkButton';
import UrlCopy from './UrlCopy';

import styles from './Share.module.css';
import IconClose from '@/public/assets/icon-xmark.svg';
import Wanted from '@/public/assets/partners/wanted.svg';
import SaramIn from '@/public/assets/partners/saramin.svg';
import JobKorea from '@/public/assets/partners/jobkorea.svg';
import Remember from '@/public/assets/partners/remember.svg';
import LinkedIn from '@/public/assets/partners/linkedin.svg';

export default function ({ close }) {
  const [isCopied, setIsCopied] = useState(false);

  const moveToPage = (page) => {
    window.open(page, '_blank');
  };

  return (
    <div className={styles.dim}>
      <Flex vertical align='center' gap={24} className={styles.popup}>
        {isCopied && <Toast show={isCopied} setIsCopied={setIsCopied} />}
        <Flex vertical align='center' gap={20}>
          <Flex align='center' justify='space-between' className={styles.header}>
            <div className={styles.closeButton} />
            <span className={styles.title}>{'증명서 공유하기'}</span>
            <button
              type='button'
              className={styles.closeButton}
              data-button-animation={true}
              onClick={close}
            >
              <IconClose />
            </button>
          </Flex>
          <p
            className={styles.subTitle}
            dangerouslySetInnerHTML={{
              __html:
                '아래 채용 플랫폼의 이력서에<br/>증명서 링크를 첨부해서 <b>스펙을 손쉽게 증빙하세요!</b>',
            }}
          />
          <div className={styles.partners}>
            <LinkButton
              name='원티드'
              logo={<Wanted />}
              onClick={() => moveToPage(process.env.NEXT_PUBLIC_WANTED_SHARE_LINK)}
            />
            <LinkButton
              name='사람인'
              logo={<SaramIn />}
              onClick={() => moveToPage(process.env.NEXT_PUBLIC_SARAMIN_SHARE_LINK)}
            />
            <LinkButton
              name='잡코리아'
              logo={<JobKorea />}
              onClick={() => moveToPage(process.env.NEXT_PUBLIC_JOBKOREA_SHARE_LINK)}
            />
            <LinkButton
              name='리멤버'
              logo={<Remember />}
              onClick={() => moveToPage(process.env.NEXT_PUBLIC_REMEMBER_SHARE_LINK)}
            />
            <LinkButton
              name='링크드인'
              logo={<LinkedIn />}
              onClick={() => moveToPage(process.env.NEXT_PUBLIC_LINKEDIN_SHARE_LINK)}
            />
          </div>
        </Flex>
        <UrlCopy setIsCopied={setIsCopied} />
      </Flex>
    </div>
  );
}
