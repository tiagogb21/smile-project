interface FamilyType {
  default: string;
  secondary: string;
}

interface SpacingType {
  large: string;
  medium: string;
}

interface ColorType {
  secondaryColor: string;
}

interface FontType {
  family: FamilyType;
}

export interface ThemeType {
  font: FontType;
  spacings: SpacingType;
  colors: ColorType;
}
