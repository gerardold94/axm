import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Card, Colors, Title} from 'react-native-paper';
import {StatusBar, FlatList, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {DateTime} from 'luxon';

import {getPosts} from '@/reducers/postSlice';
import {Styles} from './Styles';

const renderItem = ({item}: any) => {
  const {title, author, published_at, thumbnail, is_premium } = item;

  return (
    <Card style={Styles.post}>
      <Card.Cover
        source={{uri: thumbnail || 'https://placeimg.com/1280/780/nature'}}
      />
      <Card.Content>
        <Title>{title}</Title>
        <View style={Styles.postInfo}>
          <View style={Styles.row}>
            <Icon name="user" size={15} color={Colors.grey800} />
            <Text style={Styles.author}>{author}</Text>
          </View>
          <View style={Styles.row}>
            <Icon name="calendar" size={15} color={Colors.grey800} />
            <Text style={Styles.author}>
              {DateTime.fromISO(published_at).setLocale('es-MX').toLocaleString(DateTime.DATE_MED)}
            </Text>
          </View>
        </View>
      </Card.Content>
      {is_premium && <View style={Styles.premium}>
        <Icon name="lock" size={30} color={Colors.white} />
        <Text style={Styles.premiumText}>PREMIUM</Text>
      </View>}
    </Card>
  );
};

const HomeScreen = () => {
  StatusBar.setBarStyle('dark-content');

  const post = useSelector(state => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts(null));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={Styles.container}>
      <FlatList
        data={post.posts}
        renderItem={renderItem}
        refreshing={post.isLoading}
        onRefresh={() => dispatch(getPosts(null))}
      />
    </View>
  );
};

export default HomeScreen;