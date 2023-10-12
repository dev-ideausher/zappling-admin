import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notifications from "./pages/Notifications/Notifications";
import Users from "./pages/Users/Users";
import EarningSources from "./components/Revenue/EarningSources";
import CommissionStructure from "./components/Revenue/CommissionStructure";
import SusbcriptionStructrure from "./components/Revenue/SusbcriptionStructrure";
import SupportRequests from "./pages/Support Reqeuests/SupportRequests";
import FAQs from "./pages/Faqs/FAQs";
import Categories from "./components/Faqs/Categories";
import Nfts from "./components/Market/Nfts";
import Subscriptions from "./components/Market/Subscriptions";
import Blog from "./pages/Blog/Blog";
import Queries from "./components/Faqs/Queries";
import Sidebar from "./components/sidebar/Sidebar";
import Feedback from "./pages/Feedback/Feedback";
import Login from "./pages/Login/Login";
import User from "./pages/Users/User Screen/User";
import NftDetails from "./components/Market/NFT/NftDetails";
import Collections from "./pages/Market Place/Collections/Collections";
import CommunityPosts from "./components/Market/CommunityPosts";
import PostDetails from "./components/Market/Posts/PosttDetails";
import CollectionDetails from "./components/Market/Collections/CollectionDetails";

function RouteEnum() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users">
          <Route
            index
            element={
              <Sidebar>
                <Users />{" "}
              </Sidebar>
            }
          />
          <Route
            path="/users/user"
            element={
              <Sidebar>
                <User />{" "}
              </Sidebar>
            }
          />
        </Route>

        <Route path="/marketPlace">
          <Route
            index
            element={
              <Sidebar>
                <Nfts />
              </Sidebar>
            }
          />

          <Route
            path="collections"
            element={
              <Sidebar>
                <Collections />
              </Sidebar>
            }
          />

          <Route
            path="collection"
            element={
              <Sidebar>
                <CollectionDetails />
              </Sidebar>
            }
          />

          <Route
            path="nfts"
            element={
              <Sidebar>
                <Nfts />
              </Sidebar>
            }
          />

          <Route
            path="nft"
            element={
              <Sidebar>
                <NftDetails />
              </Sidebar>
            }
          />

          <Route
            path="communityPosts"
            element={
              <Sidebar>
                <CommunityPosts />
              </Sidebar>
            }
          />

          <Route
            path="post"
            element={
              <Sidebar>
                <PostDetails />
              </Sidebar>
            }
          />

          <Route
            path="subscriptions"
            element={
              <Sidebar>
                <Subscriptions />
              </Sidebar>
            }
          />

          <Route
            path="categories"
            element={
              <Sidebar>
                <Categories />
              </Sidebar>
            }
          />
        </Route>

        <Route path="/revenue">
          <Route
            index
            element={
              <Sidebar>
                <Queries />
              </Sidebar>
            }
          />
          <Route
            path="earningSources"
            element={
              <Sidebar>
                <EarningSources />
              </Sidebar>
            }
          />

          <Route
            path="commissionStructure"
            element={
              <Sidebar>
                <CommissionStructure />
              </Sidebar>
            }
          />
          <Route
            path="subscriptionStructure"
            element={
              <Sidebar>
                <SusbcriptionStructrure />
              </Sidebar>
            }
          />
        </Route>

        <Route path="/blog">
          <Route
            index
            element={
              <Sidebar>
                <Blog />
              </Sidebar>
            }
          />
        </Route>

        <Route path="/notifications">
          <Route
            index
            element={
              <Sidebar>
                <Notifications />
              </Sidebar>
            }
          />
        </Route>
        <Route path="/supportRequests">
          <Route
            index
            element={
              <Sidebar>
                <SupportRequests />
              </Sidebar>
            }
          />
        </Route>
        <Route path="/faqs">
          <Route
            index
            element={
              <Sidebar>
                <FAQs />
              </Sidebar>
            }
          />
          <Route
            path="categories"
            element={
              <Sidebar>
                <Categories />
              </Sidebar>
            }
          />
        </Route>

        <Route path="/feedback">
          <Route
            index
            element={
              <Sidebar>
                <Feedback />
              </Sidebar>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default RouteEnum;
