import React, { useState, useEffect, useCallback } from 'react';
import { GiftedChat, Bubble, Send, Day } from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container, SendingContainer } from './styles';
import { db, auth } from '../../services/firebase';

export default () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Bem-Vindo ao Gestor de Encomendas',
        createdAt: new Date(Date.UTC(2021, 6, 6, 11, 55, 0)),
        user: {
          _id: 1893,
          name: 'BOT',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);

    const unsubscribe = db.collection('chats').onSnapshot((querySnapshot) => {
      const messagesFirestore = querySnapshot
        .docChanges()
        .filter(({ type }) => type === 'added')
        .map(({ doc }) => {
          const message = doc.data();
          return { ...message, createdAt: message.createdAt.toDate() };
        })
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      appendMessages(messagesFirestore);
    });

    return () => unsubscribe();
  }, []);

  const appendMessages = useCallback(
    (messages) => {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages),
      );
    },
    [messages],
  );

  async function handleSend(messages) {
    const writes = messages.map((m) => db.collection('chats').add(m));
    await Promise.all(writes);
  }

  function renderDay(props) {
    return <Day {...props} textStyle={{ color: '#414143' }} />;
  }

  function renderBubble(props) {
    return (
      <Bubble
        {...props}
        timeTextStyle={{
          right: { color: '#4dc6f3' },
          left: { color: '#FFF' },
        }}
        wrapperStyle={{
          right: {
            backgroundColor: '#FFF',
          },
          left: {
            backgroundColor: '#4dc6f3',
          },
        }}
        textStyle={{
          right: {
            color: '#4dc6f3',
          },
          left: {
            color: '#FFF',
          },
        }}
      />
    );
  }

  function renderSend(props) {
    return (
      <Send {...props}>
        <SendingContainer>
          <Icon name="ios-send" size={24} color="#4dc6f3" />
        </SendingContainer>
      </Send>
    );
  }

  return (
    <Container>
      <GiftedChat
        messages={messages}
        showUserAvatar
        user={{
          _id: auth?.currentUser?.email,
          name: auth?.currentUser?.displayName,
          avatar: auth?.currentUser?.photoURL,
        }}
        onSend={handleSend}
        renderBubble={renderBubble}
        placeholder="Escreva a sua mensagem..."
        renderSend={renderSend}
        renderDay={renderDay}
      />
    </Container>
  );
};
