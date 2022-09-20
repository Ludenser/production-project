import { Link } from "react-router-dom";
import './styles/index.scss'
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "shared/contexts";
import { AppRouter } from "./providers/router";

const App = () => {

  const { theme, toggleTheme } = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Сменить тему</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О приложении</Link>
      <AppRouter />
    </div>
  );
}

export default App;