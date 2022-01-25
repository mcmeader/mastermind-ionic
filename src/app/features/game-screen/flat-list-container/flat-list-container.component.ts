import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flat-list-container',
  templateUrl: './flat-list-container.component.html',
  styleUrls: ['./flat-list-container.component.scss'],
})
export class FlatListContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}

// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, Text } from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
// import PropTypes from 'prop-types';
// import FlatListItem from './FlatList/FlatListItem';

// const FlatListContainer = (props) => {
//     return (
//         <View style={styles.container}>
//             <FlatList
//                 data={props.data}
//                 keyExtractor={(index) => index.round}
//                 renderItem={({ item }) =>
//                     <FlatListItem key={item.rowNumber} rowNumber={item.round} gradedRow={item.answers} guessRow={item.guesses} difficulty={props.difficulty} />
//                 } />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'column-reverse',
//         alignContent: 'center',
//         alignItems: 'stretch',
//         margin: 5
//     },
// });

// FlatListContainer.propTypes = {
//     data: PropTypes.arrayOf(Object),
//     difficulty: PropTypes.object,
// }

// export default FlatListContainer