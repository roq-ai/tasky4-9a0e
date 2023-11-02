import { ListInterface } from 'interfaces/list';
import { GetQueryInterface } from 'interfaces';

export interface TaskInterface {
  id?: string;
  list_id: string;
  name: string;
  status?: boolean;
  created_at?: any;
  updated_at?: any;

  list?: ListInterface;
  _count?: {};
}

export interface TaskGetQueryInterface extends GetQueryInterface {
  id?: string;
  list_id?: string;
  name?: string;
}
