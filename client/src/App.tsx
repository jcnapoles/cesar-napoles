import { ChakraProvider } from '@chakra-ui/react';
import WithBackgroundImage from './components/Hero';
import SmallWithLogoLeft from './components/Footer';
import WithSubnavigation from './components/Navbar';
import ThreeTierPricing from './components/Prices';
import SocialProfileWithImage from './components/SocialUserProfile';
import ProductList from './components/ProductList';
import { inject } from '@vercel/analytics';


function App() {
  inject();
  return (
    <ChakraProvider>
      <WithSubnavigation/>
      <WithBackgroundImage/>
      <ProductList/>
      <SocialProfileWithImage/>
      <ThreeTierPricing/>      
      <SmallWithLogoLeft/>
    </ChakraProvider>
  );
}

export default App;
