// import React, { createContext, useReducer } from 'react';

// export const Context = createContext();

// const profileReducer = (state, action) => {
//     switch(action.type) {
//         case 'FETCH_PROFILES_SUCCESS':
//             return {
//                 ...state,
//                 profiles: action.payload,
//                 isLoading: false,
//                 error: null
//             };
//         case 'FETCH_PROFILES_FAILURE':
//             return {
//                 ...state,
//                 isLoading: false,
//                 error: action.payload
//             };
//         default:
//             return state;
//     }
// }

// // Todo Context Provider
// const CtxProvider =  ({ children }) => {

//     const [state, dispatch] = useReducer(profileReducer, { 
//         profiles: [],
//         isLoading: true,
//         error: null,
//     });

//     // Context properties exported
//     const contextValue = {
//         state,
//         dispatch,
//         fetchProfiles
//     };

//     return (
//         <Context.Provider value={contextValue}>
//             {children}
//         </Context.Provider>
//     );
// }

// export default CtxProvider;
