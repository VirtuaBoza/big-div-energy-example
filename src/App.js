/* eslint-disable no-sparse-arrays */
import {
  Box,
  Columns,
  Shapeshifter,
  Stack,
  useBigDivEnergy
} from 'big-div-energy';
import React from 'react';
import styles from './App.module.css';

function App() {
  const { stepIndex } = useBigDivEnergy();

  return (
    <Box style={{ minHeight: '100vh' }}>
      <Box
        spacing={[['xs', 'sm']]}
        className={styles.sendPromo}
        style={{
          fontSize: stepIndex < 1 && '.75rem'
        }}
      >
        <Columns spacing={['xxs']}>
          <img
            src="https://send.firefox.com/master-logo.1a3d1a78.svg"
            alt="Firefox"
            style={{
              height: '1.5rem',
              width: '1.5rem',
              marginTop: 'auto',
              marginBottom: 'auto'
            }}
          />
          <div>
            There is a way to protect your privacy. Join Firefox.{' '}
            <a href="http://www.mozilla.org/firefox/accounts/?utm_source=send.firefox.com&utm_medium=banner&utm_campaign=trailhead&utm_content=protect-your-privacy">
              Learn more.
            </a>
          </div>
        </Columns>
      </Box>
      <Box
        type="header"
        spacing={[[, 'md']]}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          height: '4rem',
          width: '100%'
        }}
      >
        <Box type="a" href="/">
          <img
            src="https://send.firefox.com/icon.fd04d81a.svg"
            alt="Firefox Send"
            style={{ height: '32px', width: 'auto' }}
          />
          <Box spacing={[['sm', 'none']]}>Firefox Send</Box>
        </Box>
        <div>Sign in</div>
      </Box>
      <Box spacing={['md']}>
        <Shapeshifter components={[Stack, , Columns]} spacing={['md']}>
          <Box
            spacing={[['xl', 'md']]}
            style={{
              border: '2px dashed #d7d7db',
              borderRadius: '.25rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div>img</div>
            <Box spacing={[['md', , 'xs']]}>Drag and drop files</Box>
            <Box spacing={[['none', , 'md']]}>or click to send up to 1GB</Box>
            <Box spacing={[['sm']]}>Select files to upload</Box>
            <div>Sign in to send up to 2.5GB</div>
          </Box>
          <Box spacing={['md']}>
            <Box spacing={[['lg', , ,]]}>
              <Stack spacing={['md']}>
                <Box type="h1">Simple, private file sharing</Box>
                <Box type="p">
                  Firefox Sens lets you share files with end-to-end enxryption
                  and a link that automatically expires. So you can keep what
                  you share private and make sure your stuff doesn't stay online
                  forever.
                </Box>
              </Stack>
              <div>img</div>
            </Box>
          </Box>
        </Shapeshifter>
      </Box>
      <Box type="footer" spacing={['md']}>
        <Box spacing={['xxs']}>
          <a href="https://www.mozilla.org/">Mozilla</a>
        </Box>
        <Stack type="ul">
          <Box type="li" spacing={['xxs']}>
            <a href="https://www.mozilla.org/about/legal/terms/services/#send">
              {' '}
              Legal
            </a>
          </Box>
          <Box type="li" spacing={['xxs']}>
            <a href="/legal"> Privacy</a>
          </Box>
          <Box type="li" spacing={['xxs']}>
            <a href="https://www.mozilla.org/privacy/websites/#cookies">
              {' '}
              Cookies
            </a>
          </Box>
          <Box type="li" spacing={['xxs']}>
            <a href="https://github.com/mozilla/send"> GitHub</a>
          </Box>
          <Box type="li" spacing={['xxs']}>
            <a href="https://qsurvey.mozilla.com/s3/Firefox-Send-Product-Feedback?ver=3.0.21&browser=chrome">
              {' '}
              Feedback
            </a>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default App;
