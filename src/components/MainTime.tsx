import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface MainTimeInterface {
  number: number;
}

function MainTime(props: MainTimeInterface) {
  return (
    <>
      <Text style={styles.title}>{props.number}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default MainTime;
