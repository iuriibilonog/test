import WelcomeScreen from "../../components/WelcomeScreen";
import MainInfoScreen from "../../components/MainInfoScreen";
import LoginScreen from "../../components/LoginScreen";
import Footer from "../../components/Footer";
import SeparateBlock from "../../components/separateBlock";

const MainPage = () => {
  return (
    <>
      <WelcomeScreen />
      <MainInfoScreen />
      <SeparateBlock />
      <LoginScreen />
      {/* <Footer /> */}
    </>
  );
};

export default MainPage;
