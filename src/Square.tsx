// Copyright (c) Facebook, Inc. and its affiliates.

import React from "react";
import "./Tutorial.css";
// イベントを表す props には on[Event] という名前、イベントを処理するメソッドには handle[Event]
// Propsを使うときは型を指定する必要がある
// type MyFunctionType = () => void;
//VoidFunction
// https://awesome-linus.com/2020/01/10/react-props-function-type/

interface Props {
  value: string;
  // Click時の挙動を引き渡す（状態も上位で管理されているので）
  onClick: VoidFunction;
}

//関数コンポーネントで書き直した
function Square(props: Props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

// Generic型で型を引き渡す
/* 
class Square extends React.Component<Props> {
  //状態は管理しない
  // setStateを呼ぶと内部のコンポーネントも自動的に更新する
  render() {
    return (
      // propsのonClickを引き渡す
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}
*/
export default Square;
