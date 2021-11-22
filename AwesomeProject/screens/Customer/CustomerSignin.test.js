import React from "react";
import { render } from "react-native-testing-library";

import CustomerSignin from "./CustomerSignin";

it("renders default elements", () => {
  const { getByPlaceholderText } = render(<CustomerSignin />);
//   const element = getByText("LOG IN CUSTOMER");
  const ele1 = getByPlaceholderText("E-mail");
  const ele2 = getByPlaceholderText("Password");
});
