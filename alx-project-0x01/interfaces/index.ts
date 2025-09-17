export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  export interface PostData {
    userId: number;
    id?: number;
    title: string;
    body: string;
  }
  
export interface ButtonProps {
  title: string;
  styles: string;
}
  export interface PostModalProps {
    onClose: () => void;
    onSubmit: (post: PostData) => void;
  }
  
 // UserProps Interface
export interface UserProps {
    id?: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
  }
  
  export interface UserModalProps {
    onClose: () => void;
    onSubmit: (post: UserProps) => void;
  }
  
  export interface PostData {
    userId: number;
    id?: number;
    title: string;
    body: string;
  }
  
  export interface PostModalProps {
    onClose: () => void;
    onSubmit: (post: PostData) => void;
  }
  
  // you probably already have PostProps from Task 2:
  export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
  }