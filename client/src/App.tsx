import React, { useEffect, useState } from 'react';
import { Box, ChakraProvider, CSSReset } from '@chakra-ui/react';
import { getHelloMessage } from './api';
import WithBackgroundImage from './components/Hero';
import SmallWithLogoLeft from './components/Footer';
import WithSubnavigation from './components/Navbar';
import ThreeTierPricing from './components/prices';
import SocialProfileWithImage from './components/SocialUserProfile';

function App() {
  const [helloMessage, setHelloMessage] = useState('');

  useEffect(() => {
    // Llamada a la API del servidor Express
    getHelloMessage().then((data) => setHelloMessage(data.message));
  }, []);

  return (
    <ChakraProvider>
      <WithSubnavigation/>
      <WithBackgroundImage/>
      <SocialProfileWithImage/>
      <ThreeTierPricing/>
      <SmallWithLogoLeft/>
    </ChakraProvider>
  );
}

export default App;
