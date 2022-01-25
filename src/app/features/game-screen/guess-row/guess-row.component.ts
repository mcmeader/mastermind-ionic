import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guess-row',
  templateUrl: './guess-row.component.html',
  styleUrls: ['./guess-row.component.scss'],
})
export class GuessRowComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}

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