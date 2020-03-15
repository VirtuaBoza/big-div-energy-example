/* eslint-disable no-sparse-arrays */
import {
  Box,
  Columns,
  FlexBox,
  Shapeshifter,
  Stack,
  useBigDivEnergy
} from 'big-div-energy';
import classNames from 'classnames';
import React from 'react';
import styles from './App.module.css';
import plusIcon from './icons/addfiles.93ef7f01.svg';
import logo from './icons/wordmark.d113c385.svg';

function App() {
  const { stepIndex } = useBigDivEnergy();

  return (
    <FlexBox className={styles.container} flexDirection="column">
      <FlexBox
        spacing={[['xs', 'sm']]}
        className={styles.sendPromo}
        alignItems="center"
        alignContent="center"
        justifyContent="center"
      >
        <Columns spacing={['xxs']} alignItems="center">
          <img
            src="https://send.firefox.com/master-logo.1a3d1a78.svg"
            alt="Firefox"
            style={{
              height: '1.5rem',
              width: '1.5rem'
            }}
          />
          <div className={styles.textXs}>
            There is a way to protect your privacy. Join Firefox.{' '}
            <a
              className={styles.linkBlue}
              href="http://www.mozilla.org/firefox/accounts/?utm_source=send.firefox.com&utm_medium=banner&utm_campaign=trailhead&utm_content=protect-your-privacy"
            >
              Learn more.
            </a>
          </div>
        </Columns>
      </FlexBox>
      <FlexBox
        type="header"
        spacing={[[, 'md']]}
        justifyContent="space-between"
        alignItems="center"
        className={styles.header}
      >
        <FlexBox type="a" href="/" alignItems="center">
          <img
            src="https://send.firefox.com/icon.fd04d81a.svg"
            alt="Firefox Send"
            style={{ height: '32px', width: 'auto' }}
          />
          <svg
            style={{
              width: '10.25rem',
              boxSizing: 'inherit',
              display: 'block',
              verticalAlign: 'middle'
            }}
          >
            <use xlinkHref={`${logo}#logo`}></use>
          </svg>
        </FlexBox>
        <Box
          type="button"
          spacing={[['xxs', 'sm']]}
          style={{
            color: '#0060df',
            borderColor: '#0060df',
            background: 'transparent',
            fontFamily: 'inherit',
            fontSize: '100%',
            overflow: 'visible',
            backfaceVisibility: 'hidden',
            borderRadius: '6px',
            textAlign: 'center'
          }}
        >
          Sign in
        </Box>
      </FlexBox>
      <FlexBox spacing={['md']}>
        <Shapeshifter components={[Stack, , Columns]} spacing={['md']}>
          <Box spacing={[[, 'xxs']]}>
            <FlexBox
              spacing={[['xl', 'md']]}
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              className={styles.sendUploadArea}
            >
              <svg
                style={{ width: '2.5rem', height: '2.5rem', color: '#0060df' }}
              >
                <use xlinkHref={`${plusIcon}#plus`} />
              </svg>
              <FlexBox spacing={[['md', 'none']]}>
                <Stack spacing={['xxs']} alignItems="center">
                  <div
                    className={classNames([
                      styles.textLg,
                      styles.trackingWide,
                      styles.fontBold
                    ])}
                  >
                    Drag and drop files
                  </div>
                  <div>or click to send up to 1GB</div>
                </Stack>
              </FlexBox>
              <Stack spacing="sm" alignItems="center">
                <Box
                  type="button"
                  spacing={[['sm', 'md']]}
                  style={{
                    backgroundColor: '#0060df',
                    borderWidth: 0,
                    borderRadius: '.5rem',
                    color: '#fff',
                    fontWeight: '600',
                    fontFamily: 'inherit',
                    fontSize: 'inherit',
                    textAlign: 'left'
                  }}
                >
                  Select files to upload
                </Box>
                <button
                  className={classNames([
                    styles.textSm,
                    styles.fontMedium,
                    styles.linkBlue
                  ])}
                  style={{
                    background: 'transparent',
                    borderWidth: 0,
                    fontFamily: 'inherit'
                  }}
                >
                  Sign in to send up to 2.5GB
                </button>
              </Stack>
            </FlexBox>
          </Box>
          <FlexBox spacing={['md']} flexDirection="column" alignItems="center">
            <Box spacing={[['lg', , ,]]}>
              <Stack spacing={['md']}>
                <h1>Simple, private file sharing</h1>
                <p
                  className={styles.leadingLoose}
                  style={{ maxWidth: '30rem' }}
                >
                  Firefox Send lets you share files with end-to-end enxryption
                  and a link that automatically expires. So you can keep what
                  you share private and make sure your stuff doesn't stay online
                  forever.
                  <img
                    src="https://send.firefox.com/intro.96f62c7e.svg"
                    alt=""
                  />
                </p>
              </Stack>
            </Box>
          </FlexBox>
        </Shapeshifter>
      </FlexBox>
      <FlexBox
        type="footer"
        flexDirection="column"
        spacing={['md']}
        className={classNames([
          styles.textXs,
          styles.textGrey,
          styles.fontMedium
        ])}
      >
        <Box spacing={['xxs']}>
          <a
            href="https://www.mozilla.org/"
            style={{
              backgroundImage:
                'url(https://send.firefox.com/mozilla-logo.4ea30604.svg)',
              backgroundSize: '100px,48px',
              textIndent: '120%',
              color: 'inherit',
              textDecoration: 'none',
              height: '32px',
              width: '100px',
              overflow: 'hidden',
              display: 'inline-block',
              backgroundRepeat: 'no-repeat'
            }}
          >
            Mozilla
          </a>
        </Box>
        <FlexBox type="ul" flexDirection="column" alignItems="flex-start">
          <Box type="li" spacing="xxs">
            <a
              className={styles.fontMedium}
              href="https://www.mozilla.org/about/legal/terms/services/#send"
            >
              {' '}
              Legal
            </a>
          </Box>
          <Box type="li" spacing="xxs">
            <a className={styles.fontMedium} href="/legal">
              {' '}
              Privacy
            </a>
          </Box>
          <Box type="li" spacing="xxs">
            <a
              className={styles.fontMedium}
              href="https://www.mozilla.org/privacy/websites/#cookies"
            >
              {' '}
              Cookies
            </a>
          </Box>
          <Box type="li" spacing="xxs">
            <a
              className={styles.fontMedium}
              href="https://github.com/mozilla/send"
            >
              {' '}
              GitHub
            </a>
          </Box>
          <Box type="li" spacing="xxs">
            <a
              href="https://qsurvey.mozilla.com/s3/Firefox-Send-Product-Feedback?ver=3.0.21&browser=chrome"
              style={{
                backgroundImage:
                  'url(https://send.firefox.com/feedback.9a713904.svg)',
                backgroundColor: '#000',
                backgroundPosition: '.125rem .25rem',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '1.125rem',
                color: '#fff',
                display: 'block',
                lineHeight: '.75rem',
                textIndent: '.125rem',
                padding: '.375rem .375rem .375rem 1.25rem'
              }}
            >
              {' '}
              Feedback
            </a>
          </Box>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}

export default App;
