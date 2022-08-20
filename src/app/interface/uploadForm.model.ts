export interface UploadForm {
    uid: string;
    name: string;
    createTimeStamp: number;
    content:any[];
    photoURL?: string;
    displayName?: string;
    myCustomData?: string;
    date?: string;
  }