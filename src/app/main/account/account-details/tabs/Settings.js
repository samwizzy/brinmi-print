import React from "react";
import { useDispatch } from "react-redux";
import * as Actions from "./../../store/actions";
import * as authActions from "./../../../../auth/store/actions";
import { Button } from "@brinmi";
import { Chip } from "@material-ui/core";
// import PaystackWizard from "./../components/PaystackWizard";

export default function Settings(props) {
  const { user } = props;
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col">
      <div className="flex items-center space-x-2 px-4 py-2">
        <h3 className="text-lg">Settings</h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              {user.email}{" "}
              <Chip
                label={user.isEmailVerified ? "verified" : "not verified"}
                variant="outlined"
              />
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <Button onClick={() => dispatch(Actions.openPasswordDialog())}>
                Change Password
              </Button>
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              {user.phone}{" "}
              <Chip
                label={user.isPhonenumberVerified ? "verified" : "not verified"}
                variant="outlined"
              />
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <Button>Change Phone Number</Button>
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Not an author?
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <Button onClick={() => dispatch(Actions.openAuthorDialog())}>
                Become an author
              </Button>
              {/* <PaystackWizard /> */}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Hey {user.email}
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <Button
                variant="outlined"
                onClick={() => dispatch(authActions.logout())}
              >
                Logout
              </Button>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
