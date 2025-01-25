// // hooks/useProfile.ts
// import {useDispatch, useSelector} from 'react-redux';
// import {updateProfile} from '../store/slices/updateDetailSlice';
// import {useState} from 'react';

// const useProfile = (navigation: any) => {
//   const dispatch = useDispatch();
//   const profile = useSelector((state: any) => state.profileStore); // Assuming 'state.profile' holds profile data

//   // State for form inputs
//   const [name, setName] = useState(profile.name || '');
//   const [username, setUsername] = useState(profile.username || '');
//   const [email, setEmail] = useState(profile.email || '');

//   // Save profile function
//   const saveProfile = () => {
//     const profileData = {name, username, email};
//     dispatch(updateProfile(profileData)); // Dispatch update action to Redux and Firestore
//     navigation.goBack(); // Navigate back after saving
//   };

//   return {
//     profile,
//     setName,
//     setUsername,
//     setEmail,
//     name,
//     username,
//     email,
//     saveProfile,
//   };
// };

// export default useProfile;
