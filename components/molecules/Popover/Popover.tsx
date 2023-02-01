import React, { createContext } from "react";
import * as S from "./Popover.styles";

type PopoverContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const PopoverContext = createContext({} as PopoverContextType);

type PopoverTriggerProps = {
  children: React.ReactNode;
};

export const PopoverTrigger = ({ children }: PopoverTriggerProps) => {
  const { setOpen } = React.useContext(PopoverContext);
  const clickTrigger = () => {
    setOpen(true)
  }
  return (
    <S.PopupTrigger onClick={clickTrigger}>
      {children}
    </S.PopupTrigger>
  );
};

type PopoverContentProps = {
  children: React.ReactNode;
  placement?: "bottom" | "bottom-left";
};

export const PopoverContent = ({
  children,
  placement = "bottom",
}: PopoverContentProps) => {
  const { open } = React.useContext(PopoverContext);
  return (
    <S.StyledPopoverContent $open={open} $placement={placement}>
      {children}
    </S.StyledPopoverContent>
  );
};

type PopoverProps = {
  onClickOutside?: () => void;
  children: React.ReactNode;
};

export const Popover = ({ children }: PopoverProps) => {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <PopoverContext.Provider value={{ open, setOpen }}>
      <S.Overlay $open={open} onClick={() => setOpen(false)} />
      <S.StyledPopover>
        {children}
      </S.StyledPopover>
    </PopoverContext.Provider>
  );
};
