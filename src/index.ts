import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { List } from "./components/list/list";
import './index.scss';
import { PET } from "./mock/pets";



new Header('.app');
new Footer('.app');
new List('main', PET);
