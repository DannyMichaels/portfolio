import { ClickAwayListener as ClickyComponent } from "@material-ui/core";
import { useCallback } from "react";
export default function ClickAwayListener({
  onClickAway,
  isMenuShowing,
  children,
}) {
  const myLovelyChildren = useCallback(() => {
    return isMenuShowing ? <>{children}</> : "";
  }, []);

  if (isMenuShowing) {
    return (
      <ClickyComponent onClickAway={onClickAway}>{children}</ClickyComponent>
    );
  } else {
    return <>{myLovelyChildren}</>;
  }
}
