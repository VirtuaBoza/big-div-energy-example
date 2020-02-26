import {
  Box,
  Columns,
  Shapeshifter,
  Stack,
  useBigDivEnergy,
} from 'big-div-energy';
import React from 'react';

function App() {
  const { stepIndex } = useBigDivEnergy();

  return (
    <Box style={{ minHeight: '100vh' }}>
      <Box
        spacing={[['xs', 'sm']]}
        style={{
          border: '1px solid #f0f0f4',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ fontSize: stepIndex < 1 && '.75rem' }}>
          There is a way to protect your privacy. Join Firefox.{' '}
          <a href="http://www.mozilla.org/firefox/accounts/?utm_source=send.firefox.com&utm_medium=banner&utm_campaign=trailhead&utm_content=protect-your-privacy">
            Learn more.
          </a>
        </div>
      </Box>
      <Box
        spacing={[[, 'md']]}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box spacing={[['sm', 'none']]}>Firefox Send</Box>
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
              justifyContent: 'center',
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
