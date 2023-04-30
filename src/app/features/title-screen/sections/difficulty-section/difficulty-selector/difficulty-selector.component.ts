import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-difficulty-selector',
  templateUrl: './difficulty-selector.component.html',
  styleUrls: ['./difficulty-selector.component.scss'],
})
export class DifficultySelectorComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

// import React from 'react';
// import PropTypes from 'prop-types'
// import { Platform, StyleSheet, TextInput } from 'react-native';
// import { getDifficulties } from '../../constants/enums/Difficulties';
// import ModalSelector from 'react-native-modal-selector';

// const DifficultySelector = (props) => {
//     let difficulties = getDifficulties();
//     let data = difficulties.map((data, index) => {
//         return (
//             {
//                 key: index,
//                 label: `${data.difficulty}\nPegs:${data.numberOfPegs}\nGuesses:${data.maxGuesses}`
//             })
//     })

//     return (
//         <ModalSelector
//             style={styles.buttonContainer}
//             cancelText="CANCEL"
//             data={data}
//             animationType="fade"
//             optionTextStyle={styles.sectionText}
//             cancelTextStyle={styles.cancelTextStyle}
//             onChange={(option) => props.setDifficulty(option.key)
//             } >
//             <TextInput
//                 style={styles.textStyle}
//                 editable={false}
//                 value={props.difficultyIndex != undefined ? `Difficulty: ${difficulties[props.difficultyIndex].difficulty}` : "Select a Difficulty"} />
//         </ModalSelector>

//     );
// }

// const styles = StyleSheet.create({
//     buttonContainer: {
//         flexDirection: 'column',
//         alignContent: 'center',
//         flex: 1,
//         marginTop: Platform.isPad ? 50 : 20,
//         marginBottom: Platform.isPad ? 50 : 20,
//         marginLeft: 50,
//         marginRight: 50,
//         backgroundColor: "lightblue",
//     },
//     textStyle: {
//         marginTop: Platform.isPad ? 30 : 8,
//         marginBottom: 20,
//         height: Platform.isPad ? 100 : 40,
//         alignSelf: 'center',
//         color: 'black',
//         fontSize: Platform.isPad ? 50 : 20,
//     },
//     sectionText: {
//         fontSize: Platform.isPad ? 50 : 20,
//     },
//     cancelTextStyle: {
//         fontSize: Platform.isPad ? 50 : 20,
//     }
// });

// DifficultySelector.propTypes = {
//     difficultyIndex: PropTypes.number,
//     setDifficulty: PropTypes.func
// }

// export default DifficultySelector
