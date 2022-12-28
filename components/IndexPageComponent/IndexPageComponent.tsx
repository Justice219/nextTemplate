import { ReactElement, useState } from "react";
import {
  makeElementClassNameFactory,
  makeRootClassName,
} from "../../util/classnames";

const ROOT = makeRootClassName("IndexPageComponent"); // Root of the component we are making.
const el = makeElementClassNameFactory(ROOT); // each element of the Root component.

export function IndexPageComponent(): ReactElement {
    const [count, setCount] = useState(0);

  return (
    <div className={ROOT}>
      <div className={el`body`}>
        <h1 className={el`title`}>Welcome to Next.js!</h1>
        <button className={el`button`} onClick={() => {
            setCount(count + 1);
        }}>Click me!</button>
        <p className={el`text`}>You clicked {count} times</p>
      </div>
    </div>
  );
}