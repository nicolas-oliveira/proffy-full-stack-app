import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';

function TeacherItem() {
  return (
    <View style={ styles.container } >
      <View style={ styles.profile } >
        <Image style={ styles.avatar } source={{ uri: 'https://github.com/nicolas-oliveira.png' }} />

        <View style={ styles.profileInfo }>
          <Text style={ styles.name }>Nicolas Oliveira</Text>
          <Text style={ styles.subject }>Química</Text>
        </View>
      </View>
      <Text style={ styles.bio }>
        Entusiasta da Química avançada. {'\n'}{'\n'}
        Apaixonado por explodir coisas, botar fogo em laboratórios e criar Metafetanina. As experiências são o que move o mundo, a gravidade também move! Refutador de internet, tocador de violão. Mais de 200.000 vão no ponto comprar meus produtos.
      </Text>

      <View style={ styles.footer }>
        <Text style={ styles.price }>
          Preço/hora {'    '}
          <Text style={ styles.priceValue }>R$ 20,00</Text>
        </Text>

        <View style={ styles.buttonsContainer } >
          <RectButton style={ styles.favoriteButton }>
          
          </RectButton>
        </View>
      </View>

    </View>
  );
}

export default TeacherItem;
