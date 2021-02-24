import { ClickAwayListener as ClickyComponent } from "@material-ui/core";
export default function ClickAwayListener({
  onClickAway,
  isMenuShowing,
  children,
}) {
  if (isMenuShowing) {
    return (
      <ClickyComponent onClickAway={onClickAway}>{children}</ClickyComponent>
    );
  } else {
    return <>{children}</>;
  }
}
