export interface UploadDoc {
  uid: string;
  name: string;
  createTimeStamp: number;
  content: any[];
  photoURL?: string;
  displayName?: string;
  myCustomData?: string;
  date?: string;
}