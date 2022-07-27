import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  RefreshControl,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import ImageModal from 'react-native-image-modal';
import {Card, IconButton, Paragraph, Colors} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {DateTime} from 'luxon';

import {getImage, likeImage} from '@/reducers/imageSlice';
import Styles from './Styles';

const DescriptionCard = ({image, hide, showLikes, isLandscape}: any) => {
  const dispatch = useDispatch();
  const handleLike = () => {
    dispatch(likeImage({image_id: image.id, like: !image.liked}));
  };

  if (hide) {
    return null;
  }

  return (
    <Card style={isLandscape ? Styles.landscapeInfo : null}>
      <Card.Content>
        <View style={Styles.row}>
          <Text style={Styles.label}>Titulo: </Text>
          <Text style={Styles.text}>{image.title}</Text>
        </View>
        <View style={Styles.row}>
          <Text style={Styles.label}>Autor: </Text>
          <Text style={Styles.text}>{image.author}</Text>
        </View>
        <View style={Styles.row}>
          <Text style={Styles.label}>Lugar: </Text>
          <Text style={Styles.text}>{image.place}</Text>
        </View>
        <View style={Styles.row}>
          <Text style={Styles.label}>Fecha: </Text>
          <Text style={Styles.text}>
            {DateTime.fromISO(image.photo_date)
              .setLocale('es-MX')
              .toFormat("dd 'de' MMMM, yyyy")}
          </Text>
        </View>
        <Paragraph>{image.description || ''}</Paragraph>
      </Card.Content>
      {showLikes ? (
        <Card.Actions>
          <View style={Styles.row}>
            <IconButton
              icon={image.liked ? 'heart' : 'heart-outline'}
              size={30}
              color={image.liked ? Colors.red500 : Colors.black}
              style={Styles.likeButton}
              onPress={handleLike}
            />
            <Text>{image.likes}</Text>
          </View>
        </Card.Actions>
      ) : null}
    </Card>
  );
};

const WeekImage = () => {
  const dispatch = useDispatch();
  const image = useSelector(state => state.image);

  useEffect(() => {
    dispatch(getImage(undefined));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRefresh = () => {
    dispatch(getImage(undefined));
  }

  const isLandscape = () => {
    const {width, height} = Dimensions.get('screen');
    return width > height;
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={image.isLoading}
          onRefresh={onRefresh}
        />
      }
      style={[
        Styles.container,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          paddingHorizontal: isLandscape() ? 64 : 8,
        },
      ]}
      horizontal={isLandscape()}>
      <ImageModal
        source={{uri: image.filename}}
        resizeMode="cover"
        modalImageResizeMode="contain"
        renderFooter={() => (
          <DescriptionCard image={image} hide={isLandscape()} />
        )}
        style={[
          Styles.image,
          {
            width: useWindowDimensions().width * (isLandscape() ? 0.5 : 0.96),
            height: useWindowDimensions().height / (isLandscape() ? 1.45 : 2.5),
          },
        ]}
      />
      <DescriptionCard
        image={{...image}}
        isLandscape={isLandscape()}
        showLikes={true}
      />
    </ScrollView>
  );
};

export default WeekImage;
