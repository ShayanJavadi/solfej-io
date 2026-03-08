import * as React from "react";
import QueryProvider from ".";

export function withTheme(Component) {
  return function ThemeComponent(props) {
    return (
      <QueryProvider.Consumer>
        {(contexts) => <Component {...props} {...contexts} />
        }
      </QueryProvider.Consumer>
    );
  };
}