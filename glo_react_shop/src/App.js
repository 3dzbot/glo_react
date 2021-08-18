import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';
import { OrderConfirm } from './Components/Order/OrderConfirm';
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';
import { Context } from './Components/Functions/context';

const firebaseConfig = {
  apiKey: "AIzaSyDceNTdwVGwzfpvkutS58dHuzX8VOOkmSM",
  authDomain: "gloreact-3a2b0.firebaseapp.com",
  databaseURL: "https://gloreact-3a2b0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gloreact-3a2b0",
  storageBucket: "gloreact-3a2b0.appspot.com",
  messagingSenderId: "354995301817",
  appId: "1:354995301817:web:929cc08f643fd642a89a68"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth);

  /*const [openItem, setOpenItem] = React.useState(null);
  заменили верхнюю константу на хук-компонент */
  const openItem = useOpenItem();
  const orders = useOrders();
  const orderConfirm = useOrderConfirm();
  useTitle(openItem.openItem);

  return (
    <Context.Provider value={{
      auth,
      openItem,
      orders,
      orderConfirm,
      firebaseDatabase: firebase.database
    }}>
      <GlobalStyle/>
      <NavBar/>
      <Order/>
      <Menu/>
      { openItem.openItem && <ModalItem/>}
      { orderConfirm.openOrderConfirm &&
        <OrderConfirm/> }
    </Context.Provider>
  );
}

/*
для меню: если есть одно то будет и другое

<Menu setOpenItem={setOpenItem} />
<ModalItem openItem={openItem} setOpenItem={setOpenItem} />
*/

export default App;
