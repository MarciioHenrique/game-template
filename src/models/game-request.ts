export interface GameRequest {
  configurations: GeneralSettings;
  components: Components;
  scope: Scope;
}

export interface GeneralSettings {
  projectName: string;
  database: boolean;
  sounds: boolean;
  gitIgnore: boolean;
}

export interface Components {
  menu: boolean;
  intro: boolean;
  startScreen: boolean;
  endScreen: boolean;
  scoreAndTime: boolean;
}

export interface Scope {
  vowels: string[];
  stages: string[];
}
