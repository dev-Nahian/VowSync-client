import MainLayout from "@/layout/MainLayout";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "@/pages/LendingPages/Home";
import About from "@/pages/LendingPages/About";
import BrowseVendors from "@/pages/LendingPages/BrowseVendors";
import CategoriesPage from "@/pages/LendingPages/CategoriesPage";
import BlogsPage from "@/pages/LendingPages/BlogsPage";
import ContactPage from "@/pages/LendingPages/ContactPage";

import ErrorPage from "@/pages/SubPages/ErrorPage";
import AllPages from "@/pages/SubPages/AllPages";

import AuthLayout from "@/layout/AuthLayout";
import Intro from "@/pages/AuthPages/Intro";
import AboutInfo from "@/pages/AuthPages/AboutInfo";
import AuthWelcome from "@/pages/AuthPages/AuthWelcome";
import AuthWeddingDay from "@/pages/AuthPages/AuthWeddingDay";
import AuthWeddingPlace from "@/pages/AuthPages/AuthWeddingPlace";
import AuthWeddingGuests from "@/pages/AuthPages/AuthWeddingGuests";
import AuthPlanning from "@/pages/AuthPages/AuthPlanning";
import AuthPalnningInDetails from "@/pages/AuthPages/AuthPalnningInDetails";
import AuthReviewAndConfirm from "@/pages/AuthPages/AuthReviewAndConfirm";
import Login from "@/pages/AuthPages/Login";
import VendorRegister from "@/pages/AuthPages/VendorRegister";

import CustomerDashboardLayout from "@/layout/CustomerDashboardLayout";
import CustomerDashboardOverview from "@/pages/DashboardPages/CustomerDashboard/CustomerDashboardOverview";
import CustomerBudget from "@/pages/DashboardPages/CustomerDashboard/CustomerBudget";
import CustomerGuestList from "@/pages/DashboardPages/CustomerDashboard/CustomerGuestList";
import CustomerChecklist from "@/pages/DashboardPages/CustomerDashboard/CustomerChecklist";
import CustomerVendors from "@/pages/DashboardPages/CustomerDashboard/CustomerVendors";
import CustomerInvitations from "@/pages/DashboardPages/CustomerDashboard/CustomerInvitations";
import CustomerSettings from "@/pages/DashboardPages/CustomerDashboard/CustomerSettings";

import VendorDashboard from "@/pages/DashboardPages/VendorDashboard/VendorDashboard";

const router = createBrowserRouter([
  // Main Public Layout
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "browse-vendors",
        element: <BrowseVendors />,
      },
      {
        path: "categories",
        element: <CategoriesPage />,
      },
      {
        path: "blogs",
        element: <BlogsPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },

  // For Authentication & Registration
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        index: true,
        element: <Intro />,
      },
      {
        path: "about-info",
        element: <AboutInfo />,
      },
      {
        path: "welcome",
        element: <AuthWelcome />,
      },
      {
        path: "weeding-day",
        element: <AuthWeddingDay />,
      },
      {
        path: "weeding-place",
        element: <AuthWeddingPlace />,
      },
      {
        path: "weeding-guests",
        element: <AuthWeddingGuests />,
      },
      {
        path: "weeding-planning",
        element: <AuthPlanning />,
      },
      {
        path: "weeding-planning-in-details",
        element: <AuthPalnningInDetails />,
      },
      {
        path: "review-details",
        element: <AuthReviewAndConfirm />,
      },
      {
        path: "vendor",
        element: <VendorRegister />,
      },
      {
        path: "vendor/register",
        element: <VendorRegister />,
      },
    ],
  },

  // Customer Dashboard
  {
    path: "customer-dashboard",
    element: <CustomerDashboardLayout />,
    children: [
      {
        index: true,
        element: <CustomerDashboardOverview />,
      },
      {
        path: "budget",
        element: <CustomerBudget />,
      },
      {
        path: "guests",
        element: <CustomerGuestList />,
      },
      {
        path: "checklist",
        element: <CustomerChecklist />,
      },
      {
        path: "vendors",
        element: <CustomerVendors />,
      },
      {
        path: "invitations",
        element: <CustomerInvitations />,
      },
      {
        path: "settings",
        element: <CustomerSettings />,
      },
    ],
  },

  // Vendor Dashboard
  {
    path: "vendor-dashboard",
    element: <VendorDashboard />,
  },

  // Sitemap & Directory
  {
    path: "all-pages",
    element: <AllPages />,
  },

  // Catch-all 404
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
