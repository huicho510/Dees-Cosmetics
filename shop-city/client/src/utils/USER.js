// function App() {
//     const [registerUsername, setRegisterUsername] = useState("");
//     const [registerPassword, setRegisterPassword] = useState("");
//     const [loginUsername, setLoginUsername] = useState("");
//     const [loginPassword, setLoginPassword] = useState("");
//     const [data, setData] = useState(null);
//     export default {
//       Axios({
//         method: "POST",
//         data: {
//           username: registerUsername,
//           password: registerPassword,
//         },
//         withCredentials: true,
//         url: "http://localhost:4000/register",
//       }).then((res) => console.log(res));
//     };
//     const login = () => {
//       Axios({
//         method: "POST",
//         data: {
//           username: loginUsername,
//           password: loginPassword,
//         },
//         withCredentials: true,
//         url: "http://localhost:4000/login",
//       }).then((res) => console.log(res));
//     };
//     const getUser = () => {
//       Axios({
//         method: "GET",
//         withCredentials: true,
//         url: "http://localhost:4000/user",
//       }).then((res) => {
//         setData(res.data);
//         console.log(res.data);
//       });
//     };
// }