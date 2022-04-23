import React from "react";

type IDefaultProps = {
  testId?: string;
  className?: string;
  children?: React.ReactNode;
};

declare module "react" {
  export interface IComponent<T = {}> extends React.FC<IDefaultProps & T> {}
}
