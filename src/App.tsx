import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Layout from "./Layouts";
import CarSearchPage from "./pages/CarSearchPage";
import CarBookingPage from "./pages/CarBooking";
import PaymentPage from "./pages/Payment";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import BusinessAccountPage from "./pages/BusinessAccount";
import BusinessRegisterPage from "./pages/BusinessRegister";
import PaymentSuccessPage from "./pages/PaymentSuccess";
import PaymentFailPage from "./pages/PaymentFail";
import HelpPage from "./pages/Help";
import TermConditions from "./pages/TermConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RegisterBusiness from "./pages/RegisterBusiness";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/business-signup" element={<BusinessRegisterPage />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/home/:slug" element={<LandingPage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/car-search" element={<CarSearchPage />} />
        <Route path="/car-booking" element={<CarBookingPage />} /> 
        <Route path="/payment" element={<PaymentPage />} />

        <Route path="/register-business" element={<RegisterBusiness />} />

        <Route path="/business-account" element={<BusinessAccountPage />} />
        <Route path="/booking-success" element={<PaymentSuccessPage />} />
        <Route path="/booking-failed" element={<PaymentFailPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermConditions />} />
      </Route>
    </Routes>
  );
}
export default App;
