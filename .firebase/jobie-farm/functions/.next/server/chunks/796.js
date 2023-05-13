"use strict";
exports.id = 796;
exports.ids = [796];
exports.modules = {

/***/ 236:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ auth),
/* harmony export */   "db": () => (/* binding */ db)
/* harmony export */ });
/* unused harmony export app */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9500);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(401);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_analytics__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_analytics__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Import the functions you need from the SDKs you need



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// TODO: Replace the following with your app's Firebase project configuration
// Initialize Cloud Firestore and get a reference to the service
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_anNIk3aPsyNhPQM_fLqQ1yoEKjlSGk0" ?? 0,
    authDomain: "jobie-farm.firebaseapp.com" ?? 0,
    projectId: "jobie-farm" ?? 0,
    storageBucket: "jobie-farm.appspot.com",
    messagingSenderId: "937897298518",
    appId: "1:937897298518:web:38f7d3b50703ca8d3d89f7",
    measurementId: "G-MKYV4L1C9W"
};
// Initialize Firebase
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
if (false) {}
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(app);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(app);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1125:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useFirebaseAuth)
/* harmony export */ });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(401);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(236);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, _firebase__WEBPACK_IMPORTED_MODULE_2__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, _firebase__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const formatAuthUser = (user)=>({
        uid: user.uid,
        email: user.email
    });
function useFirebaseAuth() {
    const [authUser, setAuthUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const clear = ()=>{
        setAuthUser(null);
        setLoading(false);
    };
    const signInWithCustomEmailAndPassword = ({ email , password  })=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth */ .I, email, password);
    const createNewUserWithEmailAndPassword = async ({ email , password  })=>{
        const credential = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.createUserWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth */ .I, email, password);
        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.sendEmailVerification)(credential.user);
        return credential.user;
    };
    const requestForgotPassword = async (email)=>await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.sendPasswordResetEmail)(_firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth */ .I, email, {
            url: "http://localhost:3000/?reset-password=ok"
        });
    const signInWithGoogle = async ()=>{
        const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_0__.GoogleAuthProvider();
        const credential = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithPopup)(_firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth */ .I, provider);
        return credential.user;
    };
    const signInWithFacebook = async ()=>{
        const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_0__.FacebookAuthProvider();
        const credential = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithPopup)(_firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth */ .I, provider);
        return credential.user;
    };
    const updateUsername = (user, name)=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.updateProfile)(user, {
            displayName: name
        });
    const signOut = ()=>_firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth.signOut */ .I.signOut();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.onAuthStateChanged)(_firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth */ .I, (user)=>{
            if (!user) {
                setAuthUser(null);
                setLoading(false);
                return;
            }
            setLoading(true);
            var formattedUser = formatAuthUser(user);
            setAuthUser(formattedUser);
            setLoading(false);
        });
        return ()=>unsubscribe();
    }, []);
    return {
        authUser,
        loading,
        signInWithCustomEmailAndPassword,
        createNewUserWithEmailAndPassword,
        updateUsername,
        signInWithGoogle,
        signInWithFacebook,
        requestForgotPassword,
        signOut
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;