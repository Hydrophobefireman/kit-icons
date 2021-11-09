import {RefType} from "@hydrophobefireman/ui-lib";

export interface IconProps extends Omit<JSX.SVGAttributes, "size"> {
  size?: string | number;
  color?: string;
  children?: any;
  dom?: RefType<SVGElement>;
}
