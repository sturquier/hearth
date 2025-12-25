export interface IHeader {
  mobileOpened: boolean;
  desktopOpened: boolean;
  onToggleMobileCallback: () => void;
  onToggleDesktopCallback: () => void;
}
