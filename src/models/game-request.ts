export interface GameRequest {
  configurations: GeneralSettings;
  components: Components;
  scope: Scope;
  otherSettings: OtherSettings;
}

export interface GeneralSettings {
  projectName: string;
  screenDimensions: string;
  screenProportions: string;
  gitIgnore: boolean;
}

export interface Components {
  menu: boolean;
  card: boolean;
  button: boolean;
  scoreAndTime: boolean;
}

export interface Scope {
  vowels: string[];
  stages: string[];
}

export interface OtherSettings {
  test: string;
}
