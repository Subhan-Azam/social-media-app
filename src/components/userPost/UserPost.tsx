import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/types';
import {UserProps} from '../../types/types';

const UserPost: React.FC<UserProps> = ({post}) => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'UserProfile'>
    >();
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('UserProfile', {userId: post.userUID});
          }}
          style={styles.profileHeader}>
          <Image
            style={styles.officialImg}
            source={require('../../assets/images/unknownIcon.jpg')}
          />
          <View>
            <View style={styles.officialName}>
              <Text style={styles.officialNameText}>{post.userName}</Text>
              <Image source={require('../../assets/images/OfficialIcon.png')} />
            </View>
            <View>
              <Text style={styles.userLocationText}>Tokyo, Japan</Text>
            </View>
          </View>
        </TouchableOpacity>

        <Image source={require('../../assets/images/MoreIcon.png')} />
      </View>

      <Image source={{uri: post.imageUrl}} style={styles.postImage} />
      <View style={styles.postDescDate}>
        <Text style={styles.desc}>
          <Text style={styles.descName}>{post.userName}</Text>
          {post.description}
        </Text>
        <Text style={styles.date}>{post.createdAt}</Text>
      </View>
    </>
  );
};

export default UserPost;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  profileHeader: {
    flexDirection: 'row',
    gap: 8,
  },
  officialImg: {
    width: 32,
    height: 32,
    borderRadius: 50,
  },
  officialName: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  postImage: {
    width: 370,
    height: 375,
    objectFit: 'cover',
  },
  officialNameText: {
    fontWeight: 600,
    fontSize: 13,
    color: '#262626',
  },
  userLocationText: {
    fontSize: 11,
    fontWeight: 400,
  },
  postDescDate: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    gap: 7,
  },
  desc: {
    fontSize: 13,
  },
  descName: {
    fontWeight: 600,
  },
  date: {
    color: '#00000066',
    fontSize: 11,
  },
});

// import {Image, StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// interface UserPostProps {
//   post: {
//     imageUrl: string;
//     description: string;
//     userName: string;
//     location: string;
//     date: string;
//   };
// }

// const UserPost: React.FC<UserPostProps> = ({post}) => {
//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <View style={styles.profileHeader}>
//           {/* Placeholder for profile picture */}
//           <Image source={require('../../assets/images/Oval.png')} />
//           <View>
//             <View style={styles.officialName}>
//               <Text style={styles.officialNameText}>{post.userName}</Text>
//               {/* Placeholder for verified icon */}
//               <Image source={require('../../assets/images/OfficialIcon.png')} />
//             </View>
//             <View>
//               <Text style={styles.userLocationText}>{post.location}</Text>
//             </View>
//           </View>
//         </View>
//         {/* More options icon */}
//         <Image source={require('../../assets/images/MoreIcon.png')} />
//       </View>

//       {/* Post Image */}
//       <Image source={{uri: post.imageUrl}} style={styles.postImage} />

//       {/* Description and Date */}
//       <View style={styles.postDescDate}>
//         <Text style={styles.desc}>
//           <Text style={styles.descName}>{post.userName} </Text>
//           {post.description}
//         </Text>
//         <Text style={styles.date}>{post.date}</Text>
//       </View>
//     </View>
//   );
// };

// export default UserPost;

// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 20,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     overflow: 'hidden',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 10,
//   },
//   profileHeader: {
//     flexDirection: 'row',
//     gap: 8,
//   },
//   officialName: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 5,
//   },
//   officialNameText: {
//     fontWeight: '600',
//     fontSize: 13,
//     color: '#262626',
//   },
//   userLocationText: {
//     fontSize: 11,
//     fontWeight: '400',
//     color: '#555',
//   },
//   postImage: {
//     width: '100%',
//     height: 200,
//   },
//   postDescDate: {
//     paddingHorizontal: 10,
//     paddingVertical: 15,
//     gap: 7,
//   },
//   desc: {
//     fontSize: 13,
//     color: '#333',
//   },
//   descName: {
//     fontWeight: '600',
//     color: '#000',
//   },
//   date: {
//     color: '#888',
//     fontSize: 11,
//   },
// });
