export interface Profile {
  username: string;
  minRoi: number;
  maxRoi: number;
  balance: number;
}

export interface ProfileState {
  profile: Profile;
}