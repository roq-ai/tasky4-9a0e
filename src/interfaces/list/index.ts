import { TaskInterface } from 'interfaces/task';
import { UserInterface } from 'interfaces/user';
import { TeamInterface } from 'interfaces/team';
import { GetQueryInterface } from 'interfaces';

export interface ListInterface {
  id?: string;
  owner_id: string;
  team_id: string;
  created_at?: any;
  updated_at?: any;
  task?: TaskInterface[];
  user?: UserInterface;
  team?: TeamInterface;
  _count?: {
    task?: number;
  };
}

export interface ListGetQueryInterface extends GetQueryInterface {
  id?: string;
  owner_id?: string;
  team_id?: string;
}
