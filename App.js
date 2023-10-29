import {Navigation} from './src/components/navigation'
import { PowerEyeContextProvider } from './src/services/powerEye.context';
import { ThemeContextProvider } from './src/services/theme.context';
export default function App() {
  return (
    
    <PowerEyeContextProvider>
    <ThemeContextProvider>
    <Navigation/>
    </ThemeContextProvider>
    </PowerEyeContextProvider>
  );
}
