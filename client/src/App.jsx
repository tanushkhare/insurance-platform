import { Routes, Route } from "react-router-dom";

/* PUBLIC PAGES */
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ExplorePlans from "./pages/ExplorePlans";

import GeneralInsurance from "./pages/GeneralInsurance";
import LifeInsurance from "./pages/LifeInsurance";
import MutualFunds from "./pages/MutualFunds";

/* CHATBOT */
import ChatBot from "./chatbot/chatBot";

/* LAYOUT */
import Layout from "./components/layout/Layout";

/* DASHBOARD LAYOUT */
import DashboardLayout from "./components/dashboard/DashboardLayout";

/* DASHBOARD PAGES */
import Dashboard from "./pages/Dashboard";
import Policies from "./pages/dashboard/Policies";
import CreatePolicy from "./pages/dashboard/CreatePolicy";
import Claims from "./pages/dashboard/Claims";
import Investments from "./pages/dashboard/Investments";
import Profile from "./pages/dashboard/Profile";

/* PRIVATE ROUTE */
import PrivateRoute from "./components/auth/PrivateRoute";

function App() {
  return (
    <>
      <Routes>

        {/* ==========================================
            PUBLIC ROUTES
        ========================================== */}

        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />

        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />

        <Route
          path="/plans"
          element={
            <Layout>
              <ExplorePlans />
            </Layout>
          }
        />

        {/* General Insurance */}

        <Route
          path="/plans/general"
          element={
            <Layout>
              <GeneralInsurance />
            </Layout>
          }
        />

        {/* Life Insurance */}

        <Route
          path="/plans/life"
          element={
            <Layout>
              <LifeInsurance />
            </Layout>
          }
        />

        {/* Mutual Funds */}

        <Route
          path="/plans/mutual-funds"
          element={
            <Layout>
              <MutualFunds />
            </Layout>
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* ==========================================
            PROTECTED DASHBOARD
        ========================================== */}

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          {/* Dashboard Home */}

          <Route
            index
            element={<Dashboard />}
          />

          {/* Policies */}

          <Route
            path="policies"
            element={<Policies />}
          />

          {/* Create Policy */}

          <Route
            path="create-policy"
            element={<CreatePolicy />}
          />

          {/* Claims */}

          <Route
            path="claims"
            element={<Claims />}
          />

          {/* Investments */}

          <Route
            path="investments"
            element={<Investments />}
          />

          {/* Profile */}

          <Route
            path="profile"
            element={<Profile />}
          />
        </Route>

      </Routes>

      {/* Global ChatBot */}

      <ChatBot />
    </>
  );
}

export default App;