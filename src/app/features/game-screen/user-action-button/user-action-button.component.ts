import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-action-button',
  templateUrl: './user-action-button.component.html',
  styleUrls: ['./user-action-button.component.scss'],
})
export class UserActionButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}

// import React from 'react';
// import PropTypes from 'prop-types';
// import { Platform, StyleSheet, Text } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

// const UserActionButton = (props) => {
//     return (
//         <TouchableOpacity style={styles.buttonContainer} onPress={() => props.clickAction()}>
//             <Text style={styles.text}>
//                 {props.buttonText}
//             </Text>
//         </TouchableOpacity>
//     );
// }

// const styles = StyleSheet.create({
//     buttonContainer: {
//         flex: 1,
//         width: Platform.isPad ? 550 : 200,
//         borderWidth: 2,
//         borderColor: 'black',
//         justifyContent: 'center',
//     },
//     text: {
//         textAlign: 'center',
//         fontSize: Platform.isPad ? 50 : 15
//     }
// });

// UserActionButton.propTypes = {
//     buttonText: PropTypes.string,
//     clickAction: PropTypes.func
// }

// export default UserActionButton