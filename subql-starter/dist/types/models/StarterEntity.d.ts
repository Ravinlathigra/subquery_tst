import { Entity, FunctionPropertyNames } from "@subql/types";
declare type StarterEntityProps = Omit<StarterEntity, NonNullable<FunctionPropertyNames<StarterEntity>>>;
export declare class StarterEntity implements Entity {
    constructor(id: string);
    id: string;
    field1: number;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<StarterEntity | undefined>;
    static create(record: StarterEntityProps): StarterEntity;
}
export {};
