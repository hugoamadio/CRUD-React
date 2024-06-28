import './App.css';
import ThemeDefault from './config/themes/ThemeDefault';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <ThemeDefault>
      <AppRoutes />
    </ThemeDefault>
  );
}

export default App;