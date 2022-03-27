import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-round-row',
  templateUrl: './game-round-row.component.html',
  styleUrls: ['./game-round-row.component.scss'],
})
export class GameRoundRowComponent implements OnInit {
  constructor() {}

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

// import React, { useEffect } from 'react';
// import { View, StyleSheet, Text } from 'react-native';
// import PropTypes from 'prop-types';
// import StaticColorPeg from '../../Pegs/StaticColorPeg';

// const GuessRow = (props) => {
//     return (
//         <View style={styles.container}>
//             {props.guessRow.map((value, index) =>
//                 <StaticColorPeg key={index} pegColor={value} difficulty={props.difficulty} />)}
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'row',
//         alignItems: 'center',
//         borderWidth: 1,
//         borderColor: 'black',
//     },
// });

// GuessRow.propTypes = {
//     guessRow: PropTypes.arrayOf(String),
//     difficulty: PropTypes.object,
// }

// export default GuessRow

// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import PropTypes from 'prop-types';
// import StaticColorPeg from '../../Pegs/StaticColorPeg';

// const GradedRow = (props) => {
//     return (
//         <View style={styles.container}>
//             {props.data.map((value, index) =>
//                 <StaticColorPeg key={index} pegColor={value} difficulty={props.difficulty} />)}
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'row',
//         alignItems: 'center',
//         borderWidth: 1,
//         borderColor: 'black',
//     },
// });

// GradedRow.propTypes = {
//     data: PropTypes.arrayOf(StaticColorPeg),
//     difficulty: PropTypes.object,
// }

// export default GradedRow
