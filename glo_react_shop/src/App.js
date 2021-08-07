import React from 'react';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';


function App() {

  /*const [openItem, setOpenItem] = React.useState(null);
  заменили верхнюю константу на хук-компонент */
  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Order {...orders} />
      <Menu {...openItem} />
      { openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

/*
для меню: если есть одно то будет и другое

<Menu setOpenItem={setOpenItem} />
<ModalItem openItem={openItem} setOpenItem={setOpenItem} />
*/

export default App;
