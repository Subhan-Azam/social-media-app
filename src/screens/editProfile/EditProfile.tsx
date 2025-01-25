import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import EditProfileInput from '../../components/editProfileInput/EditProfileInput';
import PageShiftAuth from '../../components/pageShiftAuth/PageShiftAuth';

interface props {
  navigation: {
    navigate: (screen: string) => void;
    goBack: () => void;
  };
}
const EditProfile: React.FC<props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text onPress={() => navigation.goBack()} style={styles.cancelText}>
            Cancel
          </Text>
          <Text style={styles.editText}>Edit Profile</Text>
          <Text style={styles.doneText}>Done</Text>
        </View>
        <View style={styles.imgChange}>
          <Image source={require('../../assets/images/ProfileImg.png')} />
          <TouchableOpacity>
            <Text style={styles.changeName}>Change Profile Photo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
        <View style={styles.box}>
          <EditProfileInput title="name" />
          <EditProfileInput title="User Name" />
          <EditProfileInput title="Website" />
          {/* <EditProfileInput title="Bio" /> */}
          <View style={styles.bioSec}>
            <Text style={styles.bioText}>Bio</Text>
            <Text style={styles.bio}>
              Digital goodies designer{' '}
              <Text style={styles.bioName}>@pixsellz</Text> Everything is
              designed
            </Text>
          </View>
        </View>

        <View style={styles.line} />
        <View style={styles.box}>
          <Text style={styles.privateInfo}>Private Information</Text>
          <EditProfileInput title="Email" />
          <EditProfileInput title="Phone" />
          <EditProfileInput title="Gender" />
        </View>
        <PageShiftAuth
          title1="Want to change your password? "
          title2="Reset Password."
          onPress={() => navigation.navigate('ResetPassword')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginBottom: 10,
  },
  container: {
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderColor: '#A6A6AA',
    boxShadow: 'rgba(166, 166, 170, 1)',
  },
  cancelText: {
    color: '#262626',
    fontWeight: 400,
    fontSize: 16,
  },
  editText: {
    color: '#262626',
    fontWeight: 600,
    fontSize: 16,
  },
  doneText: {
    color: '#3897F0',
    fontWeight: 600,
    fontSize: 16,
  },
  imgChange: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  line: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#3C3C434A',
    marginTop: 20,
    marginBottom: 10,
  },
  box: {
    paddingHorizontal: 20,
  },

  bioSec: {
    flexDirection: 'row',
    marginTop: 10,
  },
  bioText: {
    width: 90,
    fontSize: 15,
  },
  bio: {
    fontSize: 15,
    width: '75%',
  },
  bioName: {
    fontWeight: 600,
    color: '#05386B',
    marginLeft: 5,
  },
  changeName: {
    fontWeight: 600,
    fontSize: 13,
    color: '#3897F0',
    marginTop: 10,
  },

  privateInfo: {
    fontWeight: 600,
    fontSize: 16,
    marginTop: 10,
  },
});

// import React from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Image,
// } from 'react-native';
// import EditProfileInput from '../../components/editProfileInput/EditProfileInput';
// import PageShiftAuth from '../../components/pageShiftAuth/PageShiftAuth';
// import useProfile from '../../hooks/useUpdateDetail'; // Import the custom hook

// interface props {
//   navigation: {
//     navigate: (screen: string) => void;
//     goBack: () => void;
//   };
// }
// const EditProfile: React.FC<props> = ({navigation}) => {
//   // Use the custom hook
//   const {name, setName, username, setUsername, email, setEmail, saveProfile} =
//     useProfile(navigation);

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView contentContainerStyle={styles.container}>
//         <View style={styles.header}>
//           <Text onPress={() => navigation.goBack()} style={styles.cancelText}>
//             Cancel
//           </Text>
//           <Text style={styles.editText}>Edit Profile</Text>
//           <TouchableOpacity onPress={saveProfile}>
//             <Text style={styles.doneText}>Done</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.imgChange}>
//           <Image source={require('../../assets/images/ProfileImg.png')} />
//           <TouchableOpacity>
//             <Text style={styles.changeName}>Change Profile Photo</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.line} />
//         <View style={styles.box}>
//           <EditProfileInput title="Name" value={name} onChange={setName} />
//           <EditProfileInput
//             title="User Name"
//             value={username}
//             onChange={setUsername}
//           />
//           <EditProfileInput title="Email" value={email} onChange={setEmail} />
//         </View>
//         <View style={styles.line} />
//         <PageShiftAuth
//           title1="Want to change your password?"
//           title2="Reset Password."
//           onPress={() => navigation.navigate('ResetPassword')}
//         />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default EditProfile;

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     marginBottom: 10,
//   },
//   container: {
//     flexGrow: 1,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,
//     borderColor: '#A6A6AA',
//     boxShadow: 'rgba(166, 166, 170, 1)',
//   },
//   cancelText: {
//     color: '#262626',
//     fontWeight: 400,
//     fontSize: 16,
//   },
//   editText: {
//     color: '#262626',
//     fontWeight: 600,
//     fontSize: 16,
//   },
//   doneText: {
//     color: '#3897F0',
//     fontWeight: 600,
//     fontSize: 16,
//   },
//   imgChange: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: 20,
//   },
//   line: {
//     width: '100%',
//     height: 0.5,
//     backgroundColor: '#3C3C434A',
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   box: {
//     paddingHorizontal: 20,
//   },

//   bioSec: {
//     flexDirection: 'row',
//     marginTop: 10,
//   },
//   bioText: {
//     width: 90,
//     fontSize: 15,
//   },
//   bio: {
//     fontSize: 15,
//     width: '75%',
//   },
//   bioName: {
//     fontWeight: 600,
//     color: '#05386B',
//     marginLeft: 5,
//   },
//   changeName: {
//     fontWeight: 600,
//     fontSize: 13,
//     color: '#3897F0',
//     marginTop: 10,
//   },

//   privateInfo: {
//     fontWeight: 600,
//     fontSize: 16,
//     marginTop: 10,
//   },
// });
