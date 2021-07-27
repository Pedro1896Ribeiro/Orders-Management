import React, { useState, useEffect } from 'react';
import { RefreshControl, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Container,
  Scroller,
  HeaderArea,
  MenuButton,
  HeaderTitle,
  ListArea,
  LoadingIcon,
  InfoMessage,
} from './styles';
import OrderItem from '../../components/OrderItem';
import { db } from '../../services/firebase';

const PendentOrders = ({ navigation }) => {
  var [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const getPendentOrders = () => {
    setLoading(true);
    setList([]);
    db.collection('orders')

      .where('status', '==', 'pendente')
      .orderBy('createdAt', 'desc')
      .onSnapshot((querySnapshot) => {
        const list = [];

        querySnapshot.forEach((documentSnapshot) => {
          list.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setList(list);
        setLoading(false);
      });
  };

  useEffect(() => {
    getPendentOrders();
  }, []);

  const onRefresh = () => {
    setRefreshing(false);
    getPendentOrders();
  };

  return (
    <Container>
      <Scroller
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <HeaderArea>
          <MenuButton onPress={() => navigation.openDrawer()}>
            <Icon name="ios-menu" size={26} color="#FFF" />
          </MenuButton>
          <HeaderTitle>Encomendas Pendentes</HeaderTitle>
        </HeaderArea>
        {loading && <LoadingIcon size="large" color="#FFF" />}
        <View>
          {list.length > 0 && !loading ? (
            <ListArea>
              {list.map((item, key) => (
                <OrderItem key={key} data={item} />
              ))}
            </ListArea>
          ) : (
            <InfoMessage>Sem encomendas.</InfoMessage>
          )}
        </View>
      </Scroller>
    </Container>
  );
};

const FinalizedOrders = ({ navigation }) => {
  var [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const getFinalizedOrders = () => {
    setLoading(true);
    setOrders([]);
    db.collection('orders')
      .where('status', '==', 'finalizada')
      .onSnapshot((querySnapshot) => {
        const orders = [];

        querySnapshot.forEach((documentSnapshot) => {
          orders.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setOrders(orders);
        setLoading(false);
      });
  };

  useEffect(() => {
    getFinalizedOrders();
  }, []);

  const onRefresh = () => {
    setRefreshing(false);
    getFinalizedOrders();
  };

  return (
    <Container>
      <Scroller
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <HeaderArea>
          <MenuButton onPress={() => navigation.openDrawer()}>
            <Icon name="ios-menu" size={26} color="#FFF" />
          </MenuButton>
          <HeaderTitle>Encomendas Finalizadas</HeaderTitle>
        </HeaderArea>
        {loading && <LoadingIcon size="large" color="white" />}
        <View>
          {orders.length > 0 && !loading ? (
            <ListArea>
              {orders.map((item, key) => (
                <OrderItem key={key} data={item} />
              ))}
            </ListArea>
          ) : (
            <InfoMessage>Sem encomendas.</InfoMessage>
          )}
        </View>
      </Scroller>
    </Container>
  );
};

const Drawer = createDrawerNavigator();

const Menu = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Encomendas Pendentes" component={PendentOrders} />
      <Drawer.Screen
        name="Encomendas Finalizadas"
        component={FinalizedOrders}
      />
    </Drawer.Navigator>
  );
};

export default () => {
  return <Menu />;
};
