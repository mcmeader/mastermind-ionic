import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flat-list-item',
  templateUrl: './flat-list-item.component.html',
  styleUrls: ['./flat-list-item.component.scss'],
})
export class FlatListItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}

// import React from 'react';
// import { View, StyleSheet, Text, Platform } from 'react-native';
// import PropTypes from 'prop-types';
// import GradedRow from '../FlatList/GradedRow';
// import GuessRow from '../FlatList/GuessRow';

// const FlatListItem = (props) => {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.round}>{props.rowNumber}</Text>
//             <GradedRow data={props.gradedRow} difficulty={props.difficulty} />
//             <GuessRow guessRow={props.guessRow} difficulty={props.difficulty} />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'row',
//         height: Platform.isPad ? 150 : 75,
//         borderWidth: 3,
//         borderColor: 'black',
//         marginBottom: 5,
//     },
//     round: {
//         flex: 0.15,
//         alignSelf: 'center',
//         textAlign: 'center',
//         fontSize: Platform.isPad ? 40 : 15,
//     }
// });

// FlatListItem.propTypes = {
//     rowNumber: PropTypes.number,
//     gradedRow: PropTypes.arrayOf(String),
//     guessRow: PropTypes.arrayOf(String),
//     difficulty: PropTypes.object
// }

// export default FlatListItem